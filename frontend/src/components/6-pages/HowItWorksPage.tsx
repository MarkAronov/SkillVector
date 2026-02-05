import { Brain, Search, Upload, Zap } from "lucide-react";
import { SPACING } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { ActionButton } from "../3-molecules/ActionButton";
import { Hero } from "../3-molecules/Hero";
import { CardGrid } from "../4-organisms/CardGrid";
import type { CardGridItem } from "../4-organisms/CardGrid.types";
import { PageTemplate } from "../5-templates/PageTemplate";

const steps: CardGridItem[] = [
	{
		step: 1,
		icon: <Upload className="h-6 w-6" />,
		title: "Data Upload",
		description:
			"Upload professional profiles in multiple formats (CSV, JSON, TXT). Our intelligent parser automatically extracts key information including names, roles, skills, and experience.",
		color: "text-primary",
		codeExample: {
			label: "POST /parser/upload",
			code: "POST /parser/upload",
			note: "Supports CSV, JSON, and plain text formats",
		},
	},
	{
		step: 2,
		icon: <Brain className="h-6 w-6" />,
		title: "AI Embedding Generation",
		description:
			"Each profile is processed by advanced AI models to create high-dimensional vector embeddings. These embeddings capture the semantic meaning of skills and experience, not just keywords.",
		color: "text-secondary",
		tags: ["OpenAI", "Anthropic", "Google Gemini", "HuggingFace", "Ollama"],
	},
	{
		step: 3,
		icon: <Search className="h-6 w-6" />,
		title: "Semantic Search",
		description:
			"When you search, your query is converted into a vector embedding using the same AI model. The vector database finds the most similar profiles using cosine similarity.",
		color: "text-success",
		codeExample: {
			label: "POST /ai/search",
			code: "POST /ai/search",
			note: "Returns ranked results by semantic similarity",
		},
	},
	{
		step: 4,
		icon: <Zap className="h-6 w-6" />,
		title: "Instant Results",
		description:
			"Qdrant's high-performance vector search engine returns results in milliseconds, even across millions of profiles. Results include similarity scores and can be filtered by various criteria.",
		color: "text-orange-600",
		items: [
			"Similarity scores (0-1 range)",
			"Source context and metadata",
			"Configurable result limits",
		],
	},
];

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
				<CardGrid items={steps} maxColumns={1} gap="lg" centerIncompleteRows />
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
										className={`flex ${SPACING.GAP.md} justify-center flex-wrap`}
									>
										<ActionButton to="/search" aria-label="Try Demo">
											Try Demo
										</ActionButton>
										<ActionButton
											to="/documentation#api"
											variant="outline"
											aria-label="View API Docs"
										>
											View API Docs
										</ActionButton>
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
