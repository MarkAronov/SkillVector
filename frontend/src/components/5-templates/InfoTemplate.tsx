import { PageContainer } from "../2-atoms/PageContainer";
import { Hero } from "../3-molecules/Hero";
import type { InfoTemplateProps } from "./InfoTemplate.types";
import { PageTemplate } from "./PageTemplate";

export const InfoTemplate = ({
	title,
	subtitle,
	brand,
	children,
	pageTitle,
	maxWidth = "lg",
}: InfoTemplateProps) => {
	return (
		<PageTemplate title={pageTitle || title} maxWidth={maxWidth}>
			<PageContainer maxWidth={maxWidth}>
				<Hero title={title} subtitle={subtitle} brand={brand} />
				{children}
			</PageContainer>
		</PageTemplate>
	);
}
