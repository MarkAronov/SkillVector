/**
 * IONS: Design Tokens - Spacing
 *
 * Consistent spacing scale used throughout the design system.
 * Based on Tailwind's default spacing scale (0.25rem / 4px increments).
 *
 * Base Scale Philosophy:
 * - 0-4: Fine-grained spacing (2-16px) for tight layouts
 * - 4-12: Standard spacing (16-48px) for most UI elements
 * - 12-24: Large spacing (48-96px) for section separation
 * - 24+: Major spacing (96px+) for page-level structure
 *
 * Semantic Categories:
 * - GAP: Spacing between flex/grid items (horizontal and vertical)
 * - STACK: Vertical spacing between stacked elements
 * - SECTION: Page-level vertical spacing (responsive)
 *
 * Responsive Strategy:
 * - Base values apply to mobile (< 1024px)
 * - lg: prefix increases spacing on larger screens
 * - Example: py-8 lg:py-12 (32px mobile, 48px desktop)
 *
 * Usage Examples:
 * - Gap: <div className="flex gap-4"> (16px between items)
 * - Stack: <div className="space-y-2"> (8px between children)
 * - Section: <section className="py-12 lg:py-16"> (48-64px vertical padding)
 */

/**
 * Base numeric spacing scale
 * Raw rem/px values for Tailwind spacing utilities
 */
const baseSpacing = {
	0: "0",
	px: "1px",
	0.5: "0.125rem", // 2px
	1: "0.25rem", // 4px
	1.5: "0.375rem", // 6px
	2: "0.5rem", // 8px
	2.5: "0.625rem", // 10px
	3: "0.75rem", // 12px
	3.5: "0.875rem", // 14px
	4: "1rem", // 16px
	5: "1.25rem", // 20px
	6: "1.5rem", // 24px
	7: "1.75rem", // 28px
	8: "2rem", // 32px
	9: "2.25rem", // 36px
	10: "2.5rem", // 40px
	11: "2.75rem", // 44px
	12: "3rem", // 48px
	14: "3.5rem", // 56px
	16: "4rem", // 64px
	20: "5rem", // 80px
	24: "6rem", // 96px
	28: "7rem", // 112px
	32: "8rem", // 128px
	36: "9rem", // 144px
	40: "10rem", // 160px
	44: "11rem", // 176px
	48: "12rem", // 192px
	52: "13rem", // 208px
	56: "14rem", // 224px
	60: "15rem", // 240px
	64: "16rem", // 256px
	72: "18rem", // 288px
	80: "20rem", // 320px
	96: "24rem", // 384px
} as const;

// Semantic spacing aliases for common use cases
export const SPACING = {
	/**
	 * Gap spacing for flexbox/grid layouts
	 * Applies spacing between items in both directions
	 */
	GAP: {
		xs: "gap-1", // 4px - Tight spacing
		sm: "gap-2", // 8px - Compact spacing
		md: "gap-4", // 16px - Standard spacing
		lg: "gap-6", // 24px - Comfortable spacing
		xl: "gap-8", // 32px - Generous spacing
	},

	/**
	 * Stack spacing for vertical layouts
	 * Applies margin-top to all children except first
	 */
	STACK: {
		xs: "space-y-1", // 4px - Tight vertical spacing
		sm: "space-y-2", // 8px - Compact vertical spacing
		md: "space-y-4", // 16px - Standard vertical spacing
		lg: "space-y-6", // 24px - Comfortable vertical spacing
		xl: "space-y-8", // 32px - Generous vertical spacing
	},

	/**
	 * Section spacing for page layout
	 * Responsive vertical padding for major page sections
	 */
	SECTION: {
		xs: "py-6", // 24px - Minimal section spacing
		sm: "py-8 lg:py-12", // 32px → 48px - Small sections
		md: "py-12 lg:py-16", // 48px → 64px - Standard sections
		lg: "py-16 lg:py-24", // 64px → 96px - Large sections
		xl: "py-24 lg:py-32", // 96px → 128px - Hero sections
	},

	/**
	 * Padding scale - Consistent spacing for component interiors
	 * Use for padding inside cards, containers, buttons, etc.
	 */
	PADDING: {
		none: "p-0", // 0px - No padding
		xs: "p-1", // 4px - Minimal padding
		sm: "p-2", // 8px - Small padding
		md: "p-4", // 16px - Standard padding
		lg: "p-6", // 24px - Large padding
		xl: "p-8", // 32px - Extra large padding
		"2xl": "p-12", // 48px - Huge padding
		"3xl": "p-16", // 64px - Massive padding
	},

	/**
	 * Horizontal padding - For responsive layouts
	 */
	PADDING_X: {
		xs: "px-1", // 4px
		sm: "px-2", // 8px
		md: "px-4", // 16px
		lg: "px-6", // 24px
		xl: "px-8", // 32px
		"2xl": "px-12", // 48px
		responsive: {
			xs: "px-3 lg:px-4", // 12px → 16px
			sm: "px-4 sm:px-6 lg:px-8", // 16px → 24px → 32px
		},
	},

	/**
	 * Vertical padding - For responsive layouts
	 */
	PADDING_Y: {
		xs: "py-1", // 4px
		sm: "py-2", // 8px
		md: "py-4", // 16px
		lg: "py-6", // 24px
		xl: "py-8", // 32px
		"2xl": "py-12", // 48px
		"3xl": "py-16", // 64px
		responsive: {
			xs: "py-6 lg:py-8", // 24px → 32px
		},
	},

	/**
	 * Responsive gap spacing
	 */
	GAP_RESPONSIVE: {
		xs: "gap-1 lg:gap-1.5", // 4px → 6px
		sm: "gap-2 lg:gap-3", // 8px → 12px
		md: "gap-3 lg:gap-4", // 12px → 16px
		lg: "gap-4 lg:gap-6", // 16px → 24px
		xl: "gap-4 lg:gap-8", // 16px → 32px
	},
} as const;

/**
 * Export base spacing for custom usage
 */
export const spacing = baseSpacing;

/**
 * Type helper for spacing token names
 */
