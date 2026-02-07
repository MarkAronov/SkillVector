import { Info, Settings, Shield } from "lucide-react";
import type { CookieCategory } from "./CookiesPage.types";

export const cookieCategories: CookieCategory[] = [
	{
		icon: <Shield className="h-6 w-6" />,
		title: "Essential Cookies",
		description:
			"These cookies are necessary for the website to function and cannot be disabled.",
		cookies: [
			{
				name: "skillvector-theme",
				purpose: "Stores your theme preference (light/dark/system)",
				duration: "Persistent",
			},
			{
				name: "session_id",
				purpose: "Maintains your session state",
				duration: "Session",
			},
		],
	},
	{
		icon: <Settings className="h-6 w-6" />,
		title: "Functional Cookies",
		description:
			"These cookies enable personalized features and remember your preferences.",
		cookies: [
			{
				name: "search_history",
				purpose: "Stores recent search queries for quick access",
				duration: "30 days",
			},
			{
				name: "ui_preferences",
				purpose: "Remembers UI settings like collapsed sections",
				duration: "1 year",
			},
		],
	},
	{
		icon: <Info className="h-6 w-6" />,
		title: "Analytics Cookies",
		description:
			"Help us understand how visitors interact with our website to improve the user experience.",
		cookies: [
			{
				name: "analytics_id",
				purpose: "Anonymous usage analytics",
				duration: "2 years",
			},
		],
	},
];
