import { BarChart3, Info, Lock, Settings, Shield, Zap } from "lucide-react";
import type { CookieCategory } from "./CookiesPage.types";

export const cookieCategories: CookieCategory[] = [
	// Essential cookies — required for core functionality, cannot be disabled
	{
		icon: <Shield className="h-6 w-6" />,
		title: "Strictly Necessary Cookies",
		description:
			"These cookies are essential for the operation of the Service and cannot be disabled in our systems. They are set in response to actions you take that amount to a request for services, such as setting your privacy preferences, logging in, or maintaining your session. Without these cookies, core functionality of SkillVector — including authentication, session management, and security protections — would not be available. These cookies do not store any personally identifiable information and are exempt from consent requirements under the ePrivacy Directive (2002/58/EC) and GDPR.",
		cookies: [
			{
				name: "skillvector-theme",
				purpose:
					"Stores your display theme preference (light, dark, or system) to maintain a consistent visual experience across sessions and page navigations",
				duration: "1 year",
			},
			{
				name: "session_id",
				purpose:
					"Maintains your authenticated session state and associates your browser with a server-side session. This cookie is encrypted and includes a CSRF token to prevent cross-site request forgery attacks",
				duration: "Session (deleted when browser closes)",
			},
			{
				name: "__csrf_token",
				purpose:
					"Cross-Site Request Forgery (CSRF) protection token — validates that form submissions and API requests originate from the authentic SkillVector application interface",
				duration: "Session",
			},
			{
				name: "cookie_consent",
				purpose:
					"Records your cookie consent preferences so we do not repeatedly prompt you with the cookie consent banner and can honor your choices across visits",
				duration: "1 year",
			},
		],
	},

	// Functional cookies — enhanced features and personalization
	{
		icon: <Settings className="h-6 w-6" />,
		title: "Functional Cookies",
		description:
			"These cookies enable enhanced functionality and personalization features that are not strictly necessary but significantly improve your experience with the Service. They allow the platform to remember your preferences, settings, and previous interactions so you do not have to reconfigure them on each visit. If you do not allow these cookies, some or all of these features may not function correctly. You may disable these cookies through your browser settings or the cookie consent manager, but doing so may degrade your experience.",
		cookies: [
			{
				name: "search_history",
				purpose:
					"Stores your recent search queries locally to provide quick access to previous searches and enable autocomplete suggestions. Data is stored client-side only and is never transmitted to our servers",
				duration: "30 days",
			},
			{
				name: "ui_preferences",
				purpose:
					"Remembers your UI configuration choices, including sidebar collapse state, preferred results layout (grid or list view), table column widths, and pagination size preferences",
				duration: "1 year",
			},
			{
				name: "locale_preference",
				purpose:
					"Stores your language and regional formatting preferences (date format, number format) to deliver localized content and formatting across the application",
				duration: "1 year",
			},
			{
				name: "api_config_cache",
				purpose:
					"Caches your API configuration settings (selected AI provider, model preferences, endpoint URLs) in an encrypted local storage entry to avoid re-entering configuration on each visit",
				duration: "90 days",
			},
		],
	},

	// Performance cookies — system performance and diagnostics
	{
		icon: <Zap className="h-6 w-6" />,
		title: "Performance Cookies",
		description:
			"These cookies collect information about how you use the Service — which pages you visit most often, how long you spend on each page, and whether you encounter any error messages. All information collected by these cookies is aggregated and therefore anonymous. They help us understand how the Service performs under real-world conditions, identify bottlenecks, and prioritize performance optimizations. These cookies do not collect information that individually identifies you.",
		cookies: [
			{
				name: "perf_metrics",
				purpose:
					"Collects anonymous performance metrics including page load times, API response latencies, time-to-first-byte (TTFB), largest contentful paint (LCP), and cumulative layout shift (CLS) measurements to help us identify and resolve performance issues",
				duration: "Session",
			},
			{
				name: "error_tracking_id",
				purpose:
					"Assigns a random, anonymous identifier for error tracking and diagnostics. When an error occurs, this ID links the error report to the session context (but not to your identity) so our engineering team can reproduce and debug the issue",
				duration: "7 days",
			},
		],
	},

	// Analytics cookies — usage insights and improvement
	{
		icon: <BarChart3 className="h-6 w-6" />,
		title: "Analytics Cookies",
		description:
			"Analytics cookies help us understand how visitors interact with the Service by collecting and reporting information anonymously. This data enables us to measure traffic patterns, identify the most popular features, understand navigation flows, and make data-driven decisions to improve the user experience. We use privacy-focused analytics that do not track individuals across websites, do not use fingerprinting, and fully comply with GDPR and ePrivacy requirements. You can opt out of analytics cookies at any time without affecting the core functionality of the Service.",
		cookies: [
			{
				name: "analytics_id",
				purpose:
					"Assigns a pseudonymous, randomly generated identifier for anonymous usage analytics. Used to distinguish unique visitors and calculate aggregate metrics such as total page views, unique sessions, and feature adoption rates. This ID cannot be used to identify you personally",
				duration: "2 years",
			},
			{
				name: "analytics_session",
				purpose:
					"Groups page views and interactions into a single browsing session for analytics purposes. A new session is started after 30 minutes of inactivity. Used to calculate session duration, pages per session, and bounce rate",
				duration: "30 minutes (rolling)",
			},
			{
				name: "analytics_referrer",
				purpose:
					"Records the website or campaign that referred you to SkillVector on your first visit. Used to understand which channels drive traffic to the Service and measure the effectiveness of outreach efforts. No personally identifiable information is stored",
				duration: "30 days",
			},
		],
	},

	// Security cookies — protection and access control
	{
		icon: <Lock className="h-6 w-6" />,
		title: "Security Cookies",
		description:
			"These cookies are used to enhance the security of the Service and protect against unauthorized access, fraudulent activity, and abuse. They support authentication workflows, rate limiting, and bot detection mechanisms. Security cookies are considered strictly necessary for the safe operation of the platform and cannot be disabled without compromising the security posture of your account.",
		cookies: [
			{
				name: "rate_limit_token",
				purpose:
					"Implements client-side rate limiting to prevent excessive API requests and protect the Service from denial-of-service and brute-force attacks. Tracks request counts within a sliding time window",
				duration: "1 hour (rolling)",
			},
			{
				name: "device_fingerprint",
				purpose:
					"Stores a hashed device fingerprint (derived from non-identifying browser characteristics) used to detect suspicious login attempts from unrecognized devices and trigger step-up authentication when necessary",
				duration: "90 days",
			},
			{
				name: "auth_remember",
				purpose:
					"When you select 'Remember this device' during login, this secure, encrypted cookie enables persistent authentication so you remain logged in across browser sessions. You can revoke this at any time from your account security settings",
				duration: "30 days",
			},
		],
	},

	// Third-party cookies — external service integrations
	{
		icon: <Info className="h-6 w-6" />,
		title: "Third-Party Cookies",
		description:
			"Some features of the Service may involve cookies set by third-party services that we integrate with. These cookies are governed by the respective third party's privacy and cookie policies, not by this Cookie Policy. We do not control the information collected by third-party cookies. We integrate with the following categories of third-party services, each of which may set cookies on your device:",
		cookies: [
			{
				name: "ai_provider_session",
				purpose:
					"Set by integrated AI providers (OpenAI, Anthropic, Google AI, etc.) when you interact with their APIs through SkillVector. These cookies are subject to the respective provider's cookie policy. Not applicable to self-hosted deployments using Ollama or other local models",
				duration: "Varies by provider",
			},
			{
				name: "cdn_cache_token",
				purpose:
					"Set by our content delivery network (CDN) provider to optimize the delivery of static assets (JavaScript bundles, CSS files, fonts, images) and reduce page load times by routing requests to the nearest edge server",
				duration: "Session",
			},
		],
	},
];
