import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { BORDERS, SPACING } from "../1-ions";

/**
 * Div Component - Semantic container with common layouts
 *
 * Provides commonly-used layout patterns. For one-off custom layouts,
 * use regular <div> with Tailwind classes directly.
 *
 * Variants:
 * - default: Plain container
 * - flex: Horizontal flexbox with gap (common pattern)
 * - center: Centered content (both axes)
 * - stack: Vertical spacing (common for content)
 * - codeBlock: Code display styling
 */

type DivVariant = "default" | "flex" | "center" | "stack" | "codeBlock";

interface DivProps extends ComponentProps<"div"> {
	variant?: DivVariant;
	/** When true, constrains width and centers element (defaults to `max-w-2xl mx-auto`) */
	constrain?: boolean;
	maxWidthClass?: string;
}

const variantClasses: Record<DivVariant, string> = {
	default: "",
	flex: `flex ${SPACING.GAP.md} items-start`, // Common horizontal layout
	center: "flex justify-center items-center", // Center content
	stack: SPACING.STACK.md, // Vertical content stacking (renamed from "spacer")
	codeBlock: `bg-muted/50 ${BORDERS.RADIUS.lg} p-4`, // Code display (renamed from "code")
};

function Div({
	className,
	variant = "default",
	constrain = false,
	maxWidthClass,
	...props
}: DivProps) {
	const constraintClass = constrain
		? (maxWidthClass ?? "max-w-2xl mx-auto")
		: "";
	return (
		<div
			className={cn(variantClasses[variant], constraintClass, className)}
			{...props}
		/>
	);
}

export { Div, type DivProps, type DivVariant };
