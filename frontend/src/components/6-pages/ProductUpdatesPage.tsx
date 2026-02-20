import { EXTERNAL_LINKS } from "@/constants/site";
import { useEffect, useMemo, useState } from "react";
import { Link } from "../2-atoms/Link";
import { Text } from "../2-atoms/Text";
import { ErrorMessage } from "../3-molecules/ErrorMessage";
import { Hero } from "../3-molecules/Hero";
import { LoadingState } from "../3-molecules/LoadingState";
import { ProductUpdatesOverview } from "../4-organisms/ProductUpdatesOverview";
import { PageTemplate } from "../5-templates/PageTemplate";
import type {
	GitHubBranch,
	GitHubCommit,
	GitHubContributor,
	GitHubRelease,
	GitHubRepoInfo,
	ParsedRelease,
	RepoStats,
} from "./ProductUpdatesPage.types";

/** GitHub API base for SkillVector repo */
const GITHUB_API = "https://api.github.com/repos/MarkAronov/SkillVector";

/** Fetch JSON from GitHub API with error handling */
const fetchGitHub = async <T,>(endpoint: string): Promise<T | null> => {
	try {
		const response = await fetch(`${GITHUB_API}${endpoint}`);
		if (!response.ok) return null;
		return (await response.json()) as T;
	} catch {
		return null;
	}
};

export const ProductUpdatesPage = () => {
	const [releases, setReleases] = useState<ParsedRelease[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Rich repository stats
	const [repoStats, setRepoStats] = useState<RepoStats>({
		repo: null,
		branches: [],
		contributors: [],
		recentCommits: [],
		totalCommits: 0,
		languages: {},
	});

	useEffect(() => {
		const fetchAllData = async () => {
			try {
				// Fetch releases and repo metadata in parallel
				const [
					releasesRes,
					repoInfo,
					branches,
					contributors,
					commits,
					languages,
				] = await Promise.all([
					fetchGitHub<GitHubRelease[]>("/releases"),
					fetchGitHub<GitHubRepoInfo>(""),
					fetchGitHub<GitHubBranch[]>("/branches?per_page=100"),
					fetchGitHub<GitHubContributor[]>("/contributors?per_page=20"),
					fetchGitHub<GitHubCommit[]>("/commits?per_page=10"),
					fetchGitHub<Record<string, number>>("/languages"),
				]);

				// Parse releases
				if (releasesRes) {
					const parsed: ParsedRelease[] = releasesRes
						.filter((r) => !r.draft)
						.map((release) => {
							// Parse body for bullet points
							const changes = release.body
								.split("\n")
								.filter((line) => {
									const trimmed = line.trim();
									return (
										trimmed.startsWith("-") ||
										trimmed.startsWith("*") ||
										trimmed.startsWith("•")
									);
								})
								.map((line) =>
									line
										.trim()
										.replace(/^[-*•]\s*/, "")
										.trim(),
								)
								.filter((line) => line.length > 0);

							return {
								version: release.tag_name.replace(/^v/, ""),
								date: release.published_at.split("T")[0],
								changes:
									changes.length > 0
										? changes
										: ["Release notes not available"],
								url: release.html_url,
								isPrerelease: release.prerelease,
							};
						});

					setReleases(parsed);
				}

				// Estimate total commits from contributor data
				const totalCommits = contributors
					? contributors.reduce((sum, c) => sum + c.contributions, 0)
					: 0;

				// Set repo stats
				setRepoStats({
					repo: repoInfo,
					branches: branches || [],
					contributors: contributors || [],
					recentCommits: commits || [],
					totalCommits,
					languages: languages || {},
				});
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		};

		fetchAllData();
	}, []);

	// Calculate statistics
	const stats = useMemo(() => {
		const totalReleases = releases.length;
		const prereleases = releases.filter((r) => r.isPrerelease).length;
		const stableReleases = totalReleases - prereleases;
		const latestVersion = releases[0]?.version || "N/A";

		return {
			totalReleases,
			prereleases,
			stableReleases,
			latestVersion,
		};
	}, [releases]);

	return (
		<PageTemplate title="Product Updates">
			{/* Hero Section */}
			<Hero
				title="Product "
				brand="Updates"
				subtitle="Track the evolution of SkillVector with detailed release history and comprehensive change logs"
			/>

			{/* Loading State */}
			{loading && <LoadingState message="Loading releases..." />}

			{/* Error State */}
			{error && (
				<ErrorMessage
					message={`Failed to load releases: ${error}`}
					className="mb-6"
				>
					<Text variant="small" className="mt-2">
						You can view releases directly on{" "}
						<Link href={EXTERNAL_LINKS.releases} external variant="primary">
							GitHub
						</Link>
					</Text>
				</ErrorMessage>
			)}

			{/* Main Content */}
			{!loading && !error && (
				<>
					{/* Repository Overview Panel — Extracted to organism for proper atomic design structure */}
					<ProductUpdatesOverview
						stats={stats}
						repoStats={repoStats}
						releases={releases}
					/>
				</>
			)}
		</PageTemplate>
	);
};
