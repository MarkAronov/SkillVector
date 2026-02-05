import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BORDERS, OPACITY, SPACING, TYPOGRAPHY } from "../1-ions";
import type { ActionButtonProps } from "./ActionButton.types";

/**
 * ActionButton Component
 *
 * Versatile button/link component supporting multiple rendering modes:
 * - Button: Standard click handler with type attribute
 * - Internal link: TanStack Router navigation (to prop)
 * - External link: Opens in new tab with security attributes (href + external)
 * - Regular link: Same-page navigation (href only)
 *
 * Variants:
 * - primary: Solid background with primary brand color, white text
 * - outline: Transparent with border, hover fills with subtle white
 *
 * Responsive Sizing:
 * - Mobile: text-sm (14px), px-5 (20px), py-2.5 (10px)
 * - Desktop (lg+): text-base (16px), px-6 (24px), py-3 (12px)
 */

/**
 * Base button styles
 * Shared across all variants and rendering modes (14px → 16px, medium weight)
 */
const baseStyles = `inline-flex items-center ${SPACING.GAP.sm} px-5 lg:px-6 py-2.5 lg:py-3 ${BORDERS.RADIUS.lg} transition-colors ${TYPOGRAPHY.COMBINATIONS.link} justify-center`;

/**
 * Variant style mapping
 * Defines visual treatment for each button variant
 */
const variantStyles = {
	// Primary: Solid brand button (CTAs, primary actions)
	primary: `bg-primary text-white hover:bg-primary/90 disabled:${OPACITY.muted}`,

	// Outline: Bordered transparent button (secondary actions, ghost style)
	outline: "border border-border hover:bg-white/10",
};

export const ActionButton = ({
	variant = "primary",
	children,
	href,
	to,
	onClick,
	className = "",
	external = false,
	type = "button",
	disabled = false,
	ariaLabel,
}: ActionButtonProps) => {
	// Combine base, variant, and custom styles
	const combinedClassName = cn(baseStyles, variantStyles[variant], className);

	// External link: Opens in new tab with security attributes
	if (href && external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={combinedClassName}
				aria-label={ariaLabel}
			>
				{children}
			</a>
		);
	}

	// Regular link: Same-page navigation
	if (href) {
		return (
			<a href={href} className={combinedClassName} aria-label={ariaLabel}>
				{children}
			</a>
		);
	}

	// Router link: TanStack Router internal navigation
	if (to) {
		return (
			<Link to={to} className={combinedClassName} aria-label={ariaLabel}>
				{children}
			</Link>
		);
	}

	// Button: Standard button element with click handler
	return (
		<button
			type={type}
			onClick={onClick}
			className={combinedClassName}
			disabled={disabled}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
};
