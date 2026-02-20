import type { ComponentProps } from "react";

export type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface PageContainerProps extends ComponentProps<"div"> {
	/** Controls the maximum width of the container. Default is 'lg' (max-w-5xl) */
	maxWidth?: MaxWidth;
}
