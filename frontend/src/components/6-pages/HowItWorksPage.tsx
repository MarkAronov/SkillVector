import { cn } from "@/lib/utils";
import { SPACING } from "../1-ions";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { Hero } from "../3-molecules/Hero";
import { CardGrid } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";
import { steps } from "./HowItWorksPage.data.tsx";

export const HowItWorksPage = () => {
	return (
		<PageTemplate title="How It Works">
			{/* Hero Section */}
			<Hero
				title="How It"
				brand="Works"
				subtitle="Understanding the technology that powers intelligent professional search"
			/>

			{/* Process Steps */}
			<Section>
				<CardGrid items={steps} maxColumns={1} centerIncompleteRows />
			</Section>

			{/* Call to Action */}
			<Section>
				<CardGrid
					items={[
						{
							title: "Ready to Try It?",
							centered: true,
							customContent: (
								<>
									<Heading variant="section" className="mb-4">
										Ready to Try It?
									</Heading>
									<Text variant="lead" className="mb-6">
										Experience semantic search in action with our live demo
									</Text>
									<Div
										className={cn(
											// Layout
											"flex justify-center flex-wrap",
											// Spacing
											SPACING.GAP.md,
										)}
									>
										<Button asChild aria-label="Try Demo">
											<Link to="/search">Try Demo</Link>
										</Button>
										<Button
											asChild
											variant="secondary"
											aria-label="View API Docs"
										>
											<Link to="/documentation#api">View API Docs</Link>
										</Button>
									</Div>
								</>
							),
						},
					]}
					maxColumns={1}
				/>
			</Section>
		</PageTemplate>
	);
};
