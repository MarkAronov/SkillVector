import { Slot } from "@radix-ui/react-slot";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

function TooltipProvider({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return (
		<TooltipPrimitive.Provider
			data-slot="tooltip-provider"
			delayDuration={delayDuration}
			{...props}
		/>
	);
}

function Tooltip({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot="tooltip" {...props} />
		</TooltipProvider>
	);
}

function TooltipTrigger({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
	className,
	sideOffset = 0,
	variant = "default",
	asChild = false,
	children,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
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
					"z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
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
					"z-[9999]",
					!asChild &&
						"animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance border",
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

// Wrapper component for backward compatibility
interface TooltipWrapperProps {
	content: React.ReactNode;
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "badge";
	delayDuration?: number;
}

function TooltipWrapper({
	content,
	children,
	className,
	variant = "default",
	delayDuration = 200,
}: TooltipWrapperProps) {
	return (
		<Tooltip delayDuration={delayDuration}>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent variant={variant} className={className}>
				{content}
			</TooltipContent>
		</Tooltip>
	);
}

export {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider,
	TooltipWrapper,
};
