import { Link, useLocation } from "@tanstack/react-router";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";
import { SPACING, TYPOGRAPHY } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link as AtomLink } from "../2-atoms/Link";
import { List, ListItem } from "../2-atoms/List";
import { Text } from "../2-atoms/Text";

const footerSections = [
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
			{ to: "/changelog", label: "Changelog" },
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

const socialLinks = [
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

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [scrollOpacity, setScrollOpacity] = useState(0);
	const footerRef = useRef<HTMLElement | null>(null);
	const location = useLocation();

	useEffect(() => {
		let rafId: number;

		const handleScroll = () => {
			if (rafId) return;

			rafId = requestAnimationFrame(() => {
				if (!footerRef.current) {
					setScrollOpacity(0);
					rafId = 0;
					return;
				}

				const rect = footerRef.current.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const footerHeight = rect.height || 1;
				const footerTop = rect.top;

				// When footer top is below viewport bottom (footerTop >= windowHeight): not visible
				// When footer begins to enter, visibleAmount = windowHeight - footerTop
				const visibleAmount = Math.min(
					Math.max(windowHeight - footerTop, 0),
					footerHeight,
				);
				const opacity = Math.min(Math.max(visibleAmount / footerHeight, 0), 1);

				setScrollOpacity(opacity);
				rafId = 0;
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);
		handleScroll(); // Check initial state

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

	return (
		<>
			{/* Background tint overlay - fades in gradually when approaching bottom */}
			<Div
				className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-out bg-linear-to-t from-white/40 via-transparent to-transparent dark:from-black/40 dark:via-transparent dark:to-transparent"
				style={{ opacity: scrollOpacity }}
				aria-hidden="true"
			/>
			<footer ref={footerRef} className="mt-auto z-40 relative">
				<Div
					className={`max-w-5xl mx-auto ${SPACING.PADDING_X.responsive.xs} ${SPACING.PADDING_Y.responsive.xs}`}
				>
					<Div
						className={`grid grid-cols-2 lg:grid-cols-4 ${SPACING.GAP_RESPONSIVE.xl} justify-items-center`}
					>
						{footerSections.map((section) => (
							<Div
								key={section.title}
								className="space-y-2 lg:space-y-3 min-w-[140px]"
							>
								<Heading
									as="h3"
									className={`${TYPOGRAPHY.COMBINATIONS.footerHeading} text-foreground/90`}
								>
									{section.title}
								</Heading>
								<List
									className={`space-y-1.5 lg:space-y-2 ${TYPOGRAPHY.COMBINATIONS.footerLink}`}
								>
									{section.links.map((link) => (
										<ListItem key={link.label}>
											{"href" in link ? (
												<AtomLink
													href={(link as { href: string; label: string }).href}
													external
													className={`text-foreground/80 hover:text-foreground/95 transition-colors inline-flex items-center ${SPACING.GAP.xs}`}
												>
													{link.label}
													<ExternalLink className="h-3 w-3" />
												</AtomLink>
											) : (
												<Link
													to={link.to}
													className={`${(link.to ?? "").split("#")[0] === location.pathname ? "text-primary hover:text-primary/80" : "text-foreground/80 hover:text-foreground/95"} transition-colors`}
												>
													{link.label}
												</Link>
											)}
										</ListItem>
									))}
								</List>
							</Div>
						))}
					</Div>

					{/* Bottom section */}
					<Div
						className={`mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center ${SPACING.GAP_RESPONSIVE.md}`}
					>
						<Text
							className={`${TYPOGRAPHY.COMBINATIONS.footerCopyright} text-foreground/80`}
						>
							© {currentYear} {SITE_CONFIG.name}. All rights reserved.
						</Text>

						{/* Social Links */}
						<Div className={`flex items-center ${SPACING.GAP_RESPONSIVE.md}`}>
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return social.isInternal ? (
									<Link
										key={social.label}
										to={social.href}
										className="text-foreground/80 hover:text-foreground/95 transition-colors"
										aria-label={social.label}
									>
										<Icon className="h-4 w-4 lg:h-5 lg:w-5" />
									</Link>
								) : (
									<AtomLink
										key={social.label}
										href={social.href}
										external
										className="text-foreground/80 hover:text-foreground/95 transition-colors"
										aria-label={social.label}
									>
										<Icon className="h-4 w-4 lg:h-5 lg:w-5" />
									</AtomLink>
								);
							})}
						</Div>
					</Div>
				</Div>
			</footer>
		</>
	);
};
