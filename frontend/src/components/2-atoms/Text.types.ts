import type { ComponentProps, ElementType } from "react";

export type TextVariant =
	| "body"
	| "lead"
	| "muted"
	| "small"
	| "caption"
	| "heading"
	| "subheading";

export interface TextProps extends ComponentProps<"p"> {
	variant?: TextVariant;
	as?: ElementType;
}
