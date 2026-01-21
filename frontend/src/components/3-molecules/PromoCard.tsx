import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";

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
		<Div className={`text-center py-8 px-6 ${className}`}>
			<Div className="flex items-center justify-center gap-2 mb-4">
				{icon}
				<Heading variant="section">{title}</Heading>
			</Div>
			<Text
				variant="lead"
				className="text-muted-foreground mb-6 max-w-2xl mx-auto"
			>
				{description}
			</Text>
			<Div className="flex flex-wrap items-center justify-center gap-3">
				<Button asChild>
					<a
						href={primaryAction.href}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2"
					>
						{primaryAction.icon}
						{primaryAction.label}
					</a>
				</Button>
				{secondaryAction && (
					<Button asChild variant="secondary">
						<a
							href={secondaryAction.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2"
						>
							{secondaryAction.icon}
							{secondaryAction.label}
						</a>
					</Button>
				)}
			</Div>
		</Div>
	);
};
