import { Cookie, Info, Settings, Shield } from "lucide-react";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { List, ListItem } from "../2-atoms/List";
import { Section } from "../2-atoms/Section";
import { Span } from "../2-atoms/Span";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../2-atoms/Table";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "../3-molecules/Card";
import { Hero } from "../3-molecules/Hero";
import { CardGrid } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";
import type { CookieCategory } from "./CookiesPage.types";

const cookieCategories: CookieCategory[] = [
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

export const CookiesPage = () => {
	return (
		<PageTemplate title="Cookie Policy">
			{/* Hero Section */}
			<Hero
				title="Cookie"
				brand="Policy"
				subtitle="Learn how SkillVector uses cookies to enhance your experience"
			/>

			{/* Introduction */}
			<Section>
				<CardGrid maxColumns={1}>
					<Card variant="hover" aria-label="Introduction" fill>
						<CardContent>
							<Div variant="flex" className="mb-4">
								<Cookie className="h-6 w-6 text-primary" />
								<Heading variant="subsection">What Are Cookies?</Heading>
							</Div>
							<Text variant="muted">
								Cookies are small text files that are stored on your device when
								you visit a website. They help websites remember your
								preferences, understand how you use the site, and provide a
								better user experience. SkillVector uses cookies sparingly and
								only for essential functionality.
							</Text>
						</CardContent>
					</Card>
				</CardGrid>
			</Section>

			{/* Cookie Categories */}
			<Section>
				<CardGrid maxColumns={1} gap="lg">
					{cookieCategories.map((category) => (
						<Card
							variant="hover"
							key={category.title}
							aria-label={category.title}
							fill
						>
							<CardContent>
								<Div variant="flex" className="mb-4">
									<Div className="text-primary">{category.icon}</Div>
									<Heading variant="subsection">{category.title}</Heading>
								</Div>
								<Text variant="muted" className="mb-6">
									{category.description}
								</Text>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Cookie Name</TableHead>
											<TableHead>Purpose</TableHead>
											<TableHead>Duration</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{category.cookies.map((cookie) => (
											<TableRow key={cookie.name}>
												<TableCell variant="code">{cookie.name}</TableCell>
												<TableCell variant="muted">{cookie.purpose}</TableCell>
												<TableCell variant="muted">{cookie.duration}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					))}
				</CardGrid>
			</Section>

			{/* Managing Cookies */}
			<Section>
				<CardGrid maxColumns={1}>
					<Card variant="hover" aria-label="Managing cookies" fill>
						<CardContent>
							<Heading variant="subsection" className="mb-4">
								Managing Your Cookie Preferences
							</Heading>
							<Div variant="stack">
								<Text variant="muted">
									Most web browsers allow you to control cookies through their
									settings. You can usually find these options in the "Privacy"
									or "Security" section of your browser's settings menu.
								</Text>
								<Text variant="muted">
									Please note that disabling essential cookies may affect the
									functionality of SkillVector. Some features may not work as
									expected without certain cookies.
								</Text>
								<Heading as="h3" variant="card" className="mt-6 mb-2">
									How to Manage Cookies in Popular Browsers:
								</Heading>
								<List variant="disc">
									<ListItem>
										<Span>
											<strong>Chrome:</strong> Settings → Privacy and security →
											Cookies
										</Span>
									</ListItem>
									<ListItem>
										<Span>
											<strong>Firefox:</strong> Settings → Privacy & Security →
											Cookies
										</Span>
									</ListItem>
									<ListItem>
										<Span>
											<strong>Safari:</strong> Preferences → Privacy → Manage
											Website Data
										</Span>
									</ListItem>
									<ListItem>
										<Span>
											<strong>Edge:</strong> Settings → Cookies and site
											permissions
										</Span>
									</ListItem>
								</List>
							</Div>
						</CardContent>
					</Card>
				</CardGrid>
			</Section>
		</PageTemplate>
	);
};
