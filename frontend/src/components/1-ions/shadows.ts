/**
 * IONS: Design Tokens - Shadows
 *
 * Shadow definitions for depth and elevation in the design system.
 * Creates visual hierarchy through layered shadow effects.
 *
 * Standard Shadow Scale (Elevation Levels):
 * - xs: 1-2px - Minimal depth (subtle borders, text fields)
 * - sm: 1-3px - Light elevation (hovering cards, buttons)
 * - md/DEFAULT: 4-6px - Standard elevation (cards, dropdowns)
 * - lg: 10-15px - High elevation (modals, popovers)
 * - xl: 20-25px - Maximum elevation (dialogs, drawers)
 * - 2xl: 25-50px - Extreme elevation (major overlays)
 * - inner: Inset shadow - Recessed appearance (pressed buttons)
 * - none: No shadow - Flat design
 *
 * Glass Shadows (Glassmorphism Effects):
 * - light: Subtle glass effect (light backgrounds)
 * - DEFAULT: Standard glass effect (balanced transparency)
 * - dark: Heavy glass effect (dark backgrounds, high contrast)
 * - card: Complex multi-layer glass (premium cards, hero elements)
 *   Includes outer shadows + inner highlights for realistic glass
 *
 * Usage Pattern:
 * - Combine with blur for glassmorphism
 * - Use sparingly - too many shadows create visual clutter
 * - Higher elevations should be reserved for interactive/important elements
 */

const baseShadows = {
	xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
	sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
	DEFAULT: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
	xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
	"2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
	inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
	none: "none",

	// Custom glass shadows
	glass: {
		light: "0 2px 4px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.08)",
		DEFAULT: `
			0 2px 4px rgba(0, 0, 0, 0.05),
			0 8px 16px rgba(0, 0, 0, 0.08),
			0 20px 40px rgba(0, 0, 0, 0.12)
		`,
		dark: `
			0 2px 4px rgba(0, 0, 0, 0.3),
			0 8px 16px rgba(0, 0, 0, 0.4),
			0 20px 40px rgba(0, 0, 0, 0.5)
		`,
		card: `
			0 2px 4px rgba(0, 0, 0, 0.05),
			0 8px 16px rgba(0, 0, 0, 0.08),
			0 20px 40px rgba(0, 0, 0, 0.12),
			inset 0 1px 0 rgba(255, 255, 255, 0.3),
			inset 0 -1px 0 rgba(0, 0, 0, 0.15),
			inset 2px 0 0 rgba(255, 255, 255, 0.1),
			inset -2px 0 0 rgba(0, 0, 0, 0.1)
		`,
	},
} as const;

// Uppercase alias for consistency with other ions
export const SHADOWS = {
	xs: "shadow-xs",
	sm: "shadow-sm",
	DEFAULT: "shadow",
	md: "shadow-md",
	lg: "shadow-lg",
	xl: "shadow-xl",
	"2xl": "shadow-2xl",
	inner: "shadow-inner",
	none: "shadow-none",
} as const;

export const shadows = baseShadows;
export type ShadowToken = keyof typeof shadows;
