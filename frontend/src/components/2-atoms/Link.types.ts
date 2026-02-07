/**
 * LINK ATOM - Navigation Types
 *
 * Unified link component handling both internal (SPA) and external navigation.
 * Automatically uses TanStack Router for internal links, native <a> for external.
 *
 * Variant Philosophy:
 * - default: Standard link with hover underline (most common)
 * - primary: Emphasized link using primary brand color
 * - muted: Subtle link that brightens on hover
 * - underline: Always underlined for maximum visibility
 *
 * Link Types:
 * - Internal: Uses TanStack Router for SPA navigation (to="/path")
 * - External: Uses native <a> tag with security attributes (href + external)
 *
 * Semantic Usage:
 * - Use <Link> for interactive navigation and actions
 * - For static text, use <Text> component instead
 * - Internal links: Provide `to` prop
 * - External links: Provide `href` and `external` props
 *
 * Accessibility:
 * - All variants maintain 4.5:1 contrast ratio minimum
 * - External links automatically add rel="noopener noreferrer"
 * - Supports keyboard navigation and screen readers
 * - Visible focus states for keyboard users
 */

import type { Link as RouterLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

/**
 * Available link variants
 * Each variant provides different visual emphasis
 */
export type LinkVariant =
	| "default" // Standard link with hover underline
	| "primary" // Primary brand color for emphasis
	| "muted" // Subtle link, brightens on hover
	| "underline"; // Always underlined, subtle hover effect

/**
 * Link component props
 * Extends TanStack Router Link props with variant and external link support
 */
export interface LinkProps
	extends Omit<ComponentProps<typeof RouterLink>, "className"> {
	/**
	 * Additional CSS classes
	 */
	className?: string;

	/**
	 * Visual variant (controls color and hover behavior)
	 * @default "default"
	 */
	variant?: LinkVariant;

	/**
	 * If true, renders as external link with target="_blank" and security attributes
	 * @default false
	 */
	external?: boolean;

	/**
	 * URL for external links (use with `external` prop)
	 * For internal links, use `to` prop instead
	 */
	href?: string;

	/**
	 * Control underline behavior
	 * @default true - Shows underline on hover (default variant) or always (underline variant)
	 * @example <Link underline={false}>No underline</Link>
	 */
	underline?: boolean;
}
