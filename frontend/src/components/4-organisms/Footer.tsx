import { Link, useLocation } from "@tanstack/react-router";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";

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
			<div
				className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-out bg-linear-to-t from-white/40 via-transparent to-transparent dark:from-black/40 dark:via-transparent dark:to-transparent"
				style={{ opacity: scrollOpacity }}
				aria-hidden="true"
			/>
			<footer ref={footerRef} className="mt-auto z-40 relative">
				<div className="max-w-5xl mx-auto px-3 lg:px-4 py-6 lg:py-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
						{footerSections.map((section) => (
							<div
								key={section.title}
								className="space-y-2 lg:space-y-3 min-w-[140px]"
							>
								<h3 className="text-xs lg:text-sm font-semibold text-foreground/90">
									{section.title}
								</h3>
								<ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm">
									{section.links.map((link) => (
										<li key={link.label}>
											{"href" in link ? (
												<a
													href={(link as { href: string; label: string }).href}
													target="_blank"
													rel="noopener noreferrer"
													className="text-foreground/80 hover:text-foreground/95 transition-colors inline-flex items-center gap-1"
												>
													{link.label}
													<ExternalLink className="h-3 w-3" />
												</a>
											) : (
												<Link
													to={link.to}
													className={`${(link.to ?? "").split("#")[0] === location.pathname ? "text-primary hover:text-primary/80" : "text-foreground/80 hover:text-foreground/95"} transition-colors`}
												>
													{link.label}
												</Link>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Bottom section */}
					<div className="mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-4">
						<p className="text-xs lg:text-sm text-foreground/80">
							© {currentYear} {SITE_CONFIG.name}. All rights reserved.
						</p>

						{/* Social Links */}
						<div className="flex items-center gap-3 lg:gap-4">
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
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-foreground/80 hover:text-foreground/95 transition-colors"
										aria-label={social.label}
									>
										<Icon className="h-4 w-4 lg:h-5 lg:w-5" />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
