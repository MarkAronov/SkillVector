import type { LucideIcon } from "lucide-react";

/**
 * Semantic color variants for StatCard
 * Maps to design system colors defined in ions
 *
 * - primary: Indigo — brand actions, versions, key metrics
 * - secondary: Violet — supporting data, categories
 * - accent: Pink — highlights, contributors, engagement
 * - destructive: Red — errors, issues, warnings
 * - success: Green — positive metrics, stable releases
 * - warning: Amber — caution, pre-releases, pending items
 * - muted: Gray — neutral info, metadata
 */
export type StatCardVariant =
	| "primary"
	| "secondary"
	| "accent"
	| "destructive"
	| "success"
	| "warning"
	| "muted";

export interface StatCardProps {
	/** Lucide icon to display */
	icon: LucideIcon;
	/** Semantic variant controlling icon/value colors */
	variant?: StatCardVariant;
	/** Descriptive label text */
	label: string;
	/** Stat value (number or string) */
	value: string | number;
}
