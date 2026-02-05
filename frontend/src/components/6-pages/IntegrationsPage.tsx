import { EXTERNAL_LINKS, SOCIAL_LINKS } from "@/constants/site";
import { useNavigate } from "@tanstack/react-router";
import {
	Brain,
	Cloud,
	Code,
	Cpu,
	Database,
	FileJson,
	FileText,
	Github,
	Globe,
	Layers,
	Server,
	Sparkles,
	SquareArrowOutUpRight,
} from "lucide-react";
import { TYPOGRAPHY } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Section } from "../2-atoms/Section";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../2-atoms/Tooltip";
import { ActionButton } from "../3-molecules/ActionButton";
import { Card, CardContent } from "../3-molecules/Card";
import { Hero } from "../3-molecules/Hero";
import { StatusBadge } from "../3-molecules/StatusBadge";
import { CardGrid } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import type { IntegrationCategory } from "./IntegrationsPage.types";

const categories: IntegrationCategory[] = [
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

export const IntegrationsPage = () => {
	useNavigate();
	return (
		<PageTemplate title="Integrations">
			{/* Hero Section */}
			<Hero
				title="Integrations"
				brand="Hub"
				subtitle="Connect SkillVector with your favorite tools and services for seamless talent search."
			/>

			{/* Integration Categories */}
			<Section>
				<CardGrid
					maxColumns={1}
					gap="lg"
					enforceCustomContent
					items={categories.map((category) => ({
						id: category.title,
						title: category.title,
						centered: false,
						customContent: (
							<Div className="flex flex-col gap-6">
								<Div variant="flex" className="items-start gap-4">
									<Div className="text-primary shrink-0">{category.icon}</Div>
									<Div className="min-w-0">
										<Heading variant="card" className="mb-1">
											{category.title}
										</Heading>
										<Text variant="muted">{category.description}</Text>
									</Div>
								</Div>

								{(() => {
									const hasAnyActions = category.integrations.some(
										(i) =>
											i.links?.docs || i.links?.github || i.links?.internal,
									);
									return (
										<Table className="w-full table-fixed [&_th]:h-8 [&_td]:py-1.5">
											<TableHeader>
												<TableRow>
													<TableHead>Integration</TableHead>
													<TableHead className="hidden sm:table-cell w-[45%]">
														Description
													</TableHead>
													<TableHead>Status</TableHead>
													{hasAnyActions && (
														<TableHead className="hidden sm:table-cell text-right">
															Actions
														</TableHead>
													)}
												</TableRow>
											</TableHeader>
											<TableBody>
												{category.integrations.map((integration) => {
													const actions = {
														internal: integration.links?.internal,
														docs: integration.links?.docs,
														github: integration.links?.github,
													};
													const hasRowActions =
														actions.internal || actions.docs || actions.github;

													return (
														<TableRow key={integration.title}>
															<TableCell
																className={`${TYPOGRAPHY.FONT_WEIGHT.medium} min-w-0`}
															>
																<Div
																	variant="flex"
																	className="items-center gap-3"
																>
																	<Div className="text-primary shrink-0">
																		{integration.icon}
																	</Div>
																	<Div className="min-w-0">
																		<Span className="truncate">
																			{integration.title}
																		</Span>
																		<Text
																			variant="small"
																			className="mt-1 sm:hidden whitespace-normal break-words"
																		>
																			{integration.description}
																		</Text>
																		{hasRowActions && (
																			<Div className="mt-2 flex flex-wrap gap-1.5 sm:hidden">
																				{actions.internal && (
																					<ActionButton
																						className="p-1.5 min-w-0"
																						to={actions.internal}
																						ariaLabel="Open"
																					>
																						<SquareArrowOutUpRight className="h-3.5 w-3.5" />
																					</ActionButton>
																				)}
																				{actions.docs && (
																					<ActionButton
																						variant="outline"
																						className="p-1.5 min-w-0"
																						href={actions.docs}
																						external
																						ariaLabel="Documentation"
																					>
																						<FileText className="h-3.5 w-3.5" />
																					</ActionButton>
																				)}
																				{actions.github && (
																					<ActionButton
																						variant="outline"
																						className="p-1.5 min-w-0"
																						href={actions.github}
																						external
																						ariaLabel="GitHub Repository"
																					>
																						<Github className="h-3.5 w-3.5" />
																					</ActionButton>
																				)}
																			</Div>
																		)}
																	</Div>
																</Div>
															</TableCell>
															<TableCell
																className={`hidden sm:table-cell text-muted-foreground ${TYPOGRAPHY.COMBINATIONS.small} whitespace-normal break-words`}
															>
																{integration.description}
															</TableCell>
															<TableCell>
																<StatusBadge
																	status={integration.status}
																	className="px-1 py-0 !text-[14px] !leading-none"
																/>
															</TableCell>
															{hasAnyActions && (
																<TableCell className="hidden sm:table-cell text-right">
																	{hasRowActions ? (
																		<Div className="flex flex-wrap justify-end gap-1.5">
																			{actions.internal && (
																				<Tooltip delayDuration={200}>
																					<TooltipTrigger asChild>
																						<ActionButton
																							className="p-1.5 min-w-0"
																							to={actions.internal}
																							ariaLabel="Open"
																						>
																							<SquareArrowOutUpRight className="h-3.5 w-3.5" />
																						</ActionButton>
																					</TooltipTrigger>
																					<TooltipContent>Open</TooltipContent>
																				</Tooltip>
																			)}
																			{actions.docs && (
																				<Tooltip delayDuration={200}>
																					<TooltipTrigger asChild>
																						<ActionButton
																							variant="outline"
																							className="p-1.5 min-w-0"
																							href={actions.docs}
																							external
																							ariaLabel="Documentation"
																						>
																							<FileText className="h-3.5 w-3.5" />
																						</ActionButton>
																					</TooltipTrigger>
																					<TooltipContent>
																						Documentation
																					</TooltipContent>
																				</Tooltip>
																			)}
																			{actions.github && (
																				<Tooltip delayDuration={200}>
																					<TooltipTrigger asChild>
																						<ActionButton
																							variant="outline"
																							className="p-1.5 min-w-0"
																							href={actions.github}
																							external
																							ariaLabel="GitHub Repository"
																						>
																							<Github className="h-3.5 w-3.5" />
																						</ActionButton>
																					</TooltipTrigger>
																					<TooltipContent>
																						GitHub
																					</TooltipContent>
																				</Tooltip>
																			)}
																		</Div>
																	) : (
																		<Span className="text-muted-foreground">
																			—
																		</Span>
																	)}
																</TableCell>
															)}
														</TableRow>
													);
												})}
											</TableBody>
										</Table>
									);
								})()}
							</Div>
						),
					}))}
				/>
			</Section>

			{/* CTA Section */}
			<Card variant="hover" aria-label="Request custom integration">
				<CardContent centered>
					<Heading variant="section" className="mb-4">
						Need a Custom Integration?
					</Heading>
					<Text variant="lead" className="mb-6">
						SkillVector is open source and extensible. Build your own or request
						new integrations.
					</Text>
					<div className="flex gap-4 justify-center flex-wrap">
						<ActionButton
							variant="primary"
							href={SOCIAL_LINKS.github}
							external
							ariaLabel="View SkillVector on GitHub"
						>
							View on GitHub
						</ActionButton>
						<ActionButton
							variant="outline"
							href={EXTERNAL_LINKS.discussions}
							external
							ariaLabel="Request new integration"
						>
							Request Integration
						</ActionButton>
					</div>
				</CardContent>
			</Card>
		</PageTemplate>
	);
};
