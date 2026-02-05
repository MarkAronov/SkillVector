import { SPACING } from "../1-ions";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";
import { Card, CardContent, CardHeader } from "./Card";
import type { IconCardProps } from "./IconCard.types";

/**
 * IconCard Component
 *
 * Card with prominent icon display, ideal for feature highlights and service offerings.
 * Provides two layout variants: header-based and content-based.
 *
 * Standard IconCard (CardHeader layout):
 * - Icon: Displayed in centered card header with primary color
 * - Title: Card variant heading (h3)
 * - Badge: Optional status/category badge
 * - Description: Muted text below title
 * - Actions: Optional action buttons (margin-top: 16px)
 * - Children: Additional content below description
 *
 * IconCardWithContent (CardContent layout):
 * - Icon: Left-aligned with content in horizontal flex
 * - Title: Subsection heading next to icon
 * - Badge: Inline with title
 * - Description: Small text variant
 * - Flexible content and actions below
 *
 * Both variants:
 * - hover variant card (interactive shadow)
 * - h-full for consistent grid heights
 * - Accessible aria-label support
 *
 * Use Cases:
 * - Feature grids
 * - Service offerings
 * - Benefit highlights
 * - Tool showcases
 */

export const IconCard = ({
	icon,
	title,
	description,
	className = "",
	badge,
	actions,
	children,
	"aria-label": ariaLabel,
}: IconCardProps) => {
	return (
		<Card
			variant="hover"
			aria-label={ariaLabel || title}
			className={`h-full ${className}`}
		>
			<CardHeader icon={icon}>
				<Heading as="h3" variant="card" className="mb-2">
					{title}
				</Heading>
				{badge && <div className="mb-2">{badge}</div>}
				<Text variant="muted">{description}</Text>
				{children}
				{actions && <div className="mt-4">{actions}</div>}
			</CardHeader>
		</Card>
	);
};

export const IconCardWithContent = ({
	icon,
	title,
	description,
	className = "",
	badge,
	actions,
	children,
	"aria-label": ariaLabel,
}: IconCardProps) => {
	return (
		<Card
			variant="hover"
			aria-label={ariaLabel || title}
			className={`h-full ${className}`}
		>
			<CardContent>
				<div className={`flex items-start ${SPACING.GAP.md} mb-4`}>
					<div className="shrink-0 text-primary">{icon}</div>
					<div className="flex-1 min-w-0">
						<div
							className={`flex items-center ${SPACING.GAP.sm} mb-2 flex-wrap`}
						>
							<Heading variant="subsection">{title}</Heading>
							{badge}
						</div>
						<Text variant="small">{description}</Text>
					</div>
				</div>
				{children}
				{actions}
			</CardContent>
		</Card>
	);
};
