/**
 * IONS: Breakpoint Tokens
 *
 * Media query breakpoints for responsive design.
 */

export const BREAKPOINTS = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
} as const;

// Tailwind responsive prefixes (for reference)
export const RESPONSIVE_PREFIXES = {
	sm: "sm:",
	md: "md:",
	lg: "lg:",
	xl: "xl:",
	"2xl": "2xl:",
} as const;
