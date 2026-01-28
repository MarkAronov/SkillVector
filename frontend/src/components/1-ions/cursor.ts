/**
 * IONS: Cursor Tokens
 *
 * Cursor state primitives for interaction feedback.
 */

export const CURSOR = {
	auto: "cursor-auto",
	default: "cursor-default",
	pointer: "cursor-pointer",
	wait: "cursor-wait",
	text: "cursor-text",
	move: "cursor-move",
	help: "cursor-help",
	notAllowed: "cursor-not-allowed",
	none: "cursor-none",
	grab: "cursor-grab",
	grabbing: "cursor-grabbing",
} as const;
