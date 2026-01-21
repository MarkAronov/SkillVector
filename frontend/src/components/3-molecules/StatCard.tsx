import type { LucideIcon } from "lucide-react";
import type React from "react";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";

interface StatCardProps {
	icon: LucideIcon;
	iconColor: string;
	bgColor: string;
	label: string;
	value: string | number;
	valueColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
	icon: Icon,
	iconColor,
	bgColor,
	label,
	value,
	valueColor,
}) => {
	return (
		<Div className="flex items-start gap-4">
			<Div className={`p-3 rounded-xl ${bgColor} shrink-0`}>
				<Icon className={`h-6 w-6 ${iconColor}`} />
			</Div>
			<Div className="flex-1 min-w-0">
				<Text variant="small" className="text-muted-foreground mb-1">
					{label}
				</Text>
				<Heading as="h3" variant="card" className={`${valueColor} mb-1`}>
					{value}
				</Heading>
			</Div>
		</Div>
	);
};
