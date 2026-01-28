import type React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "../ui/scroll-area";

export interface ScrollAreaProps
	extends React.ComponentProps<typeof ScrollAreaPrimitive> {}

export const ScrollArea = ({
	className,
	children,
	...props
}: ScrollAreaProps) => {
	return (
		<ScrollAreaPrimitive className={className} {...props}>
			{children}
		</ScrollAreaPrimitive>
	);
};
