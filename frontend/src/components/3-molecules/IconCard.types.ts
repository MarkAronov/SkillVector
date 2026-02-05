import type { ReactNode } from "react";

export interface IconCardProps {
	icon: ReactNode;
	title: string;
	description: string;
	className?: string;
	badge?: ReactNode;
	actions?: ReactNode;
	children?: ReactNode;
	"aria-label"?: string;
}
