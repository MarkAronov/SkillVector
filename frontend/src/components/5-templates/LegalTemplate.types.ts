import type { ReactNode } from "react";

export interface LegalTemplateProps {
	title: string;
	subtitle: string;
	children: ReactNode;
	/** Browser tab title (defaults to title if not provided) */
	pageTitle?: string;
}
