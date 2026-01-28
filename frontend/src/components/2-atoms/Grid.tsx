import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { GRID, SPACING } from "../1-ions";

type GridVariant = "features" | "cards" | "responsive";

interface GridProps extends ComponentProps<"ul"> {
	variant?: GridVariant;
	as?: "ul" | "div";
}

const variantClasses: Record<GridVariant, string> = {
	features: `grid sm:${GRID.COLUMNS[2]} ${GRID.GAP.md} lg:${GRID.GAP.lg} ${SPACING.SECTION.sm} lg:${SPACING.SECTION.md}`,
	cards: `grid ${GRID.COLUMNS[1]} md:${GRID.COLUMNS[2]} ${GRID.GAP.lg} mb-16`,
	responsive: `grid ${GRID.COLUMNS[1]} md:${GRID.COLUMNS[2]} ${GRID.GAP.xl} lg:${GRID.GAP["2xl"]}`,
};

function Grid({ className, variant = "features", ...props }: GridProps) {
	return <ul className={cn(variantClasses[variant], className)} {...props} />;
}

export { Grid, type GridProps, type GridVariant };
