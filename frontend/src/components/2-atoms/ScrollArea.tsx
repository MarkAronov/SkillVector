import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type React from "react";
import { cn } from "@/lib/utils";

/**
 * ScrollArea Component — Custom Radix ScrollArea wrapper
 *
 * Built directly on @radix-ui/react-scroll-area primitives to provide
 * a custom scrollbar with auto-fade behavior. Does NOT use the shadcn
 * ui/scroll-area wrapper — all customization lives here in the atom layer.
 *
 * Scrollbar Behavior:
 * - Appears immediately when user scrolls (delay-0 on visible)
 * - Fades out 1 second after scrolling stops (delay-1000 on hidden)
 * - 500ms opacity transition for smooth fade in/out
 * - forceMount keeps the scrollbar in the DOM for CSS transitions
 *
 * Thumb Styling:
 * - Semi-transparent foreground color (50% opacity)
 * - Hover: 70% opacity for visibility feedback
 * - Active/dragging: 90% opacity
 *
 * Requirements:
 * - Parent must provide a bounded height (e.g. flex-1 in a h-screen flex container)
 * - overflow-hidden on Root is required for the Viewport to scroll
 */

export interface ScrollAreaProps
	extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {}

export const ScrollArea = ({
	className,
	children,
	...props
}: ScrollAreaProps) => {
	return (
		<ScrollAreaPrimitive.Root
			data-slot="scroll-area"
			className={cn(
				// overflow-hidden is required — without it the Root expands
				// to fit all content and the Viewport never overflows
				"relative overflow-hidden",
				className,
			)}
			{...props}
		>
			{/* Viewport — native scrolling container */}
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="size-full rounded-[inherit]"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>

			{/* Vertical scrollbar with auto-fade */}
			<ScrollAreaScrollbar orientation="vertical" />

			{/* Corner for when both scrollbars are visible */}
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
};

/**
 * ScrollAreaScrollbar — Custom scrollbar with fade delay
 *
 * Uses forceMount so the element stays in the DOM and we can
 * animate opacity via CSS transitions instead of mount/unmount.
 *
 * Timing:
 * - Visible → opacity-100 with no delay (instant appear)
 * - Hidden → opacity-0 with 1000ms delay (stays visible briefly after scroll stops)
 * - Transition duration: 500ms ease-out
 */
const ScrollAreaScrollbar = ({
	className,
	orientation = "vertical",
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) => {
	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			forceMount
			className={cn(
				// Base scrollbar styling
				"flex p-px select-none pointer-events-auto",

				// Fade transition — 500ms ease-out for smooth appearance
				"transition-opacity duration-500 ease-out",

				// Visible state — show immediately when scrolling
				"data-[state=visible]:opacity-100 data-[state=visible]:delay-0",

				// Hidden state — delay 1s before fading out
				"data-[state=hidden]:opacity-0 data-[state=hidden]:delay-1000",

				// Vertical scrollbar — positioned on the right edge
				orientation === "vertical" &&
					"absolute right-0 top-0 h-full w-2.5 border-l border-l-transparent z-20",

				// Horizontal scrollbar — positioned on the bottom edge
				orientation === "horizontal" &&
					"absolute bottom-0 left-0 h-2.5 flex-col w-full border-t border-t-transparent z-20",

				className,
			)}
			{...props}
		>
			{/* Thumb — the draggable scroll indicator */}
			<ScrollAreaPrimitive.ScrollAreaThumb
				data-slot="scroll-area-thumb"
				className={cn(
					"relative flex-1 rounded-full",

					// Semi-transparent foreground for visibility on any background
					"bg-foreground/50 hover:bg-foreground/70",

					// Smooth color transition on hover
					"transition-[background-color] duration-200 ease-out",

					// Stronger opacity when actively dragging
					"active:bg-foreground/90",
				)}
			/>
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	);
};
