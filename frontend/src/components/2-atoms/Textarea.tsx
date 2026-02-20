import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * Textarea Component
 *
 * Multi-line text input for longer form content.
 * Wraps shadcn/ui Textarea with SkillVector customizations.
 *
 * Features:
 * - Pinkish accent border and ring on focus (matches Input theming)
 * - Automatic resize disabled by default (add resize class to enable)
 * - Consistent border and focus states with Input component
 * - Disabled state styling
 * - Error state with aria-invalid support
 * - Minimum height of 80px for comfortable input
 *
 * Usage:
 * ```tsx
 * <Textarea placeholder="Enter your message" rows={5} />
 * <Textarea aria-invalid={hasError} className="resize" />
 * ```
 */

export const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.ComponentProps<typeof ShadcnTextarea>
>(({ className, ...props }, ref) => {
	return (
		<ShadcnTextarea
			ref={ref}
			className={cn(
				// Pink accent border on focus, no ring glow (matches Input)
				"focus-visible:!border-accent",
				"focus-visible:!ring-0",
				className,
			)}
			{...props}
		/>
	);
});

Textarea.displayName = "Textarea";
