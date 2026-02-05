import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";
import type { SectionProps, SectionVariant } from "./Section.types";

/**
 * Section Component
 *
 * Semantic wrapper for page sections with consistent vertical spacing.
 * Creates visual rhythm and hierarchy throughout your layout.
 */

/**
 * Variant styles mapping
 * Each variant provides different spacing and alignment:
 * - default: Small spacing for standard sections
 * - hero: Large centered spacing for hero sections
 * - spaced: Medium spacing for well-separated content
 * - compact: Extra small spacing for dense layouts
 */
const variantClasses: Record<SectionVariant, string> = {
	// Default spacing - small, for standard sections
	default: SPACING.SECTION.sm,

	// Hero spacing - large and centered for landing sections
	hero: `text-center ${SPACING.SECTION.lg}`,

	// Spaced - medium spacing for comfortable reading
	spaced: SPACING.SECTION.md,

	// Compact - extra small for dense content
	compact: SPACING.SECTION.xs,
};

const Section = ({ className, variant = "default", ...props }: SectionProps) => {
	// Get the spacing for the selected variant
	const spacingClass = variantClasses[variant];

	// Combine spacing with custom classes
	const combinedClassName = cn(spacingClass, className);

	return <section className={combinedClassName} {...props} />;
};

export { Section, type SectionProps, type SectionVariant };

