import { ArrowLeft } from "lucide-react";
import { Glass } from "../1-ions/Glass";
import { Heading } from "../2-atoms/Heading";
import { Text } from "../2-atoms/Text";
import { ActionButton } from "../3-molecules/ActionButton";
import { Card, CardContent } from "../3-molecules/Card";
import { PageTemplate } from "../5-templates/PageTemplate";

interface PlaceholderPageProps {
	title: string;
	description?: string;
}

export const PlaceholderPage = ({
	title,
	description,
}: PlaceholderPageProps) => {
	return (
		<PageTemplate title={title}>
			<section className="py-12 lg:py-16">
				<Glass
					variant="pronounced"
					constrain
					maxWidthClass="max-w-3xl"
					className="text-center p-8 lg:p-12 border border-white/20 dark:border-white/10 shadow-lg"
				>
					<Heading variant="hero" className="mb-4">
						{title}
					</Heading>
					{description && (
						<Text variant="lead" className="mb-8">
							{description}
						</Text>
					)}
				</Glass>
			</section>

			<section className="py-8 lg:py-12">
				<Card variant="hover" aria-label="Under Construction">
					<CardContent centered>
						<Text className="mb-6">
							This page is currently under construction. Check back soon for
							updates!
						</Text>
						<ActionButton to="/" aria-label="Back to Search">
							<ArrowLeft className="h-4 w-4" />
							Back to Search
						</ActionButton>
					</CardContent>
				</Card>
			</section>
		</PageTemplate>
	);
};
