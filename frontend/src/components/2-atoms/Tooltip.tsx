import { Slot } from "@radix-ui/react-slot";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import {
	Tooltip as ShadcnTooltip,
	type TooltipContent as ShadcnTooltipContent,
	TooltipProvider as ShadcnTooltipProvider,
	TooltipTrigger as ShadcnTooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { BORDERS, SIZING, Z_INDEX } from "../1-ions";

/**
 * Tooltip Component
 *
 * Wraps shadcn/ui Tooltip with SkillVector customizations.
 * Adds badge variant and custom arrow styling.
 */

function TooltipProvider({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return <ShadcnTooltipProvider delayDuration={delayDuration} {...props} />;
}

function Tooltip({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return (
		<TooltipProvider>
			<ShadcnTooltip {...props} />
		</TooltipProvider>
	);
}

const TooltipTrigger = ShadcnTooltipTrigger;

function TooltipContent({
	className,
	sideOffset = 0,
	variant = "default",
	asChild = false,
	children,
	...props
}: React.ComponentProps<typeof ShadcnTooltipContent> & {
	variant?: "default" | "badge";
	asChild?: boolean;
}) {
	const Comp = asChild ? Slot : React.Fragment;
	const content = asChild ? (
		<Comp>{children}</Comp>
	) : (
		<>
			{children}
			<TooltipPrimitive.Arrow
				className={cn(
					`${Z_INDEX.tooltip} ${SIZING.ICON.xs} translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]`,
					variant === "badge"
						? "bg-primary fill-primary border-primary"
						: "bg-secondary fill-secondary border-secondary",
				)}
			/>
		</>
	);

	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				data-slot="tooltip-content"
				sideOffset={sideOffset}
				className={cn(
					"z-9999",
					!asChild &&
						`animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-fit origin-(--radix-tooltip-content-transform-origin) ${BORDERS.RADIUS.md} px-3 py-1.5 text-xs text-balance border`,
					!asChild && variant === "badge"
						? "bg-primary text-primary-foreground border-primary"
						: !asChild &&
								"bg-secondary text-secondary-foreground border-secondary",
					className,
				)}
				{...props}
			>
				{content}
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	);
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
