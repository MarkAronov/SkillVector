import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/**
 * SectionHeader Props Interface
 * Defines the props for the SectionHeader component
 */
export interface SectionHeaderProps {
	/** Lucide icon component to display */
	icon: LucideIcon;

	/** Section title text */
	title: string;

	/** Optional additional content to display on the right side */
	action?: ReactNode;

	/** Optional className for custom styling */
	className?: string;
}
