import { Book, Github, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { CONTACT, EXTERNAL_LINKS } from "@/constants/site";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { ActionButtononButton } from "../3-moActionButtonles/ActionButton";
import { Hero"../3-molecules/Hero";Hero
import { CardGrid, type CardGridItem } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";

type SupportOption = {
	icon: ReactNode;
	title: string;
	description: string;
	linkText: string;
	href: string;
	isInternal: boolean;
};

const supportOptions: SupportOption[] = [
	{
		icon: <Book className="h-6 w-6" />,
		title: "Documentation",
		description: "Browse our comprehensive guides and API reference",
		linkText: "View Docs",
		href: "/api",
		isInternal: true,
	},
	{
		icon: <Github className="h-6 w-6" />,
		title: "GitHub Issues",
		description: "Report bugs or request features on GitHub",
		linkText: "Open Issue",
		href: EXTERNAL_LINKS.issues,
		isInternal: false,
	},
	{
		icon: <MessageCircle className="h-6 w-6" />,
		title: "Community",
		description: "Join our community discussions and get help from other users",
		linkText: "Join Discussion",
		href: EXTERNAL_LINKS.discussions,
		isInternal: false,
	},
	{
		icon: <Mail className="h-6 w-6" />,
		title: "Email Support",
		description: "Contact us directly for personalized assistance",
		linkText: "Send Email",
		href: `mailto:${CONTACT.email}`,
		isInternal: false,
	},
];

const faqs: CardGridItem[] = [
	{
		title: "What file formats are supported for profile uploads?",
		description:
			"SkillVector supports CSV, JSON, and plain text (TXT) formats. Each format has specific requirements for field naming and structure, which you can find in our API documentation.",
		centered: false,
	},
	{
		title: "Which AI providers can I use for embeddings?",
		description:
			"We support OpenAI, Anthropic (Claude), Google Gemini, HuggingFace models, and Ollama for local deployments. You can configure your preferred provider via environment variables.",
		centered: false,
	},
	{
		title: "How does semantic search differ from keyword search?",
		description:
			'Semantic search understands the meaning and context of your query, not just exact word matches. For example, searching for "machine learning expert" will also find profiles mentioning "AI researcher" or "deep learning engineer" because these concepts are semantically related.',
		centered: false,
	},
	{
		title: "Is SkillVector open source?",
		description:
			"Yes! SkillVector is open source under the MIT license. You can view the source code, contribute, and deploy your own instance on GitHub.",
		centered: false,
	},
	{
		title: "How do I deploy SkillVector in production?",
		description:
			"We provide Docker support and deployment guides for various platforms. Check our documentation for detailed setup instructions, including Qdrant configuration and environment variable setup.",
		centered: false,
	},
];

export const SupportPage = () => {
	return (
		<PageTemplate title="Support">
			{/* Hero Section */}
			<Hero
				title="Support"
				brand="Center"
				subtitle="Get help with SkillVector and find answers to common questions"
			/>

			{/* Support Options */}
			<Section>
				<CardGrid
					items={supportOptions.map((opt) => ({
						id: opt.title,
						icon: opt.icon,
						title: opt.title,
						description: opt.description,
						centered: true,
						customContent: (
							<Div className="flex flex-col h-full text-center">
								<Div>
									<Div className="mb-4 text-primary flex justify-center">
										{opt.icon}
									</Div>
									<Heading variant="subsection" className="mb-2">
										{opt.title}
									</Heading>
									<Text className="mb-4">{opt.description}</Text>
								</Div>
								<Div className="mt-auto">
									{opt.isInternal ? (
										<ActionButton to={opt.href} aria-label={opt.linkText}>
											{opt.linkText}
										</ActionButton>
									) : (
										<ActionButton
											href={opt.href}
											external={!opt.href.startsWith("mailto:")}
											aria-label={opt.linkText}
										>
											{opt.linkText}
										</ActionButton>
									)}
								</Div>
							</Div>
						),
					}))}
					maxColumns={2}
					gap="lg"
				/>
			</Section>

			{/* FAQ Section */}
			<Section>
				<Heading variant="section" className="mb-8 text-center">
					Frequently Asked Questions
				</Heading>
				<CardGrid items={faqs} maxColumns={1} />
			</Section>

			{/* CTA Section */}
			<Section>
				<CardGrid
					items={[
						{
							title: "Still Need Help?",
							centered: false,
							customContent: (
								<>
									<Heading variant="section" className="mb-4">
										Still Need Help?
									</Heading>
									<Text variant="lead" className="mb-6">
										Our team is ready to assist you with any questions or
										issues.
									</Text>
									<ActionButton
										href={`mailto:${CONTACT.email}`}
										aria-label="Contact our support team"
									>
										Contact Support
									</ActionButton>
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
