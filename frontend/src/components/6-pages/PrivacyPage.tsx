import { Section } from "../2-atoms/Section";
import { Hero } from "../3-molecules/Hero";
import { CardGrid } from "../4-organisms/CardGrid";
import type { CardGridItem } from "../4-organisms/CardGrid.types";
import { PageTemplate } from "../5-templates/PageTemplate";

const privacySections: CardGridItem[] = [
	{
		title: "1. Introduction",
		content:
			'SkillVector ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our professional search platform. As an open-source project, transparency is core to our values.',
		centered: false,
	},
	{
		title: "2. Information We Collect",
		subsections: [
			{
				title: "2.1 Profile Data",
				content:
					"When you upload professional profiles, we process names, roles, skills, experience, and other professional information. This data is converted into vector embeddings and stored in our Qdrant database.",
			},
			{
				title: "2.2 Usage Data",
				content:
					"We collect information about how you interact with our service, including search queries, API requests, and system logs for debugging and performance optimization.",
			},
			{
				title: "2.3 Technical Data",
				content:
					"We may collect IP addresses, browser types, and device information for security and analytics purposes.",
			},
		],
		centered: false,
	},
	{
		title: "3. How We Use Your Information",
		items: [
			"To provide semantic search functionality and match professional profiles",
			"To improve our AI models and search algorithms",
			"To maintain and optimize system performance and security",
			"To communicate with you about service updates and support",
			"To comply with legal obligations and prevent misuse",
		],
		centered: false,
	},
	{
		title: "4. Data Storage and Security",
		content: "Your data is stored securely using industry-standard practices:",
		items: [
			"Profile data is vectorized and stored in Qdrant with encryption at rest",
			"All API communications are encrypted using HTTPS/TLS",
			"Access controls and authentication protect your data from unauthorized access",
			"Regular security audits and updates maintain system integrity",
		],
		centered: false,
	},
	{
		title: "5. Third-Party Services",
		content:
			"We integrate with third-party AI providers for embedding generation:",
		items: [
			"OpenAI, Anthropic, Google, HuggingFace, or Ollama (based on your configuration)",
			"Each provider has their own privacy policy and data handling practices",
			"Self-hosted deployments using Ollama keep all data on your infrastructure",
		],
		centered: false,
	},
	{
		title: "6. Your Rights",
		content: "You have the right to:",
		items: [
			"Access, update, or delete your profile data at any time",
			"Export your data in a portable format",
			"Opt out of data collection (except as required)",
			"Request information about how your data is used",
			"Lodge a complaint with data protection authorities",
		],
		centered: false,
	},
	{
		title: "7. Open Source Considerations",
		content:
			"SkillVector is open source under the MIT license. If you self-host SkillVector, you are responsible for compliance with applicable privacy laws and regulations. We provide the tools, but data handling practices are determined by each deployment.",
		centered: false,
	},
	{
		title: "8. Changes to This Policy",
		content:
			"We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Continued use of SkillVector after changes constitutes acceptance of the updated policy.",
		centered: false,
	},
];

export const PrivacyPage = () => {
	return (
		<PageTemplate title="Privacy Policy">
			{/* Hero Section */}
			<Hero
				title="Privacy"
				brand="Policy"
				subtitle="How we collect, use, and protect your information"
			/>

			{/* Privacy Sections */}
			<Section>
				<CardGrid items={privacySections} maxColumns={1} />
			</Section>
		</PageTemplate>
	);
};
