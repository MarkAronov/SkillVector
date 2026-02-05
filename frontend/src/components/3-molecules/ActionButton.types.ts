import type { ReactNode } from "react";

export interface ActionButtonProps {
	variant?: "primary" | "outline";
	children: ReactNode;
	href?: string;
	to?: string;
	onClick?: () => void;
	className?: string;
	external?: boolean;
	type?: "button" | "submit";
	disabled?: boolean;
	ariaLabel?: string;
}
