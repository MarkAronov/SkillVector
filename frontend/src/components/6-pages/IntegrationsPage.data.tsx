import {
	Brain,
	Cloud,
	Code,
	Cpu,
	Database,
	FileJson,
	FileText,
	Globe,
	Layers,
	Server,
	Sparkles,
} from "lucide-react";
import { EXTERNAL_LINKS, SOCIAL_LINKS } from "@/constants/site";
import type { IntegrationCategory } from "./IntegrationsPage.types";

export const categories: IntegrationCategory[] = [
	{
		icon: <Brain className="h-8 w-8" />,
		title: "AI Providers",
		description: "Multiple AI embedding models for flexible deployment",
		integrations: [
			{
				icon: <Sparkles className="h-6 w-6" />,
				title: "OpenAI",
				description: "Industry-leading embeddings with text-embedding-3 models",
				status: "ready",
				links: {
					docs: "https://platform.openai.com/docs",
					github: "https://github.com/openai/openai-node",
				},
			},
			{
				icon: <Sparkles className="h-6 w-6" />,
				title: "Anthropic",
				description:
					"High-quality Claude embeddings with semantic understanding",
				status: "ready",
				links: {
					docs: "https://docs.anthropic.com",
					github: "https://github.com/anthropics/anthropic-sdk-typescript",
				},
			},
			{
				icon: <Sparkles className="h-6 w-6" />,
				title: "Google Gemini",
				description: "Google's latest embeddings with multimodal capabilities",
				status: "ready",
				links: {
					docs: "https://ai.google.dev",
					github: "https://github.com/google-gemini/generative-ai-js",
				},
			},
			{
				icon: <Sparkles className="h-6 w-6" />,
				title: "HuggingFace",
				description: "Access thousands of open-source embedding models",
				status: "ready",
				links: {
					docs: "https://huggingface.co/docs",
					github: "https://github.com/huggingface/huggingface.js",
				},
			},
			{
				icon: <Sparkles className="h-6 w-6" />,
				title: "Ollama",
				description: "Run models locally for complete data privacy",
				status: "ready",
				links: {
					docs: "https://ollama.com/library",
					github: "https://github.com/ollama/ollama",
				},
			},
		],
	},
	{
		icon: <Database className="h-8 w-8" />,
		title: "Vector Database",
		description: "High-performance vector storage and similarity search",
		integrations: [
			{
				icon: <Database className="h-6 w-6" />,
				title: "Qdrant",
				description:
					"Advanced filtering, HNSW indexing, and scalable architecture",
				status: "ready",
				links: {
					docs: "https://qdrant.tech/documentation/",
					github: "https://github.com/qdrant/qdrant",
				},
			},
		],
	},
	{
		icon: <Code className="h-8 w-8" />,
		title: "Development Tools",
		description: "APIs and SDKs for seamless integration",
		integrations: [
			{
				icon: <Globe className="h-6 w-6" />,
				title: "RESTful API",
				description: "OpenAPI 3.0 spec with interactive documentation",
				status: "ready",
				links: {
					internal: "/documentation#api",
					github: SOCIAL_LINKS.github,
				},
			},
			{
				icon: <Code className="h-6 w-6" />,
				title: "TypeScript SDK",
				description: "Type-safe SDK with full IntelliSense support",
				status: "ready",
				links: {
					internal: "/documentation#sdk",
					github: EXTERNAL_LINKS.sdkTypescript,
				},
			},
		],
	},
	{
		icon: <Cloud className="h-8 w-8" />,
		title: "Deployment Platforms",
		description: "Deploy SkillVector anywhere",
		integrations: [
			{
				icon: <Server className="h-6 w-6" />,
				title: "Docker",
				description: "Containerized deployment with Docker Compose",
				status: "ready",
				links: {
					docs: "https://docs.docker.com/",
					github: SOCIAL_LINKS.github,
				},
			},
			{
				icon: <Cloud className="h-6 w-6" />,
				title: "Render",
				description: "One-click deployment with automatic scaling",
				status: "ready",
				links: {
					docs: "https://render.com/docs",
					github: SOCIAL_LINKS.github,
				},
			},
			{
				icon: <Layers className="h-6 w-6" />,
				title: "Kubernetes",
				description: "Helm charts for cloud-native deployments",
				status: "soon",
				links: {
					docs: "https://kubernetes.io/docs/",
					github: SOCIAL_LINKS.github,
				},
			},
		],
	},
	{
		icon: <Layers className="h-8 w-8" />,
		title: "Data Formats",
		description: "Flexible profile data ingestion",
		integrations: [
			{
				icon: <FileText className="h-6 w-6" />,
				title: "CSV Import",
				description: "Upload profiles with automatic field mapping",
				status: "ready",
				links: {
					docs: "https://en.wikipedia.org/wiki/Comma-separated_values",
					github: SOCIAL_LINKS.github,
				},
			},
			{
				icon: <FileJson className="h-6 w-6" />,
				title: "JSON Import",
				description: "Structured data with nested fields and custom schemas",
				status: "ready",
				links: {
					docs: "https://www.json.org/json-en.html",
					github: SOCIAL_LINKS.github,
				},
			},
			{
				icon: <FileText className="h-6 w-6" />,
				title: "Plain Text",
				description: "Intelligent parsing with AI extraction",
				status: "ready",
				links: {
					docs: "https://en.wikipedia.org/wiki/Plain_text",
					github: SOCIAL_LINKS.github,
				},
			},
		],
	},
	{
		icon: <Cpu className="h-8 w-8" />,
		title: "Future Integrations",
		description: "Upcoming integrations and features",
		integrations: [
			{
				icon: <Globe className="h-6 w-6" />,
				title: "LinkedIn API",
				description: "Direct integration for profile synchronization",
				status: "planned",
				links: {
					docs: "https://learn.microsoft.com/linkedin/",
				},
			},
			{
				icon: <Code className="h-6 w-6" />,
				title: "GitHub API",
				description: "Import developer profiles with contribution analysis",
				status: "planned",
				links: {
					docs: "https://docs.github.com/en/rest",
					github: "https://github.com/github/rest-api-description",
				},
			},
			{
				icon: <Layers className="h-6 w-6" />,
				title: "ATS Systems",
				description: "Greenhouse, Lever, and other ATS integrations",
				status: "planned",
			},
		],
	},
];
