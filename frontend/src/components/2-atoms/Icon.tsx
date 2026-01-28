import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps {
	/** The Lucide icon component to render */
	icon: LucideIcon;
	/** Size variant of the icon
	 * - sm: 16px (h-4 w-4)
	 * - md: 24px (h-6 w-6) - default
	 * - lg: 32px (h-8 w-8)
	 * - xl: 40px (h-10 w-10)
	 */
	size?: "sm" | "md" | "lg" | "xl";
	/** Additional CSS classes */
	className?: string;
	/** Aria label for accessibility */
	"aria-label"?: string;
}

const sizeClasses = {
	sm: "h-4 w-4",
	md: "h-6 w-6",
	lg: "h-8 w-8",
	xl: "h-10 w-10",
};

/**
 * Icon Atom Component
 *
 * Standard wrapper for Lucide React icons used throughout the application.
 *
 * ## Design Standards
 * - Feature card icons should use `text-primary` for consistent brand color
 * - Button and inline icons inherit text color by default
 * - Default size is 'md' (24px / h-6 w-6)
 * - Icons are inline-block and align with text by default
 *
 * ## Usage Guidelines
 * - **Feature Cards**: Use 'md' size with `className="text-primary"`
 * - **Step Cards**: Icons can use custom colors via `color` prop in CardGrid
 * - **Button Icons**: Use 'sm' size (16px), inherit text color
 * - **Hero Icons**: Use 'lg' or 'xl' size for large decorative icons
 * - **List Icons**: Use 'sm' size for icons in lists
 *
 * ## Color Standards
 * - **Feature Cards**: Use `className="text-primary"` (standard)
 * - **Buttons/Inline**: Inherit current text color (no class needed)
 * - **Muted/Secondary**: Use `className="text-muted-foreground"`
 * - **Status**: Use semantic colors (text-success, text-destructive)
 *
 * @example
 * // Feature card icon (standard pattern)
 * <Icon icon={Zap} className="text-primary" />
 *
 * @example
 * // Button or inline icon (inherits text color)
 * <Icon icon={Search} size="sm" />
 *
 * @example
 * // With size variant
 * <Icon icon={Upload} size="lg" />
 *
 * @example
 * // In a feature card title
 * <div className="flex items-center gap-2">
 *   <Icon icon={Zap} className="text-primary" />
 *   <h4>Lightning Fast</h4>
 * </div>
 */
export const Icon = ({
	icon: IconComponent,
	size = "md",
	className,
	"aria-label": ariaLabel,
}: IconProps) => {
	return (
		<IconComponent
			className={cn(sizeClasses[size], className)}
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
		/>
	);
};
