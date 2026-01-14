import type { ReactNode } from "react";
import { PageContainer } from "../2-atoms/PageContainer";
import { Hero } from "../3-molecules/Hero";
import { PageTemplate } from "./PageTemplate";

interface InfoTemplateProps {
	title: string;
	subtitle: string;
	brand?: string;
	children: ReactNode;
	/** Browser tab title (defaults to title if not provided) */
	pageTitle?: string;
	/** Max width variant for the main container */
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function InfoTemplate({
	title,
	subtitle,
	brand,
	children,
	pageTitle,
	maxWidth = "lg",
}: InfoTemplateProps) {
	return (
		<PageTemplate title={pageTitle || title} maxWidth={maxWidth}>
			<PageContainer maxWidth={maxWidth}>
				<Hero title={title} subtitle={subtitle} brand={brand} />
				{children}
			</PageContainer>
		</PageTemplate>
	);
}
