import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		// Bind to all interfaces so the dev server is reachable on LAN
		// (other devices can open http://<this-machine-ip>:5173)
		host: true,
		// Single proxy rule covering all backend route groups (/ai, /contact, /parser).
		// Relative API URLs in hooks + this proxy = works from any device on the network.
		proxy: {
			"^/(ai|contact|parser)": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// Scalar is huge - isolate it
					// To further reduce initial bundle size, ensure @scalar/api-reference-react is lazy loaded in the app code (e.g., using React.lazy or dynamic import)
					scalar: ["@scalar/api-reference-react"],
					// React ecosystem
					"react-vendor": ["react", "react-dom"],
					// Router
					router: ["@tanstack/react-router", "@tanstack/react-query"],
					// UI utilities
					"ui-utils": ["clsx", "tailwind-merge", "class-variance-authority"],
				},
			},
		},
	},
});
