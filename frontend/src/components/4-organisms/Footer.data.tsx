import { SOCIAL_LINKS } from "@/constants/site";
import { Github, Linkedin, Mail } from "lucide-react";

export const footerSections = [
	{
		title: "About",
		links: [
			{ to: "/about", label: "About Us" },
			{ to: "/how-it-works", label: "How It Works" },
		],
	},
	{
		title: "Product",
		links: [
			{ to: "/search", label: "Search" },
			{ to: "/features", label: "Features" },
			{ to: "/integrations", label: "Integrations" },
		],
	},
	{
		title: "Resources",
		links: [
			{ to: "/documentation", label: "Documentation" },
			{ to: "/support", label: "Support" },
			{ to: "/product-updates", label: "Product Updates" },
		],
	},
	{
		title: "Legal",
		links: [
			{ to: "/privacy", label: "Privacy Policy" },
			{ to: "/terms", label: "Terms of Service" },
			{ to: "/cookies", label: "Cookie Policy" },
		],
	},
];

export const socialLinks = [
	{
		href: SOCIAL_LINKS.github,
		icon: Github,
		label: "GitHub",
	},
	{
		href: SOCIAL_LINKS.linkedin,
		icon: Linkedin,
		label: "LinkedIn",
	},
	{
		href: "/support#contact",
		icon: Mail,
		label: "Email",
		isInternal: true,
	},
];
