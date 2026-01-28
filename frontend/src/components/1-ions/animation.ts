/**
 * IONS: Animation Tokens
 *
 * Animation-specific primitives (durations, timing functions, keyframes).
 */

export const ANIMATION = {
	DURATION: {
		instant: "duration-0",
		fast: "duration-100",
		normal: "duration-200",
		moderate: "duration-300",
		slow: "duration-500",
		slower: "duration-700",
		slowest: "duration-1000",
	},
	TIMING: {
		linear: "ease-linear",
		in: "ease-in",
		out: "ease-out",
		inOut: "ease-in-out",
	},
	KEYFRAME: {
		spin: "animate-spin",
		ping: "animate-ping",
		pulse: "animate-pulse",
		bounce: "animate-bounce",
	},
} as const;
