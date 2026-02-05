/**
 * IONS: Design Tokens - Colors
 *
 * Core color primitives used throughout the design system.
 * All colors map to CSS custom properties defined in index.css.
 * Uses HSL format for consistent theme support (light/dark modes).
 *
 * Color Pairing Pattern:
 * - DEFAULT: Background color for the element
 * - foreground: Text color that contrasts with DEFAULT background
 *
 * Semantic Color Usage:
 * - primary: Brand actions (CTAs, links, primary buttons)
 * - secondary: Supporting actions (secondary buttons, hover states)
 * - destructive: Errors, deletions, warnings (red spectrum)
 * - success: Confirmations, completions (green spectrum)
 * - muted: Subtle backgrounds, disabled states (low contrast)
 * - accent: Highlights, selections, feature emphasis
 *
 * Surface Colors:
 * - background/foreground: Base page colors
 * - card: Elevated content containers
 * - popover: Floating UI elements (tooltips, dropdowns)
 *
 * Input Colors:
 * - border: Default border color for all bordered elements
 * - input: Specific border color for form inputs
 * - ring: Focus ring color (outline on keyboard navigation)
 */

export const colors = {
	/**
	 * Primary brand colors
	 * Used for main CTAs, links, and primary actions
	 */
	primary: {
		DEFAULT: "hsl(var(--primary))",              // Primary button background
		foreground: "hsl(var(--primary-foreground))", // Text on primary background
	},

	/**
	 * Secondary colors
	 * Used for less prominent actions and alternative styling
	 */
	secondary: {
		DEFAULT: "hsl(var(--secondary))",              // Secondary button background
		foreground: "hsl(var(--secondary-foreground))", // Text on secondary background
	},

	/**
	 * Destructive/error colors
	 * Used for errors, warnings, delete actions (red spectrum)
	 */
	destructive: {
		DEFAULT: "hsl(var(--destructive))",              // Error background, delete buttons
		foreground: "hsl(var(--destructive-foreground))", // Text on destructive background
	},

	/**
	 * Success colors
	 * Used for success states, confirmations (green spectrum)
	 */
	success: {
		DEFAULT: "hsl(var(--success))",              // Success background, checkmarks
		foreground: "hsl(var(--success-foreground))", // Text on success background
	},

	/**
	 * Muted/subtle colors
	 * Used for disabled states, placeholders, subtle backgrounds
	 */
	muted: {
		DEFAULT: "hsl(var(--muted))",              // Muted background, disabled elements
		foreground: "hsl(var(--muted-foreground))", // Text on muted background, hints
	},

	/**
	 * Accent colors
	 * Used for highlights, selections, special emphasis
	 */
	accent: {
		DEFAULT: "hsl(var(--accent))",              // Accent background, badges
		foreground: "hsl(var(--accent-foreground))", // Text on accent background
	},

	/**
	 * Background colors
	 * Base page and content colors
	 */
	background: "hsl(var(--background))", // Main page background
	foreground: "hsl(var(--foreground))", // Main page text color

	/**
	 * Card colors
	 * Elevated containers and content boxes
	 */
	card: {
		DEFAULT: "hsl(var(--card))",              // Card background (elevated surface)
		foreground: "hsl(var(--card-foreground))", // Text on card background
	},

	/**
	 * Popover colors
	 * Floating UI elements (tooltips, dropdowns, menus)
	 */
	popover: {
		DEFAULT: "hsl(var(--popover))",              // Popover background
		foreground: "hsl(var(--popover-foreground))", // Text on popover background
	},

	/**
	 * Border & input colors
	 * Edge and focus state colors
	 */
	border: "hsl(var(--border))", // Default border color for all elements
	input: "hsl(var(--input))",   // Border color for form inputs
	ring: "hsl(var(--ring))",     // Focus ring color (keyboard navigation outline)
} as const;

/**
 * Type helper for color token names
 * Ensures type safety when referencing color keys
 */
export type ColorToken = keyof typeof colors;
