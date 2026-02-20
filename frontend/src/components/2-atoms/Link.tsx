import { Link as RouterLink } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { LinkProps, LinkVariant } from "./Link.types";

/**
 * Link Component
 *
 * Unified link component handling both internal and external links.
 * Internal links use TanStack Router, external links use native <a> tags.
 *
 * Customization:
 * - Set `underline={false}` to remove underline styles (useful for navigation menus)
 * - Use variants to control color and emphasis
 */

/**
 * Variant styles mapping
 * Each variant provides different visual emphasis:
 * - default: Standard link with hover underline (unless underline={false})
 * - primary: Primary color link for emphasis
 * - muted: Subtle link that brightens on hover (pink accent)
 * - underline: Always underlined for maximum visibility (unless underline={false})
 */
const variantClasses: Record<LinkVariant, string> = {
	// Default link - no underline, color change on hover/active (mobile tap)
	default: "hover:text-accent active:text-accent transition-colors",

	// Primary link - uses primary color, accent on hover/active
	primary:
		"text-primary hover:text-accent active:text-accent transition-colors",

	// Muted link - subtle, brightens to pink accent on hover/active
	muted:
		"text-muted-foreground hover:text-accent active:text-accent transition-colors",

	// Underline link - always visible, pink accent on hover/active
	underline: "underline hover:text-accent active:text-accent transition-colors",
};

const Link = ({
	className,
	variant = "default",
	external = false,
	href,
	underline = true,
	...props
}: LinkProps) => {
	// Get the visual style for the selected variant
	const variantClass = variantClasses[variant];

	// Remove underline classes if underline prop is false
	const processedVariantClass = underline
		? variantClass
		: variantClass.replace(/hover:underline|underline/g, "").trim();

	// Combine variant style with custom classes
	const combinedClassName = cn(processedVariantClass, className);

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
};

export { Link, type LinkProps, type LinkVariant };
