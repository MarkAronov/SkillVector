/**
 * IONS: Grid Tokens
 *
 * Grid system primitives for layout structures.
 */

export const GRID = {
	COLUMNS: {
		1: "grid-cols-1",
		2: "grid-cols-2",
		3: "grid-cols-3",
		4: "grid-cols-4",
		5: "grid-cols-5",
		6: "grid-cols-6",
		8: "grid-cols-8",
		12: "grid-cols-12",
	},
	ROWS: {
		1: "grid-rows-1",
		2: "grid-rows-2",
		3: "grid-rows-3",
		4: "grid-rows-4",
		6: "grid-rows-6",
	},
	GAP: {
		none: "gap-0",
		xs: "gap-1",
		sm: "gap-2",
		md: "gap-4",
		lg: "gap-6",
		xl: "gap-8",
		"2xl": "gap-12",
	},
	FLOW: {
		row: "grid-flow-row",
		col: "grid-flow-col",
		rowDense: "grid-flow-row-dense",
		colDense: "grid-flow-col-dense",
	},
} as const;
