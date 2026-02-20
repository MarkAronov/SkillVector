import type * as AccordionPrimitive from "@radix-ui/react-accordion";

/**
 * Accordion component props
 * Wraps Radix UI Accordion primitives with custom styling
 */
export type AccordionProps = React.ComponentProps<
	typeof AccordionPrimitive.Root
>;

/**
 * AccordionItem component props
 */
export type AccordionItemProps = React.ComponentProps<
	typeof AccordionPrimitive.Item
>;

/**
 * AccordionTrigger component props
 */
export type AccordionTriggerProps = React.ComponentProps<
	typeof AccordionPrimitive.Trigger
>;

/**
 * AccordionContent component props
 */
export type AccordionContentProps = React.ComponentProps<
	typeof AccordionPrimitive.Content
>;
