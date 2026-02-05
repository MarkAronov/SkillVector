import type { ComponentProps } from "react";

export type SectionVariant = "default" | "hero" | "spaced" | "compact";

export interface SectionProps extends ComponentProps<"section"> {
	variant?: SectionVariant;
}
