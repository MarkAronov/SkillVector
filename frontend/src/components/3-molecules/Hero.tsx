import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";

interface HeroProps extends ComponentProps<"div"> {
	title: string;
	subtitle: string;
	brand?: string;
}

function Hero({ className, title, subtitle, brand, ...props }: HeroProps) {
	return (
		<div className={cn("text-center mb-16", className)} {...props}>
			<Heading variant="hero">
				{title}{" "}
				{brand && (
					<span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
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
