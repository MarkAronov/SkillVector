import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";

type SectionVariant = "default" | "hero" | "spaced" | "compact";

interface SectionProps extends ComponentProps<"section"> {
	variant?: SectionVariant;
}

const variantClasses: Record<SectionVariant, string> = {
	default: SPACING.SECTION.sm,
	hero: `text-center ${SPACING.SECTION.lg}`,
	spaced: SPACING.SECTION.md,
	compact: SPACING.SECTION.xs,
};

function Section({ className, variant = "default", ...props }: SectionProps) {
	return (
		<section className={cn(variantClasses[variant], className)} {...props} />
	);
}

export { Section, type SectionProps, type SectionVariant };
