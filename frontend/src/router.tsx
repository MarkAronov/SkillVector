import {
	createRootRoute,
	createRoute,
	createRouter,
	useLocation,
	useNavigate,
} from "@tanstack/react-router";
import { lazy, useEffect } from "react";
import { SearchPage } from "./components/6-pages/SearchPage";

// Lazy load pages for code splitting
// SearchPage is eagerly loaded since it's the main landing page
const AboutPage = lazy(() =>
	import("./components/6-pages/AboutUsPage").then((m) => ({
		default: m.AboutPage,
	})),
);

const ChangelogPage = lazy(() =>
	import("./components/6-pages/ChangelogPage").then((m) => ({
		default: m.ChangelogPage,
	})),
);

const DocumentationPage = lazy(() =>
	import("./components/6-pages/DocumentationPage").then((m) => ({
		default: m.DocumentationPage,
	})),
);
const CookiesPage = lazy(() =>
	import("./components/6-pages/CookiesPage").then((m) => ({
		default: m.CookiesPage,
	})),
);
const FeaturesPage = lazy(() =>
	import("./components/6-pages/FeaturesPage").then((m) => ({
		default: m.FeaturesPage,
	})),
);

const HowItWorksPage = lazy(() =>
	import("./components/6-pages/HowItWorksPage").then((m) => ({
		default: m.HowItWorksPage,
	})),
);
const IntegrationsPage = lazy(() =>
	import("./components/6-pages/IntegrationsPage").then((m) => ({
		default: m.IntegrationsPage,
	})),
);
const PrivacyPage = lazy(() =>
	import("./components/6-pages/PrivacyPage").then((m) => ({
		default: m.PrivacyPage,
	})),
);
const SupportPage = lazy(() =>
	import("./components/6-pages/SupportPage").then((m) => ({
		default: m.SupportPage,
	})),
);
const TermsPage = lazy(() =>
	import("./components/6-pages/TermsOfServicePage").then((m) => ({
		default: m.TermsPage,
	})),
);

// Hidden route - browse all people
const BrowsePage = lazy(() =>
	import("./components/6-pages/BrowsePage").then((m) => ({
		default: m.BrowsePage,
	})),
);

// Root route
const rootRoute = createRootRoute();

// Define routes
const RedirectToSearch = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		navigate({
			to: "/search",
			search: location.search as Record<string, unknown>,
		});
	}, [navigate, location.search]);
	return null;
};

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: RedirectToSearch,
});

const searchRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/search",
	component: SearchPage,
	validateSearch: (search: Record<string, unknown>): { q?: string } => ({
		q: (search.q as string) || undefined,
	}),
});

const featuresRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/features",
	component: FeaturesPage,
});

const documentationRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/documentation",
	component: DocumentationPage,
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: AboutPage,
});

const howItWorksRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/how-it-works",
	component: HowItWorksPage,
});

const integrationsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/integrations",
	component: IntegrationsPage,
});

const supportRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/support",
	component: SupportPage,
});

const changelogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/changelog",
	component: ChangelogPage,
});

const privacyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/privacy",
	component: PrivacyPage,
});

const termsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/terms",
	component: TermsPage,
});

const cookiesRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/cookies",
	component: CookiesPage,
});

// Hidden route - browse all people (not in nav)
const browseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/people",
	component: BrowsePage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
	indexRoute,
	searchRoute,
	featuresRoute,
	documentationRoute,
	aboutRoute,
	howItWorksRoute,
	integrationsRoute,
	supportRoute,
	changelogRoute,
	privacyRoute,
	termsRoute,
	cookiesRoute,
	browseRoute,
]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
