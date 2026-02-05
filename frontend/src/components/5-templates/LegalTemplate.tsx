import { PageContainer } from "../2-atoms/PageContainer";
import { Hero } from "../3-molecules/Hero";
import type { LegalTemplateProps } from "./LegalTemplate.types";
import { PageTemplate } from "./PageTemplate";

export const LegalTemplate = ({
	title,
	subtitle,
	children,
	pageTitle,
}: LegalTemplateProps) => {
	return (
		<PageTemplate title={pageTitle || title} maxWidth="lg">
			<PageContainer maxWidth="lg">
				<Hero title={title} subtitle={subtitle} />
				{children}
			</PageContainer>
		</PageTemplate>
	);
}
