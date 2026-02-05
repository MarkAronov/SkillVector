/**
 * IONS: Opacity Tokens
 *
 * Alpha/opacity value scale for transparency effects.
 * Controls visibility and visual weight of elements.
 *
 * Opacity Scale:
 * - transparent: 0% - Completely invisible (hidden but still in DOM)
 * - disabled: 40% - Disabled state (clear visual indication of non-interactive)
 * - muted: 50% - Subtle presence (background elements, watermarks)
 * - dimmed: 60% - Reduced emphasis (secondary content, hints)
 * - subtle: 75% - Mild transparency (overlays, secondary text)
 * - medium: 80% - Noticeable transparency (glass effects, tooltips)
 * - strong: 90% - Nearly opaque (hover states, active elements)
 * - opaque: 100% - Fully visible (default, primary content)
 *
 * Common Use Cases:
 * - disabled: Buttons, inputs, actions that cannot be taken
 * - muted: Placeholders, watermarks, background decorations
 * - subtle/medium: Overlays, tooltips, modals
 * - strong: Hover states, active elements showing through
 */

export const OPACITY = {
	transparent: "opacity-0", // 0% - Invisible (still in DOM)
	disabled: "opacity-40", // 40% - Disabled state (non-interactive)
	muted: "opacity-50", // 50% - Subtle (backgrounds, watermarks)
	dimmed: "opacity-60", // 60% - Reduced emphasis (hints)
	subtle: "opacity-75", // 75% - Mild transparency (overlays)
	medium: "opacity-80", // 80% - Noticeable (glass effects)
	strong: "opacity-90", // 90% - Nearly opaque (hover states)
	opaque: "opacity-100", // 100% - Fully visible (default)
} as const;
