/**
 * IONS: Layout Tokens
 *
 * Fundamental layout primitives including heights, widths, and container sizes.
 * Provides consistent spacing and sizing patterns for page structure.
 *
 * Component Heights:
 * - SCALAR_API: Responsive height for API scalar display (600px → 700px → 800px)
 *
 * Content Width Scale:
 * - CONTENT_WIDE: 1024px max - Wide content (full-width articles, galleries)
 * - CONTENT_NARROW: 896px max - Standard content (blog posts, forms)
 * - CONTENT_MEDIUM: 768px max - Focused content (narrow reading, modals)
 *
 * Page Structure:
 * - PAGE: Horizontal and vertical page padding (responsive)
 * - SECTION: Vertical spacing between major page sections
 */

export const LAYOUT = {
	/**
	 * Component-specific heights
	 * Responsive sizing for special UI elements
	 */
	SCALAR_API: "h-[600px] lg:h-[700px] xl:h-[800px]",  // API scalar display (responsive)

	/**
	 * Content max-width tokens
	 * Constrains content width for optimal readability
	 */
	CONTENT_WIDE: "max-w-5xl",     // 1024px - Wide content (galleries, dashboards)
	CONTENT_NARROW: "max-w-4xl",   // 896px - Standard content (blog posts, forms)
	CONTENT_MEDIUM: "max-w-3xl",   // 768px - Focused content (reading, modals)

	/**
	 * Page structure spacing
	 * Standard padding and margins for page layout
	 */
	PAGE: "px-4 py-8 lg:py-12",  // Page padding: 16px horizontal, 32px vertical (48px on lg+)
	SECTION: "mb-8",              // Section spacing: 32px bottom margin between sections
} as const;
