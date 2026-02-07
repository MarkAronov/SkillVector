import type { CardGridItem } from "../4-organisms/CardGrid.types";

export const termsSections: CardGridItem[] = [
	{
		title: "1. Acceptance of Terms",
		content:
			"By accessing or using SkillVector, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.",
		centered: false,
	},
	{
		title: "2. Use License",
		content:
			"SkillVector is open-source software licensed under the MIT License. You are granted permission to:",
		items: [
			"Use, copy, modify, and distribute the software",
			"Use the software for commercial purposes",
			"Sublicense and sell copies of the software, subject to MIT License terms",
		],
		centered: false,
	},
	{
		title: "3. Disclaimer",
		content:
			'The software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to:',
		items: [
			"Warranties of merchantability or fitness for purpose",
			"Accuracy or reliability of search results",
			"Continuous, uninterrupted, or error-free operation",
		],
		centered: false,
	},
	{
		title: "4. Acceptable Use",
		content: "You agree not to:",
		items: [
			"Upload malicious code, viruses, or harmful content",
			"Violate any applicable laws or regulations",
			"Interfere with the proper functioning of the service",
			"Attempt unauthorized access to systems or data",
			"Upload personal data without proper consent and legal basis",
		],
		centered: false,
	},
	{
		title: "5. Data Responsibility",
		content:
			"You are responsible for ensuring that any profile data you upload complies with applicable privacy laws (GDPR, CCPA, etc.). You must have appropriate consent and legal basis for processing personal information through SkillVector.",
		centered: false,
	},
	{
		title: "6. Third-Party Services",
		content:
			"SkillVector integrates with third-party AI providers (OpenAI, Anthropic, Google, etc.). Your use of these services is subject to their respective terms and conditions. We are not responsible for third-party service availability or actions.",
		centered: false,
	},
	{
		title: "7. Limitation of Liability",
		content:
			"In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of SkillVector, including but not limited to data loss, business interruption, or AI model inaccuracies.",
		centered: false,
	},
	{
		title: "8. Modifications",
		content:
			"We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of SkillVector after changes constitutes acceptance of the modified terms.",
		centered: false,
	},
	{
		title: "9. Governing Law",
		content:
			"These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved in accordance with the MIT License terms.",
		centered: false,
	},
];
