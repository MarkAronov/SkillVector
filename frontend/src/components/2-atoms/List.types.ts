import type { ComponentProps } from "react";

export type ListVariant = "default" | "disc" | "inline" | "spaced";

export interface ListProps extends ComponentProps<"ul"> {
	variant?: ListVariant;
}

export interface ListItemProps extends ComponentProps<"li"> {
	variant?: "default" | "bullet" | "inline";
}
