import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";

type ListVariant = "default" | "disc" | "inline" | "spaced";

interface ListProps extends ComponentProps<"ul"> {
	variant?: ListVariant;
}

const variantClasses: Record<ListVariant, string> = {
	default: "",
	disc: `list-disc list-inside ${SPACING.STACK.sm} ml-4`,
	inline: `flex flex-wrap ${SPACING.GAP.sm}`,
	spaced: SPACING.STACK.md,
};

function List({ className, variant = "default", ...props }: ListProps) {
	return <ul className={cn(variantClasses[variant], className)} {...props} />;
}

interface ListItemProps extends ComponentProps<"li"> {
	variant?: "default" | "bullet" | "inline";
}

const itemVariants = {
	default: "",
	bullet: `flex ${SPACING.GAP.sm}`,
	inline: "",
};

function ListItem({ className, variant = "default", ...props }: ListItemProps) {
	return <li className={cn(itemVariants[variant], className)} {...props} />;
}

export { List, ListItem, type ListProps, type ListItemProps, type ListVariant };
