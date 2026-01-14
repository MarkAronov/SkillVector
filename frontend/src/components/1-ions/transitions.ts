/**
 * IONS: Design Tokens - Transitions
 *
 * Animation timing functions and durations for consistent motion.
 */

export const transitions = {
	duration: {
		75: "75ms",
		100: "100ms",
		150: "150ms",
		200: "200ms",
		300: "300ms",
		500: "500ms",
		700: "700ms",
		1000: "1000ms",
	},

	timing: {
		linear: "linear",
		in: "cubic-bezier(0.4, 0, 1, 1)",
		out: "cubic-bezier(0, 0, 0.2, 1)",
		inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	},

	// Common transition presets
	presets: {
		fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
		base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
		slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
		slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
	},
} as const;

export type TransitionDuration = keyof typeof transitions.duration;
export type TransitionTiming = keyof typeof transitions.timing;
