/**
 * IONS: Z-Index Tokens
 *
 * Layering scale for stacking contexts and element elevation.
 * Defines consistent z-index values to prevent stacking conflicts.
 *
 * Layering Hierarchy (bottom to top):
 * - base: 0 - Default layer (normal document flow)
 * - raised: 10 - Slightly elevated (sticky headers, floating buttons)
 * - dropdown: 20 - Dropdown menus (select options, autocomplete)
 * - sticky: 30 - Sticky elements (persistent navigation, filters)
 * - fixed: 40 - Fixed position elements (bottom bars, FABs)
 * - overlay: 50 - Page overlays (modal backgrounds, drawers)
 * - modal: 60 - Modal dialogs (confirmation dialogs, forms)
 * - popover: 70 - Floating UI (popovers, context menus)
 * - tooltip: 80 - Tooltips (help text, hints)
 * - notification: 90 - Toast notifications (alerts, status messages)
 *
 * Usage Guidelines:
 * - Use tokens instead of raw numbers to prevent conflicts
 * - Higher values should be reserved for temporary UI (modals, tooltips)
 * - Persistent UI (headers, sidebars) should use lower values
 * - Avoid stacking multiple high-z elements (e.g., modal in modal)
 *
 * Common Patterns:
 * - Sticky header: z-sticky (30)
 * - Modal backdrop: z-overlay (50) + modal content: z-modal (60)
 * - Tooltip on modal: tooltip (80) > modal (60) ✓
 */

export const Z_INDEX = {
	base: "z-0",           // 0 - Default layer (document flow)
	raised: "z-10",       // 10 - Slightly elevated (sticky elements)
	dropdown: "z-20",     // 20 - Dropdown menus (selects, autocomplete)
	sticky: "z-30",       // 30 - Sticky navigation (headers, filters)
	fixed: "z-40",        // 40 - Fixed elements (floating buttons, bottom bars)
	overlay: "z-50",      // 50 - Overlays (modal backgrounds, drawers)
	modal: "z-60",        // 60 - Modal dialogs (confirmations, forms)
	popover: "z-70",      // 70 - Popovers (context menus, floating UI)
	tooltip: "z-80",      // 80 - Tooltips (help text, hints)
	notification: "z-90", // 90 - Notifications (toasts, alerts) - highest layer
} as const;
