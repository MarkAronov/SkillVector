import type { ComponentProps } from "react";

/** Size scale shared with CardGrid's gap prop */
export type SectionGap = "sm" | "md" | "lg" | "xl";

export type SectionVariant = "default" | "hero" | "spaced" | "compact";

export interface SectionProps extends ComponentProps<"section"> {
	/**
	 * Named variant for vertical padding.
	 * Used when Section wraps non-CardGrid content.
	 * Ignored when `gap` is provided.
	 */
	variant?: SectionVariant;

	/**
	 * Sync vertical padding with a CardGrid's gap size (2:1 ratio).
	 * Pass the same value you give to <CardGrid gap="...">.
	 * When provided, overrides `variant`.
	 *
	 * Ratio mapping (Section padding ≈ 2× CardGrid gap):
	 *   sm → py-8          (32px)   — CardGrid gap-4 (16px)
	 *   md → py-12         (48px)   — CardGrid gap-6 (24px)
	 *   lg → py-16         (64px)   — CardGrid gap-8 (32px)
	 *   xl → py-24         (96px)   — CardGrid gap-12 (48px)
	 */
	gap?: SectionGap;
}
