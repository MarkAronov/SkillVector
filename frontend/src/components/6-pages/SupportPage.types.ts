import type { ReactNode } from "react";

export interface SupportOption {
	icon: ReactNode;
	title: string;
	description: string;
	linkText: string;
	href: string;
	isInternal: boolean;
}
