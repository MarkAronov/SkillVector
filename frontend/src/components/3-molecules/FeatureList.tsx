import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { SIZING } from "../1-ions";
import { List, ListItem } from "../2-atoms/List";
import { Text } from "../2-atoms/Text";

interface FeatureListProps {
	features: string[];
	icon?: ReactNode;
	iconColor?: string;
	variant?: "spaced" | "default";
	className?: string;
}

export const FeatureList = ({
	features,
	icon,
	iconColor = "text-primary",
	variant = "spaced",
	className = "",
}: FeatureListProps) => {
	const IconComponent = icon || (
		<Check className={`${SIZING.ICON.md} ${iconColor} shrink-0 mt-0.5`} />
	);

	return (
		<List variant={variant} className={className}>
			{features.map((feature) => (
				<ListItem key={feature} variant="bullet">
					{IconComponent}
					<Text>{feature}</Text>
				</ListItem>
			))}
		</List>
	);
};
