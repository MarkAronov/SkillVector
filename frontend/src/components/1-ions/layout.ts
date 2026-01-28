/**
 * IONS: Layout Tokens
 *
 * Fundamental layout primitives - heights, widths, and container sizes.
 */

export const LAYOUT = {
	// Component heights
	SCALAR_API: "h-[600px] lg:h-[700px] xl:h-[800px]",

	// Max widths
	CONTENT_WIDE: "max-w-5xl",
	CONTENT_NARROW: "max-w-4xl",
	CONTENT_MEDIUM: "max-w-3xl",

	// Page padding
	PAGE: "px-4 py-8 lg:py-12",
	SECTION: "mb-8",
} as const;
