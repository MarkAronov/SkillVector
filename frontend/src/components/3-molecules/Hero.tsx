import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import type { HeroProps } from "./Hero.types";

/**
 * Hero Component
 *
 * Large hero section for page headers with prominent title and subtitle.
 * Supports optional brand text with gradient styling.
 *
 * Visual Elements:
 * - Title: Hero variant heading (largest text size)
 * - Brand: Optional highlighted text with gradient (clips to text)
 * - Subtitle: Lead text variant (descriptive)
 *
 * Layout:
 * - Default: Centered text alignment (text-center)
 * - Spacing: Large section padding (64-96px vertical)
 * - Width: Controlled by parent container (PageTemplate)
 *
 * Gradient System:
 * - gradientClass: Custom gradient for brand text
 * - Default: "bg-linear-to-r from-primary to-secondary"
 * - Uses bg-clip-text for gradient text effect
 *
 * Use Cases:
 * - Landing page headers
 * - Feature section intros
 * - Page title banners
 * - Product launch announcements
 */

const Hero = ({
	className,
	title,
	subtitle,
	brand,
	gradientClass = "bg-linear-to-r from-primary to-secondary",
	centered = true,
	...props
}: HeroProps) => {
	// Build centered class
	const centeredClass = centered ? "text-center" : "";

	// Build gradient brand class
	const brandClass = cn(gradientClass, "bg-clip-text text-transparent");

	// Combine section classes
	const combinedClassName = cn(centeredClass, SPACING.SECTION.lg, className);

	return (
		<Div className={combinedClassName} {...props}>
			{/* Hero title with optional brand text */}
			<Heading variant="hero">
				{title} {brand && <Span className={brandClass}>{brand}</Span>}
			</Heading>
			{/* Hero subtitle */}
			<Text variant="lead">{subtitle}</Text>
		</Div>
	);
};

export { Hero, type HeroProps };
