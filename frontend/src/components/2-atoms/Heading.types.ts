/**
 * HEADING ATOM - Typography Types
 *
 * Semantic heading component with visual variants.
 * Controls both HTML semantics (h1-h6) and visual appearance.
 *
 * Semantic Levels (as prop):
 * - h1: Page title (use once per page)
 * - h2: Major section headers
 * - h3: Subsection headers
 * - h4: Minor section headers
 * - h5: Smaller divisions
 * - h6: Smallest divisions
 *
 * Visual Variants:
 * - hero: Large, bold hero headings (48px)
 * - section: Section headings (30px → 36px)
 * - subsection: Subsection headings (20px → 24px)
 * - card: Card title headings (18px → 20px)
 *
 * Separation of Concerns:
 * - `as` prop: Controls HTML semantics (accessibility, SEO)
 * - `variant` prop: Controls visual appearance (size, weight, spacing)
 * - Example: <Heading as="h1" variant="hero"> for large h1
 * - Example: <Heading as="h2" variant="card"> for small h2
 *
 * Accessibility:
 * - Always maintain proper heading hierarchy (don't skip levels)
 * - Use semantic `as` for screen readers and SEO
 * - Visual size can differ from semantic level
 * - All variants meet WCAG 2.0 contrast requirements
 *
 * Best Practices:
 * - One h1 per page (typically page title)
 * - Logical heading hierarchy (h1 → h2 → h3, don't skip)
 * - Variant controls appearance, `as` controls meaning
 * - Don't use headings just for styling (use Text instead)
 */

import type { ComponentProps } from "react";

/**
 * Semantic heading levels (h1-h6)
 * Controls HTML element and heading hierarchy
 */
export type HeadingLevel =
	| "h1" // Top-level page heading (use once)
	| "h2" // Major section headings
	| "h3" // Subsection headings
	| "h4" // Minor section headings
	| "h5" // Smaller divisions
	| "h6"; // Smallest divisions

/**
 * Visual heading variants
 * Controls size, weight, and spacing independently from semantic level
 */
export type HeadingVariant =
	| "hero" // Large hero headings (48px)
	| "section" // Section headings (30px → 36px)
	| "subsection" // Subsection headings (20px → 24px)
	| "card"; // Card title headings (18px → 20px)

/**
 * Heading component props
 * Extends native heading element props (h1-h6)
 */
export interface HeadingProps extends ComponentProps<HeadingLevel> {
	/**
	 * Semantic heading level (HTML element)
	 * Controls accessibility and SEO meaning
	 * @default "h2"
	 */
	as?: HeadingLevel;

	/**
	 * Visual variant (controls size and appearance)
	 * @default "section"
	 */
	variant?: HeadingVariant;
}
