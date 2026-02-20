import type { ComponentProps } from "react";

export type GridVariant = "features" | "cards" | "responsive";

export interface GridProps extends ComponentProps<"ul"> {
	variant?: GridVariant;
	as?: "ul" | "div";
}
