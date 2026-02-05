import type { Link as RouterLink } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export type LinkVariant = "default" | "primary" | "muted" | "underline";

export interface LinkProps
	extends Omit<ComponentProps<typeof RouterLink>, "className"> {
	className?: string;
	variant?: LinkVariant;
	external?: boolean;
	href?: string;
}
