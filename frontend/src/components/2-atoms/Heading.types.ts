import type { ComponentProps } from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingVariant = "hero" | "section" | "subsection" | "card";

export interface HeadingProps extends ComponentProps<HeadingLevel> {
	as?: HeadingLevel;
	variant?: HeadingVariant;
}
