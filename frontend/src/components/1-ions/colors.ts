/**
 * IONS: Design Tokens - Colors
 * 
 * Core color primitives used throughout the design system.
 * These map to CSS variables defined in index.css
 */

export const colors = {
	// Primary brand colors
	primary: {
		DEFAULT: "hsl(var(--primary))",
		foreground: "hsl(var(--primary-foreground))",
	},
	
	// Secondary colors
	secondary: {
		DEFAULT: "hsl(var(--secondary))",
		foreground: "hsl(var(--secondary-foreground))",
	},
	
	// Destructive/error colors
	destructive: {
		DEFAULT: "hsl(var(--destructive))",
		foreground: "hsl(var(--destructive-foreground))",
	},
	
	// Success colors
	success: {
		DEFAULT: "hsl(var(--success))",
		foreground: "hsl(var(--success-foreground))",
	},
	
	// Muted/subtle colors
	muted: {
		DEFAULT: "hsl(var(--muted))",
		foreground: "hsl(var(--muted-foreground))",
	},
	
	// Accent colors
	accent: {
		DEFAULT: "hsl(var(--accent))",
		foreground: "hsl(var(--accent-foreground))",
	},
	
	// Background colors
	background: "hsl(var(--background))",
	foreground: "hsl(var(--foreground))",
	
	// Card colors
	card: {
		DEFAULT: "hsl(var(--card))",
		foreground: "hsl(var(--card-foreground))",
	},
	
	// Popover colors
	popover: {
		DEFAULT: "hsl(var(--popover))",
		foreground: "hsl(var(--popover-foreground))",
	},
	
	// Border & input colors
	border: "hsl(var(--border))",
	input: "hsl(var(--input))",
	ring: "hsl(var(--ring))",
} as const;

export type ColorToken = keyof typeof colors;
