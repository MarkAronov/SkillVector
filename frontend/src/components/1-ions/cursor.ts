/**
 * IONS: Cursor Tokens
 *
 * Cursor state primitives for interaction feedback.
 * Provides visual cues about element interactivity and current system state.
 *
 * Cursor Types:
 * - auto: Browser default (context-dependent)
 * - default: Standard arrow pointer
 * - pointer: Hand icon (clickable elements like buttons/links)
 * - wait: Loading spinner (processing operations)
 * - text: I-beam (text selection/editing)
 * - move: Four-directional arrows (draggable elements)
 * - help: Question mark icon (help/tooltip triggers)
 * - notAllowed: Forbidden icon (disabled/restricted actions)
 * - none: Hidden cursor (custom cursors, immersive experiences)
 * - grab: Open hand (draggable before mousedown)
 * - grabbing: Closed hand (actively dragging)
 */

export const CURSOR = {
	auto: "cursor-auto",                  // Browser default (context-dependent)
	default: "cursor-default",            // Standard arrow pointer
	pointer: "cursor-pointer",            // Hand icon (buttons, links)
	wait: "cursor-wait",                  // Loading spinner (async operations)
	text: "cursor-text",                  // I-beam (text fields, editable content)
	move: "cursor-move",                  // Four arrows (drag to reposition)
	help: "cursor-help",                  // Question mark (help available)
	notAllowed: "cursor-not-allowed",     // Forbidden (disabled, restricted)
	none: "cursor-none",                  // Hidden (custom cursor implementations)
	grab: "cursor-grab",                  // Open hand (ready to drag)
	grabbing: "cursor-grabbing",          // Closed hand (actively dragging)
} as const;
