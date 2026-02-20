import type { ReactNode } from "react";

/**
 * PageTemplate Props
 *
 * Flexible page layout system with consistent width and spacing controls.
 *
 * Width Variants (when contained=true):
 * - sm: 768px (max-w-3xl) - Narrow reading content, focused forms
 * - md: 896px (max-w-4xl) - Articles, blog posts, documentation
 * - lg: 1024px (max-w-5xl) - DEFAULT - Standard content pages
 * - xl: 1152px (max-w-6xl) - Wide content, complex layouts
 * - 2xl: 1280px (max-w-7xl) - Extra wide (API docs, dashboards)
 * - full: No max-width constraint - Full width pages
 *
 * Common Patterns:
 * - Standard page: <PageTemplate title="Page Name"> (uses lg default)
 * - API Documentation: <PageTemplate title="Docs" maxWidth="2xl">
 * - Article/Blog: <PageTemplate title="Article" maxWidth="md">
 * - Full-width: <PageTemplate title="Dashboard" maxWidth="full">
 * - Custom layout: <PageTemplate contained={false}> (no container/padding)
 */
export interface PageTemplateProps {
	children: ReactNode;

	/** Additional classes for the main content area */
	className?: string;

	/** Page title to display in browser tab (will be prefixed with "SkillVector - ") */
	title?: string;

	/**
	 * Whether to include container and padding (default: true)
	 * Set to false for full control over layout (e.g., landing pages with custom sections)
	 */
	contained?: boolean;

	/**
	 * Max width variant for the main container when `contained` is true
	 * @default "lg" (1024px/max-w-5xl)
	 */
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";

	/**
	 * Padding preset for the main container
	 * - "responsive": px-4 sm:px-6 lg:px-8 py-12 (DEFAULT - adapts to screen size)
	 * - "compact": px-4 py-8 (Less vertical space)
	 * - "none": No padding (use with contained=false or custom className)
	 * @default "responsive"
	 */
	paddingVariant?: "responsive" | "compact" | "none";

	/**
	 * When true, wraps children in a Div with constrain prop
	 * Use with contained={false} for manual content width control
	 * @default false
	 */
	constrain?: boolean;

	/**
	 * Custom max-width class when using constrain prop (e.g., "max-w-5xl")
	 * @default "max-w-5xl"
	 */
	constrainMaxWidth?: string;
}
