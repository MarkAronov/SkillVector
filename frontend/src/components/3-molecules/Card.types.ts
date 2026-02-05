import type { ComponentProps, ReactNode } from "react";

export type CardVariant = "default" | "hover" | "feature";

export interface CardProps extends ComponentProps<"div"> {
	variant?: CardVariant;
	/** Pass `constrain` to center and limit max width via Glass */
	constrain?: boolean;
	/** Make the card stretch to fill available height (useful in grids) */
	fill?: boolean;
	/** Apply a min-height class to standardize heights (e.g., 'min-h-[160px]') */
	minHeightClass?: string;
	/** Optional width constraint override to pass to Glass */
	maxWidthClass?: string;
}

export interface CardHeaderProps extends ComponentProps<"div"> {
	icon?: ReactNode;
	iconColor?: string;
}
