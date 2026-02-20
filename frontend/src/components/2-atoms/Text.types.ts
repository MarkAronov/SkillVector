/**
 * TEXT ATOM - Typography Types
 *
 * Flexible text component for displaying static content.
 * Provides semantic variants optimized for different content types.
 *
 * Variant Philosophy:
 * - body: Default paragraph text for general content (most common)
 * - lead: Larger, attention-grabbing introductory text
 * - muted: De-emphasized secondary information
 * - small: Compact text for metadata and labels
 * - caption: Tiny text for image captions or footnotes
 * - heading: Heading-style text with <p> semantics
 * - subheading: Subheading-style text with <p> semantics
 *
 * Size Scale (Mobile → Desktop):
 * - body: 14px → 16px (default, optimal reading)
 * - lead: 16px → 20px (introductory paragraphs)
 * - muted: 14px → 16px (secondary info, lower contrast)
 * - small: 12px → 14px (metadata, fine print)
 * - caption: 12px (image captions, footnotes)
 * - heading: 24px → 30px (heading appearance)
 * - subheading: 16px → 18px (subheading appearance)
 *
 * Semantic Usage:
 * - Use <Text> for static content display
 * - For interactive text, use <Link> component instead
 * - Use `as` prop to change underlying element (defaults to <p>)
 * - Variants control visual style, `as` controls HTML semantics
 *
 * Accessibility:
 * - All variants maintain proper contrast ratios
 * - Line heights optimized for readability
 * - Supports screen readers with semantic HTML elements
 */

import type { ComponentProps, ElementType } from "react";

/**
 * Available text variants
 * Each variant serves a specific semantic purpose
 */
export type TextVariant =
	| "body" // Standard paragraph text (14px → 16px)
	| "lead" // Lead paragraph, larger and emphasized (16px → 20px)
	| "muted" // De-emphasized secondary text (14px → 16px, lower contrast)
	| "small" // Compact text for metadata (12px → 14px)
	| "caption" // Tiny text for captions (12px)
	| "heading" // Heading-style appearance with <p> semantics (24px → 30px)
	| "subheading"; // Subheading-style appearance with <p> semantics (16px → 18px)

/**
 * Text component props
 * Extends native <p> element props
 */
export interface TextProps extends ComponentProps<"p"> {
	/**
	 * Visual variant (controls size, color, spacing)
	 * @default "body"
	 */
	variant?: TextVariant;

	/**
	 * Override the underlying HTML element
	 * @default "p"
	 * @example <Text as="span">Inline text</Text>
	 */
	as?: ElementType;
}
