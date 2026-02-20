import type { ReactNode } from "react";

export interface InfoTemplateProps {
	title: string;
	subtitle: string;
	brand?: string;
	children: ReactNode;
	/** Browser tab title (defaults to title if not provided) */
	pageTitle?: string;
	/** Max width variant for the main container */
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}
