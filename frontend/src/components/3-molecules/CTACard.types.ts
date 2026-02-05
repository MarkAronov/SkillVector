export interface CTAAction {
	label: string;
	onClick?: () => void;
	href?: string;
	to?: string;
	variant?: "primary" | "outline";
	external?: boolean;
	ariaLabel?: string;
}

export interface CTACardProps {
	title: string;
	description: string;
	primaryAction?: CTAAction;
	secondaryAction?: CTAAction;
	className?: string;
	"aria-label"?: string;
}
