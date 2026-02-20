import type { ReactNode } from "react";

export interface FeatureListProps {
	features: string[];
	icon?: ReactNode;
	iconColor?: string;
	variant?: "spaced" | "default";
	className?: string;
}
