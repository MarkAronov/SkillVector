import { cn } from "@/lib/utils";
import type { MaxWidth, PageContainerProps } from "./PageContainer.types";

/**
 * PageContainer Component
 *
 * Centered content container with configurable max-width.
 * Provides consistent horizontal margins and prevents overly wide text.
 */

/**
 * Max width options
 * Each size constrains content to a comfortable reading width:
 * - sm: Narrow (768px max) - focused content like forms
 * - md: Medium (896px max) - articles and documentation
 * - lg: Large (1024px max) - standard page content
 * - xl: Extra large (1152px max) - wider layouts
 * - 2xl: Huge (1280px max) - dashboard-style pages
 * - full: No constraint - edge-to-edge content
 */
const maxWidthClasses: Record<MaxWidth, string> = {
	// Small - narrow, focused (768px)
	sm: "max-w-3xl",

	// Medium - articles (896px)
	md: "max-w-4xl",

	// Large - standard pages (1024px)
	lg: "max-w-5xl",

	// Extra large - wider layouts (1152px)
	xl: "max-w-6xl",

	// 2XL - dashboard pages (1280px)
	"2xl": "max-w-7xl",

	// Full - no constraint
	full: "w-full",
};

const PageContainer = ({
	className,
	maxWidth = "lg",
	...props
}: PageContainerProps) => {
	// Get the max-width constraint for the selected size
	const widthClass = maxWidthClasses[maxWidth];

	// Combine width constraint with centering and custom classes
	const combinedClassName = cn(widthClass, "mx-auto", className);

	return <div className={combinedClassName} {...props} />;
};

export { PageContainer, type PageContainerProps };
