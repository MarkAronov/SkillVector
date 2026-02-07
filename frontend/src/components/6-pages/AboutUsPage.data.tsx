import {
	Brain,
	Database,
	Heart,
	Layers,
	Target,
	Users,
	Zap,
} from "lucide-react";
import type { CardGridItem } from "../4-organisms/CardGrid.types";

export const capabilities: CardGridItem[] = [
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
