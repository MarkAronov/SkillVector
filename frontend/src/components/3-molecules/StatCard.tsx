import type React from "react";
import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";
import type { StatCardProps } from "./StatCard.types";

/**
 * StatCard Component
 *
 * Displays a single statistic with icon, label, and value.
 * Horizontal layout with icon box and text content.
 *
 * Visual Structure:
 * - Icon box: Rounded square container (12px padding, rounded-xl)
 * - Icon: 24x24px (h-6 w-6) with custom color
 * - Label: Small muted text (descriptive)
 * - Value: Card heading variant (prominent)
 *
 * Color Customization:
 * - bgColor: Icon box background (e.g., "bg-primary/10")
 * - iconColor: Icon color (e.g., "text-primary")
 * - valueColor: Value text color (e.g., "text-foreground")
 *
 * Layout:
 * - Horizontal flex with 16px gap (gap-4)
 * - Icon box: shrink-0 to prevent compression
 * - Text content: flex-1 with min-width-0 for truncation
 * - Spacing: 4px between label and value (mb-1)
 *
 * Use Cases:
 * - Dashboard statistics
 * - Metric displays
 * - Summary cards
 * - KPI indicators
 */

export const StatCard: React.FC<StatCardProps> = ({
	icon: Icon,
	iconColor,
	bgColor,
	label,
	value,
	valueColor,
}) => {
	return (
		<Div
			className={cn(
				// Layout
				"flex items-start",
				// Spacing
				SPACING.GAP.md,
			)}
		>
			{/* Icon box container */}
			<Div
				className={cn(
					// Spacing
					"p-3",
					// Effects
					"rounded-xl",
					// Layout
					"shrink-0",
					// Colors
					bgColor,
				)}
			>
				{/* Stat icon */}
				<Icon
					className={cn(
						// Sizing
						"h-6 w-6",
						// Colors
						iconColor,
					)}
				/>
			</Div>
			{/* Text content */}
			<Div className="flex-1 min-w-0">
				{/* Label text */}
				<Text variant="small" className="text-muted-foreground mb-1">
					{label}
				</Text>
				{/* Value heading */}
				<Heading
					as="h3"
					variant="card"
					className={cn(
						// Colors
						valueColor,
					)}
				>
					{value}
				</Heading>
			</Div>
		</Div>
	);
};
