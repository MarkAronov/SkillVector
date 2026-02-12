import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Button Component
 *
 * Interactive button element for actions and navigation.
 * Custom implementation with SkillVector's styling enhancements.
 *
 * Variants available:
 * - default: Primary action button - pink accent on hover
 * - destructive: Dangerous actions (delete, remove)
 * - outline: Secondary actions with border - pink accent on hover
 * - secondary: Muted secondary actions - pink border + background on hover
 * - ghost: Minimal button without background
 * - link: Text-only button styled like a link - no underline, pink on hover
 *
 * Sizes available:
 * - xs: Extra small button (compact, 24px height)
 * - sm: Small button (compact, 32px height)
 * - default: Standard button size (36px height)
 * - lg: Large button (prominent, 40px height)
 * - icon: Square button for icons only (36px)
 * - icon-xs: Extra small square icon button (24px)
 * - icon-sm: Small square icon button (32px)
 * - icon-lg: Large square icon button (40px)
 */

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive no-underline",
	{
		variants: {
			variant: {
				// Default variant - primary action with pink accent hover
				default:
					"bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",

				// Destructive variant - dangerous actions
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",

				// Outline variant - neutral functional control (pagination, table actions)
				// Neutral bg on hover, accent border for visual feedback
				// dark:hover overrides needed so dark:border-input doesn't block hover state
				outline:
					"border border-input bg-transparent hover:bg-muted hover:border-accent dark:bg-input/30 dark:border-input dark:hover:border-accent dark:hover:bg-muted",

				// Secondary variant - Mix of primary and outlined styles
				// Rest state: blue border (primary) with blue text
				// Hover state: matches outlined hover (muted bg + pink accent border), keeps blue text
				secondary:
					"border border-primary bg-transparent text-primary hover:bg-muted hover:border-accent dark:border-primary dark:hover:border-accent dark:hover:bg-muted",
				link: "text-primary hover:text-accent",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
				"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const Button = ({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) => {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
};

export { Button, buttonVariants };
