import { SPACING } from "../1-ions";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";
import { ActionButton } from "./ActionButton";
import { Card, CardContent } from "./Card";
import type { CTACardProps } from "./CTACard.types";

/**
 * CTACard Component (Call-to-Action Card)
 *
 * Centered card component designed to encourage user action.
 * Combines heading, description, and up to two action buttons.
 *
 * Structure:
 * - Title: Section heading (prominent)
 * - Description: Lead text (descriptive, explanatory)
 * - Actions: Primary and/or secondary buttons (flexible layout)
 *
 * Action Buttons:
 * - primaryAction: Main CTA (default: primary variant)
 * - secondaryAction: Alternative action (default: outline variant)
 * - Both support onClick, href, to (router), external links
 *
 * Layout:
 * - Centered content (text-center)
 * - Hover variant card for interactivity
 * - Flexbox action buttons with gap spacing
 * - Wraps buttons on narrow screens
 *
 * Use Cases:
 * - Newsletter signups
 * - Feature promotions
 * - Download/trial offers
 * - Getting started prompts
 */

export const CTACard = ({
	title,
	description,
	primaryAction,
	secondaryAction,
	className = "",
	"aria-label": ariaLabel,
}: CTACardProps) => {
	return (
		<Card variant="hover" aria-label={ariaLabel || title} className={className}>
			<CardContent centered>
				<Heading variant="section" className="mb-4">
					{title}
				</Heading>
				<Text variant="lead" className="mb-6">
					{description}
				</Text>
				{(primaryAction || secondaryAction) && (
					<div className={`flex ${SPACING.GAP.md} justify-center flex-wrap`}>
						{primaryAction && (
							<ActionButton
								onClick={primaryAction.onClick}
								href={primaryAction.href}
								to={primaryAction.to}
								variant={primaryAction.variant || "primary"}
								external={primaryAction.external}
								aria-label={primaryAction.ariaLabel}
							>
								{primaryAction.label}
							</ActionButton>
						)}
						{secondaryAction && (
							<ActionButton
								onClick={secondaryAction.onClick}
								href={secondaryAction.href}
								to={secondaryAction.to}
								variant={secondaryAction.variant || "outline"}
								external={secondaryAction.external}
								aria-label={secondaryAction.ariaLabel}
							>
								{secondaryAction.label}
							</ActionButton>
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
};
