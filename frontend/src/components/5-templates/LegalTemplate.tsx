import type { ReactNode } from "react";
import { PageContainer } from "../2-atoms/PageContainer";
import { Hero } from "../3-molecules/Hero";
import { PageTemplate } from "./PageTemplate";

interface LegalTemplateProps {
	title: string;
	subtitle: string;
	children: ReactNode;
	/** Browser tab title (defaults to title if not provided) */
	pageTitle?: string;
}

export function LegalTemplate({
	title,
	subtitle,
	children,
	pageTitle,
}: LegalTemplateProps) {
	return (
		<PageTemplate title={pageTitle || title} maxWidth="lg">
			<PageContainer maxWidth="lg">
				<Hero title={title} subtitle={subtitle} />
				{children}
			</PageContainer>
		</PageTemplate>
	);
}
