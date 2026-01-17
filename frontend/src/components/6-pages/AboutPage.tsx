import {
	Brain,
	Database,
	Heart,
	Layers,
	Target,
	Users,
	Zap,
} from "lucide-react";
import { Heading } from "../2-atoms/Heading";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { Hero } from "../3-molecules/Hero";
import { CardGrid, type CardGridItem } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";

const capabilities: CardGridItem[] = [
	{
		icon: <Target className="h-6 w-6" />,
		title: "Precision",
		description:
			"Semantic search that understands context and relationships between skills.",
	},
	{
		icon: <Zap className="h-6 w-6" />,
		title: "Speed",
		description:
			"Lightning-fast vector search powered by Qdrant for instant results.",
	},
	{
		icon: <Users className="h-6 w-6" />,
		title: "Scalability",
		description:
			"Built to handle millions of profiles with consistent performance.",
	},
	{
		icon: <Brain className="h-6 w-6" />,
		title: "AI & Embeddings",
		description:
			"Support for multiple AI providers (OpenAI, Anthropic, Google Gemini, HuggingFace, Ollama) with flexible embedding model selection.",
	},
	{
		icon: <Database className="h-6 w-6" />,
		title: "Vector Database",
		description:
			"Qdrant vector database for high-performance similarity search and scalable storage.",
	},
	{
		icon: <Layers className="h-6 w-6" />,
		title: "Modern Web Stack",
		description:
			"React 19 frontend with TanStack Router, Tailwind CSS, and a robust Node.js backend with TypeScript.",
	},
	{
		icon: <Heart className="h-6 w-6" />,
		title: "Open Source",
		description: "Transparent, community-driven development under MIT license.",
	},
];

export const AboutPage = () => {
	return (
		<PageTemplate title="About">
			{/* Hero Section */}
			<Hero
				title="About"
				brand="SkillVector"
				subtitle="Revolutionizing professional search with AI-powered semantic matching that understands skills, not just keywords."
			/>

			{/* Mission Section */}
			<Section>
				<CardGrid
					items={[
						{
							title: "Our Mission",
							customContent: (
								<>
									<Heading variant="section" className="mb-4">
										Our Mission
									</Heading>
									<Text className="mb-4">
										SkillVector was built to solve a fundamental problem in
										talent discovery: traditional keyword-based search fails to
										capture the nuanced relationships between skills,
										experiences, and expertise.
									</Text>
									<Text>
										By leveraging advanced AI embeddings and vector similarity
										search, we enable organizations to find the right
										professionals based on what they can do, not just what
										keywords appear in their profiles.
									</Text>
								</>
							),
						},
					]}
					maxColumns={1}
					gap="lg"
				/>
			</Section>

			{/* Capabilities & Technology Stack */}
			<Section>
				<CardGrid items={capabilities} maxColumns={2} gap="lg" />
			</Section>
		</PageTemplate>
	);
};
