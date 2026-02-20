import type { LucideIcon } from "lucide-react";

export interface PanelViewToggleOption {
	/** Unique value for this option */
	value: string;

	/** Display label */
	label: string;

	/** Icon component to display */
	icon: LucideIcon;

	/** Count to display in parentheses */
	count: number;
}

export interface PanelViewToggleProps {
	/** Available toggle options */
	options: PanelViewToggleOption[];

	/** Currently active option value */
	activeValue: string;

	/** Callback when option is changed */
	onChange: (value: string) => void;

	/** Optional additional className */
	className?: string;
}
