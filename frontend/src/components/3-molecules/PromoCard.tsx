import { cn } from "@/lib/utils";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { Text } from "../2-atoms/Text";

/**
 * SocialMediaCard Component
 *
 * Promotional card for social media links and external resources.
 * Centered layout with icon, title, description, and action buttons.
 *
 * Visual Structure:
 * - Icon + Title: Horizontal flex with 8px gap (gap-2)
 * - Description: Lead text variant, muted color
 * - Actions: Flex wrap buttons with 12px gap (gap-3)
 *
 * Action Buttons:
 * - Primary: Default button variant with icon support
 * - Secondary: Secondary variant button (optional)
 * - Both: Open in new tab with security attributes (noopener noreferrer)
 * - Icons: Optional inline icons with 8px gap (gap-2)
 *
 * Layout:
 * - Text alignment: Centered (text-center)
 * - Vertical padding: 32px (py-8)
 * - Horizontal padding: 24px (px-6)
 * - Width: Controlled by parent container
 * - Buttons: Centered with flex-wrap for responsiveness
 *
 * Use Cases:
 * - GitHub repository links
 * - Social platform promotions
 * - External resource cards
 * - Call-to-action banners
 */

export interface SocialMediaCardProps {
	/** Icon to display in the header */
	icon: React.ReactNode;
	/** Title of the card */
	title: string;
	/** Description text */
	description: string;
	/** Primary action configuration */
	primaryAction: {
		label: string;
		href: string;
		icon?: React.ReactNode;
	};
	/** Secondary action configuration */
	secondaryAction?: {
		label: string;
		href: string;
		icon?: React.ReactNode;
	};
	/** Additional CSS classes */
	className?: string;
}

/**
 * SocialMediaCard Component
 *
 * A versatile card component for displaying social media links and actions.
 * Useful for GitHub repositories, social platforms, and external resources.
 */
export const SocialMediaCard = ({
	icon,
	title,
	description,
	primaryAction,
	secondaryAction,
	className = "",
}: SocialMediaCardProps) => {
	return (
		<Div
			className={cn(
				// Layout
				"text-center",
				// Spacing
				"py-8 px-6",
				// Custom
				className,
			)}
		>
			<Div className="flex items-center justify-center gap-2 mb-4">
				{icon}
				<Heading variant="section">{title}</Heading>
			</Div>
			<Text variant="lead" className="text-muted-foreground mb-6">
				{description}
			</Text>
			{/* Action buttons - external links */}
			<Div className="flex flex-wrap items-center justify-center gap-3">
				{/* Primary action button */}
				<Button asChild>
					<Link
						href={primaryAction.href}
						external
						className="inline-flex items-center gap-2"
					>
						{primaryAction.icon}
						{primaryAction.label}
					</Link>
				</Button>

				{/* Secondary action button (optional) */}
				{secondaryAction && (
					<Button asChild variant="secondary">
						<Link
							href={secondaryAction.href}
							external
							className="inline-flex items-center gap-2"
						>
							{secondaryAction.icon}
							{secondaryAction.label}
						</Link>
					</Button>
				)}
			</Div>
		</Div>
	);
};
