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
 * - sm: Small button (compact)
 * - default: Standard button size
 * - lg: Large button (prominent)
 * - icon: Square button for icons only
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

				// Outline variant - secondary actions with pink accent hover
				outline:
					"border border-input bg-transparent hover:bg-accent/10 hover:text-accent hover:border-accent dark:bg-input/30 dark:border-input",

				// Secondary variant - muted actions with pink border + background on hover
				secondary:
					"border border-input bg-input/5 hover:bg-accent/30 hover:text-accent-foreground hover:!border-accent",

				// Ghost variant - minimal with pink accent hover
				ghost: "hover:bg-accent hover:text-accent-foreground",

				// Link variant - text-only with pink accent on hover, no underline
				link: "text-primary hover:text-accent",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
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
