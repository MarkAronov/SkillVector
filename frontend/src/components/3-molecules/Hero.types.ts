import type { ComponentProps } from "react";

export interface HeroProps extends ComponentProps<"div"> {
	title: string;
	subtitle: string;
	brand?: string;
	/** Custom gradient class (defaults to brand gradient) */
	gradientClass?: string;
	/** Override default layout */
	centered?: boolean;
}
