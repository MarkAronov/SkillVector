import { Book, Github, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { type ChangeEvent, type FormEvent, useId, useState } from "react";
import { EXTERNAL_LINKS, SITE_CONFIG } from "@/constants/site";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Input } from "../2-atoms/Input";
import { Label } from "../2-atoms/Label";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { Textarea } from "../2-atoms/Textarea";
import { ActionButton } from "../3-molecules/ActionButton";
import { Hero } from "../3-molecules/Hero";
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
		href: "/documentation",
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
		linkText: "Contact Us",
		href: "/support#contact",
		isInternal: true,
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
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus("sending");
		setErrorMessage("");

		try {
			const response = await fetch(`${SITE_CONFIG.apiBaseUrl}/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus("success");
				setFormData({ name: "", email: "", message: "" });
			} else {
				const error = await response.json();
				setStatus("error");
				setErrorMessage(error.error || "Failed to send message");
			}
		} catch (_error) {
			setStatus("error");
			setErrorMessage("Network error. Please try again.");
		}
	};

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
									<Text variant="body" className="mb-4">
										{opt.description}
									</Text>
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

			{/* Contact Form Section */}
			<Section id="contact">
				<Heading variant="section" className="mb-4 text-center">
					Get in Touch
				</Heading>
				<Text variant="lead" className="text-center mb-8 text-muted-foreground">
					Have a question or need assistance? Send us a message and we'll
					respond as soon as possible.
				</Text>
				<Div className="max-w-2xl mx-auto">
					<CardGrid
						items={[
							{
								title: "",
								centered: false,
								customContent: (
									<form onSubmit={handleSubmit} className="space-y-6">
										<Div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<Div className="space-y-2">
												<Label htmlFor={nameId} className="font-medium">
													Name <span className="text-destructive">*</span>
												</Label>
												<Input
													type="text"
													id={nameId}
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													required
													placeholder="John Doe"
													className="h-11"
												/>
											</Div>
											<Div className="space-y-2">
												<Label htmlFor={emailId} className="font-medium">
													Email <span className="text-destructive">*</span>
												</Label>
												<Input
													type="email"
													id={emailId}
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													required
													placeholder="john@example.com"
													className="h-11"
												/>
											</Div>
										</Div>
										<Div className="space-y-2">
											<Label htmlFor={messageId} className="font-medium">
												Message <span className="text-destructive">*</span>
											</Label>
											<Textarea
												id={messageId}
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												required
												rows={6}
												placeholder="Tell us how we can help you..."
												className="resize-none"
											/>
										</Div>
										{status === "error" && (
											<Div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
												<Text
													variant="small"
													className="text-destructive font-medium"
												>
													{errorMessage}
												</Text>
											</Div>
										)}
										{status === "success" && (
											<Div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
												<Text
													variant="small"
													className="text-green-600 dark:text-green-400 font-medium"
												>
													✓ Message sent successfully! We'll get back to you
													soon.
												</Text>
											</Div>
										)}
										<Div className="flex justify-end">
											<Button
												type="submit"
												disabled={status === "sending"}
												aria-label="Send Message"
												className="min-w-[150px]"
											>
												{status === "sending" ? (
													<>
														<span className="inline-block animate-spin mr-2">
															⏳
														</span>
														Sending...
													</>
												) : (
													"Send Message"
												)}
											</Button>
										</Div>
									</form>
								),
							},
						]}
						maxColumns={1}
					/>
				</Div>
			</Section>
		</PageTemplate>
	);
};
