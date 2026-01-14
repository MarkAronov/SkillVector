import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Card, CardContent } from "../3-molecules/Card";
import { CodeBlock } from "../3-molecules/CodeBlock";
import { Hero } from "../3-molecules/Hero";
import { PageTemplate } from "../5-templates/PageTemplate";

export const ResourcesPage = () => {
	const { effectiveTheme } = useTheme();
	const isDark = effectiveTheme === "dark";
	const apiRef = useRef<HTMLDivElement | null>(null);
	const sdkRef = useRef<HTMLDivElement | null>(null);
	const [activeTab, setActiveTab] = useState<"api" | "sdk">(
		typeof window !== "undefined" && window.location.hash === "#sdk"
			? "sdk"
			: "api",
	);

	// Clear Scalar's localStorage theme preference on mount to force app theme
	useEffect(() => {
		localStorage.removeItem("colorMode");
		// If there's a hash, scroll to the appropriate section on mount
		if (typeof window !== "undefined") {
			const hash = window.location.hash.replace("#", "");
			if (hash === "sdk") sdkRef.current?.scrollIntoView();
			if (hash === "api") apiRef.current?.scrollIntoView();
		}
	}, []);

	// Scroll-spy to update active tab
	useEffect(() => {
		const onScroll = () => {
			if (!apiRef.current || !sdkRef.current) return;
			const apiTop = apiRef.current.getBoundingClientRect().top;
			const sdkTop = sdkRef.current.getBoundingClientRect().top;
			const threshold = window.innerHeight * 0.4;
			if (sdkTop <= threshold) setActiveTab("sdk");
			else if (apiTop <= threshold) setActiveTab("api");
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const specUrl = "/openapi.json";

	const configuration = useMemo(
		() => ({
			spec: { url: specUrl },
			darkMode: isDark,
			hideModels: false,
			hideDownloadButton: false,
			hiddenClients: [] as string[],
			defaultHttpClient: {
				targetKey: "js" as const,
				clientKey: "fetch" as const,
			},
			theme: "purple" as const,
			hideThemeToggle: true,
		}),
		[isDark],
	);

	const install = `npm install @skillvector/sdk`;
	const quickUse = `import { SkillVectorClient } from '@skillvector/sdk';

(async () => {
  const client = new SkillVectorClient({ baseUrl: 'http://localhost:3000' });
  const results = await client.search('TypeScript developer', 10, 0);
  console.log(results);
})();`;

	return (
		<PageTemplate title="Resources">
			<Div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
				<Hero
					title="Resources"
					brand="Docs"
					subtitle="API reference, SDKs, and developer guides"
				/>
			</Div>

			{/* Sticky tab navigation (API / SDK) */}
			<div className="sticky top-16 z-50">
				<div className="max-w-5xl mx-auto px-4 mb-6">
					<nav
						aria-label="Resources navigation"
						className="bg-background/80 backdrop-blur-sm border border-border rounded-md inline-flex"
					>
						<button
							type="button"
							className={`px-4 py-2 text-sm font-medium rounded-l-md transition-colors ${activeTab === "api" ? "bg-primary/10 text-primary" : "text-foreground/80 hover:text-foreground/95"}`}
							aria-current={activeTab === "api" ? "true" : undefined}
							onClick={() => {
								window.history.replaceState(null, "", "#api");
								apiRef.current?.scrollIntoView({ behavior: "smooth" });
								setActiveTab("api");
							}}
						>
							API Reference
						</button>
						<button
							type="button"
							className={`px-4 py-2 text-sm font-medium rounded-r-md transition-colors ${activeTab === "sdk" ? "bg-primary/10 text-primary" : "text-foreground/80 hover:text-foreground/95"}`}
							aria-current={activeTab === "sdk" ? "true" : undefined}
							onClick={() => {
								window.history.replaceState(null, "", "#sdk");
								sdkRef.current?.scrollIntoView({ behavior: "smooth" });
								setActiveTab("sdk");
							}}
						>
							SDK
						</button>
					</nav>
				</div>
			</div>
			{/* API Section */}
			<Div id="api" ref={apiRef as any} className="max-w-5xl mx-auto px-4 mb-8">
				<Heading variant="section" className="mb-4">
					API Reference
				</Heading>
				<Div className="scalar-wrapper rounded-xl overflow-hidden border border-border">
					<ApiReferenceReact
						key={`scalar-${isDark}`}
						configuration={configuration}
					/>
				</Div>
			</Div>

			{/* SDK Section */}
			<Div
				id="sdk"
				ref={sdkRef as any}
				className="max-w-5xl mx-auto px-4 mb-16"
			>
				<Heading variant="section" className="mb-4">
					SDKs
				</Heading>
				<Div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-2">
								Install
							</Heading>
							<CodeBlock language="bash" code={install} />
						</CardContent>
					</Card>

					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-2">
								Quick Start
							</Heading>
							<CodeBlock language="ts" code={quickUse} />
						</CardContent>
					</Card>

					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-2">
								Features
							</Heading>
							<ul className="list-disc pl-4">
								<li>Search & pagination helpers</li>
								<li>Filters support with `searchWithFilters`</li>
								<li>Retries and exponential backoff</li>
								<li>TypeScript types for strict typing</li>
							</ul>
						</CardContent>
					</Card>
				</Div>
			</Div>
		</PageTemplate>
	);
};

export default ResourcesPage;
