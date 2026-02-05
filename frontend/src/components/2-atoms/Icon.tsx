import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/**
 * Icon Component
 *
 * Standardized wrapper for Lucide React icons.
 * Provides consistent sizing and ensures accessibility.
 */

/**
 * Icon props interface
 */
export interface IconProps {
	/** The Lucide icon component to render */
	icon: LucideIcon;

	/** Size variant of the icon:
	 * - sm: 16px (h-4 w-4) - for inline text
	 * - md: 24px (h-6 w-6) - default, most common
	 * - lg: 32px (h-8 w-8) - for headers and emphasis
	 * - xl: 40px (h-10 w-10) - for large feature displays
	 */
	size?: "sm" | "md" | "lg" | "xl";

	/** Additional CSS classes */
	className?: string;

	/** Aria label for accessibility */
	"aria-label"?: string;
}

/**
 * Size mapping
 * Each size corresponds to a specific pixel value
 */
const sizeClasses = {
	// Small - inline with text (16px)
	sm: "h-4 w-4",

	// Medium - standard icon size (24px)
	md: "h-6 w-6",

	// Large - headers and emphasis (32px)
	lg: "h-8 w-8",

	// Extra large - feature displays (40px)
	xl: "h-10 w-10",
};

/**
 * Icon Component
 *
 * Renders a Lucide icon with consistent sizing and styling.
 * Automatically handles aria-label for accessibility.
 *
 * @example
 * ```tsx
 * <Icon icon={Search} size="md" aria-label="Search" />
 * ```
 */
export const Icon = ({
	icon: IconComponent,
	size = "md",
	className,
	"aria-label": ariaLabel,
}: IconProps) => {
	// Get the size class for the selected size
	const sizeClass = sizeClasses[size];

	// Combine size with custom classes
	const combinedClassName = cn(sizeClass, className);

	return <IconComponent className={combinedClassName} aria-label={ariaLabel} />;
};
