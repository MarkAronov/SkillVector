import { Monitor, Moon, Sun } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/site";

export const navigationItems = [
	{ to: "/search", label: "Search" },
	{ to: "/features", label: "Features" },
	{ to: "/documentation", label: "Documentation" },
	{ href: SOCIAL_LINKS.github, label: "GitHub", external: true },
];

export const themeIcons = {
	system: Monitor,
	light: Sun,
	dark: Moon,
};

export const themeLabels = {
	system: "System Theme",
	light: "Light Theme",
	dark: "Dark Theme",
};
