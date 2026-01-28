/**
 * IONS: Design Tokens - Spacing
 *
 * Consistent spacing scale used throughout the design system.
 * Based on Tailwind's default spacing scale (0.25rem increments)
 */

// Base numeric spacing scale
const baseSpacing = {
	0: "0",
	px: "1px",
	0.5: "0.125rem", // 2px
	1: "0.25rem", // 4px
	1.5: "0.375rem", // 6px
	2: "0.5rem", // 8px
	2.5: "0.625rem", // 10px
	3: "0.75rem", // 12px
	3.5: "0.875rem", // 14px
	4: "1rem", // 16px
	5: "1.25rem", // 20px
	6: "1.5rem", // 24px
	7: "1.75rem", // 28px
	8: "2rem", // 32px
	9: "2.25rem", // 36px
	10: "2.5rem", // 40px
	11: "2.75rem", // 44px
	12: "3rem", // 48px
	14: "3.5rem", // 56px
	16: "4rem", // 64px
	20: "5rem", // 80px
	24: "6rem", // 96px
	28: "7rem", // 112px
	32: "8rem", // 128px
	36: "9rem", // 144px
	40: "10rem", // 160px
	44: "11rem", // 176px
	48: "12rem", // 192px
	52: "13rem", // 208px
	56: "14rem", // 224px
	60: "15rem", // 240px
	64: "16rem", // 256px
	72: "18rem", // 288px
	80: "20rem", // 320px
	96: "24rem", // 384px
} as const;

// Semantic spacing aliases for common use cases
export const SPACING = {
	// Gap spacing for flexbox/grid
	GAP: {
		xs: "gap-1", // 4px
		sm: "gap-2", // 8px
		md: "gap-4", // 16px
		lg: "gap-6", // 24px
		xl: "gap-8", // 32px
	},
	// Stack spacing for vertical layouts
	STACK: {
		xs: "space-y-1", // 4px
		sm: "space-y-2", // 8px
		md: "space-y-4", // 16px
		lg: "space-y-6", // 24px
		xl: "space-y-8", // 32px
	},
	// Section spacing for page layout
	SECTION: {
		xs: "py-6", // 24px
		sm: "py-8 lg:py-12", // 32-48px
		md: "py-12 lg:py-16", // 48-64px
		lg: "py-16 lg:py-24", // 64-96px
		xl: "py-24 lg:py-32", // 96-128px
	},
} as const;

export const spacing = baseSpacing;
export type SpacingToken = keyof typeof spacing;
