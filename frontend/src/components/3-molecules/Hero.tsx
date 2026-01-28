import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";

interface HeroProps extends ComponentProps<"div"> {
	title: string;
	subtitle: string;
	brand?: string;
	/** Custom gradient class (defaults to brand gradient) */
	gradientClass?: string;
	/** Override default layout */
	centered?: boolean;
}

function Hero({
	className,
	title,
	subtitle,
	brand,
	gradientClass = "bg-linear-to-r from-primary to-secondary",
	centered = true,
	...props
}: HeroProps) {
	return (
		<div
			className={cn(centered && "text-center", SPACING.SECTION.lg, className)}
			{...props}
		>
			<Heading variant="hero">
				{title}{" "}
				{brand && (
					<span className={cn(gradientClass, "bg-clip-text text-transparent")}>
						{brand}
					</span>
				)}
			</Heading>
			<Text variant="lead" className="max-w-2xl mx-auto">
				{subtitle}
			</Text>
		</div>
	);
}

export { Hero, type HeroProps };
