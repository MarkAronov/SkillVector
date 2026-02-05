/**
 * IONS: Border Tokens
 *
 * Border width, radius, and side primitives for visual boundaries and shapes.
 * Provides consistent edge treatment across UI elements.
 *
 * Width Scale:
 * - none: 0px - No border (borderless elements)
 * - thin: 1px - Subtle separation (default borders)
 * - medium: 2px - Emphasized boundaries (focused inputs)
 * - thick: 4px - Strong visual weight (callouts, highlights)
 *
 * Radius Scale:
 * - none: 0px - Sharp corners (formal, technical UI)
 * - sm: 2px - Subtle rounding (minimal style)
 * - md: 6px - Standard rounding (most UI elements)
 * - lg: 8px - Noticeable rounding (cards, buttons)
 * - xl: 12px - Prominent rounding (hero cards)
 * - 2xl: 16px - Heavy rounding (featured content)
 * - 3xl: 24px - Maximum rounding (special elements)
 * - full: 9999px - Perfect circles/pills (badges, avatars)
 *
 * Side Control:
 * - Directional borders for visual hierarchy and separation
 * - Axis controls (x/y) for efficient multi-side application
 */

export const BORDERS = {
	/**
	 * Border width tokens
	 * Controls thickness of border lines
	 */
	WIDTH: {
		none: "border-0",      // 0px - Remove border
		thin: "border",        // 1px - Standard border (default)
		medium: "border-2",    // 2px - Emphasized border (focus states)
		thick: "border-4",     // 4px - Strong border (highlights)
	},

	/**
	 * Border radius tokens
	 * Controls corner rounding from sharp to circular
	 */
	RADIUS: {
		none: "rounded-none",   // 0px - Sharp corners (technical)
		sm: "rounded-sm",       // 2px - Subtle rounding (minimal)
		md: "rounded-md",       // 6px - Standard rounding (cards, inputs)
		lg: "rounded-lg",       // 8px - Noticeable rounding (buttons)
		xl: "rounded-xl",       // 12px - Prominent rounding (hero cards)
		"2xl": "rounded-2xl",   // 16px - Heavy rounding (featured)
		"3xl": "rounded-3xl",   // 24px - Maximum rounding (special)
		full: "rounded-full",   // 9999px - Perfect circles (avatars, pills)
	},

	/**
	 * Border side tokens
	 * Applies borders to specific edges or axes
	 */
	SIDE: {
		top: "border-t",       // Top edge only
		right: "border-r",     // Right edge only
		bottom: "border-b",    // Bottom edge only (common divider)
		left: "border-l",      // Left edge only (sidebar accent)
		x: "border-x",         // Horizontal edges (top + bottom)
		y: "border-y",         // Vertical edges (left + right)
	},
} as const;
