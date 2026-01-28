/**
 * IONS: Border Tokens
 *
 * Border widths, styles, and radius primitives.
 */

export const BORDERS = {
	WIDTH: {
		none: "border-0",
		thin: "border",
		medium: "border-2",
		thick: "border-4",
	},
	RADIUS: {
		none: "rounded-none",
		sm: "rounded-sm",
		md: "rounded-md",
		lg: "rounded-lg",
		xl: "rounded-xl",
		"2xl": "rounded-2xl",
		"3xl": "rounded-3xl",
		full: "rounded-full",
	},
	SIDE: {
		top: "border-t",
		right: "border-r",
		bottom: "border-b",
		left: "border-l",
		x: "border-x",
		y: "border-y",
	},
} as const;
