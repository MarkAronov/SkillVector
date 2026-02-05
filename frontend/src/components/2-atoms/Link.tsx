import { cn } from "@/lib/utils";
import { Link as RouterLink } from "@tanstack/react-router";
import type { LinkProps, LinkVariant } from "./Link.types";

/**
 * Link Component
 *
 * Unified link component handling both internal and external links.
 * Internal links use TanStack Router, external links use native <a> tags.
 */

/**
 * Variant styles mapping
 * Each variant provides different visual emphasis:
 * - default: Standard link with hover underline
 * - primary: Primary color link for emphasis
 * - muted: Subtle link that brightens on hover
 * - underline: Always underlined for maximum visibility
 */
const variantClasses: Record<LinkVariant, string> = {
	// Default link - underlines on hover
	default: "hover:underline transition-colors",

	// Primary link - uses primary color for emphasis
	primary: "text-primary hover:underline transition-colors",

	// Muted link - subtle, brightens on hover
	muted: "text-muted-foreground hover:text-primary transition-colors",

	// Underline link - always visible, subtle hover effect
	underline: "underline hover:text-muted-foreground/70 transition-colors",
};

const Link = ({
	className,
	variant = "default",
	external = false,
	href,
	...props
}: LinkProps) => {
	// Get the visual style for the selected variant
	const variantClass = variantClasses[variant];

	// Combine variant style with custom classes
	const combinedClassName = cn(variantClass, className);

	// External or href links use native <a> tag
	if (external || href) {
		const children = props.children;

		return (
			<a
				href={href}
				className={combinedClassName}
				{...(external && {
					target: "_blank",
					rel: "noopener noreferrer",
				})}
			>
				{typeof children === "function"
					? children({ isActive: false, isTransitioning: false })
					: children}
			</a>
		);
	}

	// Internal links use TanStack Router for SPA navigation
	return <RouterLink className={combinedClassName} {...props} />;
}

export { Link, type LinkProps, type LinkVariant };

