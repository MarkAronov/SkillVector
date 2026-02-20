import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import type {
	AccordionContentProps,
	AccordionItemProps,
	AccordionProps,
	AccordionTriggerProps,
} from "./Accordion.types";

/**
 * Accordion component
 * A collapsible content section with customizable expand/collapse behavior.
 * Supports both single and multiple item expansion.
 *
 * @example
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content here</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */
export const Accordion = ({ ...props }: AccordionProps) => {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
};

/**
 * AccordionItem component
 * Individual collapsible item within an Accordion.
 * Use island styling (border + rounded) for separated items, or default for connected items.
 *
 * Features:
 * - Hover effect matches outline button styling (border color change)
 * - Island style: separated items with rounded borders
 * - Default style: connected items with dividing lines
 *
 * @example
 * // Island style (separated)
 * <AccordionItem className="border rounded-lg border-border px-3">
 *
 * // Default style (connected with dividing lines)
 * <AccordionItem>
 */
export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn(
				"border-b last:border-b-0 hover:border-accent  dark:hover:border-accent ",
				className,
			)}
			{...props}
		/>
	);
};

/**
 * AccordionTrigger component
 * Clickable header that expands/collapses accordion content.
 * Includes chevron icon that rotates based on open/closed state.
 *
 * Features:
 * - Keyboard accessible (Enter/Space to toggle)
 * - Focus ring for keyboard navigation
 * - Smooth chevron rotation animation
 * - No underline on hover (more polished appearance)
 */
export const AccordionTrigger = ({
	className,
	children,
	...props
}: AccordionTriggerProps) => {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					// Layout & Structure
					"flex flex-1 items-start justify-between gap-4",
					// Spacing
					"py-4",
					// Typography
					"text-left text-sm font-medium",
					// Interactive States (no underline for cleaner look)
					"transition-all outline-none",
					// Focus States
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-md",
					// Disabled States
					"disabled:pointer-events-none disabled:opacity-50",
					// Chevron Rotation
					"[&[data-state=open]>svg]:rotate-180",
					className,
				)}
				{...props}
			>
				{children}
				{/* Chevron Icon */}
				<ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
};

/**
 * AccordionContent component
 * Collapsible content area with smooth expand/collapse animation.
 * Content is hidden when collapsed and revealed when expanded.
 *
 * Animation behavior:
 * - Smooth slide down when opening
 * - Smooth slide up when closing
 * - Uses CSS animations for performance
 */
export const AccordionContent = ({
	className,
	children,
	...props
}: AccordionContentProps) => {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
			{...props}
		>
			<div className={cn("pt-0 pb-4", className)}>{children}</div>
		</AccordionPrimitive.Content>
	);
};
