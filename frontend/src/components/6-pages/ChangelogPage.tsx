import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { EXTERNAL_LINKS } from "@/constants/site";
import {
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Filter,
	GitBranch,
	GitCommit,
	Package,
	Search,
	SlidersHorizontal,
	Tag,
	TrendingUp,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { TYPOGRAPHY } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { Section } from "../2-atoms/Section";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "../3-molecules/Card";
import { ErrorMessage } from "../3-molecules/ErrorMessage";
import { FilterPanel } from "../3-molecules/FilterPanel";
import { Hero } from "../3-molecules/Hero";
import { LoadingState } from "../3-molecules/LoadingState";
import { ReleaseCard } from "../3-molecules/ReleaseCard";
import { StatCard } from "../3-molecules/StatCard";
import { PageTemplate } from "../5-templates/PageTemplate";
import type {
	GitHubRelease,
	ParsedRelease,
	ReleaseFilter,
	SortOrder,
} from "./ChangelogPage.types";

const RELEASES_PER_PAGE = 10;

export const ChangelogPage = () => {
	const [releases, setReleases] = useState<ParsedRelease[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [filter, setFilter] = useState<ReleaseFilter>("all");
	const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

	useEffect(() => {
		const fetchReleases = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/repos/MarkAronov/SkillVector/releases",
				);
				if (!response.ok) {
					throw new Error("Failed to fetch releases");
				}
				const data = (await response.json()) as GitHubRelease[];

				// Parse releases
				const parsed: ParsedRelease[] = data
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
								changes.length > 0 ? changes : ["Release notes not available"],
							url: release.html_url,
							isPrerelease: release.prerelease,
						};
					});

				setReleases(parsed);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		};

		fetchReleases();
	}, []);

	// Filter releases based on search query
	const filteredReleases = useMemo(() => {
		let result = releases;

		// Apply filter
		if (filter === "stable") {
			result = result.filter((r) => !r.isPrerelease);
		} else if (filter === "prerelease") {
			result = result.filter((r) => r.isPrerelease);
		}

		// Apply search
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(release) =>
					release.version.toLowerCase().includes(query) ||
					release.changes.some((change) =>
						change.toLowerCase().includes(query),
					),
			);
		}

		// Apply sort
		if (sortOrder === "oldest") {
			result = [...result].reverse();
		}

		return result;
	}, [releases, searchQuery, filter, sortOrder]);

	// Calculate pagination
	const totalPages = Math.ceil(filteredReleases.length / RELEASES_PER_PAGE);
	const startIndex = (currentPage - 1) * RELEASES_PER_PAGE;
	const endIndex = startIndex + RELEASES_PER_PAGE;
	const currentReleases = filteredReleases.slice(startIndex, endIndex);

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

	// Reset to page 1 when search query changes
	useEffect(() => {
		setCurrentPage(1);
	}, []);

	const goToPage = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<PageTemplate title="Changelog">
			{/* Hero Section */}
			<Hero
				title="Version"
				brand="Changelog"
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
					{/* Combined Overview Card */}
					<Section>
						<Card className="overflow-hidden">
							<CardContent className="p-0">
								{/* Header Section */}
								<FilterPanel
									icon={<GitBranch className="h-6 w-6 text-primary" />}
									title="Release Overview"
									description="Follow our GitHub repository for the latest updates, releases, and contribute to the project"
									primaryAction={{
										label: "GitHub Repository",
										href: EXTERNAL_LINKS.documentation,
										icon: <ExternalLink className="h-4 w-4" />,
									}}
									secondaryAction={{
										label: "View All Releases",
										href: EXTERNAL_LINKS.releases,
										icon: <Package className="h-4 w-4" />,
									}}
								/>
								<Div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 gap-6">
									<StatCard
										icon={Tag}
										iconColor="text-primary"
										bgColor="bg-primary/10"
										label="Latest Version"
										value={`v${stats.latestVersion}`}
										valueColor="text-primary"
									/>
									<StatCard
										icon={Package}
										iconColor="text-blue-500"
										bgColor="bg-blue-500/10"
										label="Total Releases"
										value={stats.totalReleases}
										valueColor="text-blue-500"
									/>
									<StatCard
										icon={TrendingUp}
										iconColor="text-green-500"
										bgColor="bg-green-500/10"
										label="Stable Releases"
										value={stats.stableReleases}
										valueColor="text-green-500"
									/>
									<StatCard
										icon={GitCommit}
										iconColor="text-amber-500"
										bgColor="bg-amber-500/10"
										label="Pre-releases"
										value={stats.prereleases}
										valueColor="text-amber-500"
									/>
								</Div>
							</CardContent>
						</Card>
					</Section>

					{/* Filters and Search */}
					<Section>
						<Card>
							<FilterPanel
								variant="compact"
								search={{
									value: searchQuery,
									onChange: setSearchQuery,
									placeholder: "Search releases by version or changes...",
									icon: <Search className="h-5 w-5" />,
								}}
								filters={[
									{
										label: "Filter",
										value: "type",
										icon: <Filter className="h-4 w-4" />,
										options: [
											{ value: "all", label: "All Releases" },
											{ value: "stable", label: "Stable Only" },
											{ value: "prerelease", label: "Pre-releases" },
										],
									},
									{
										label: "Sort",
										value: "sort",
										icon: <SlidersHorizontal className="h-4 w-4" />,
										options: [
											{ value: "newest", label: "Newest First" },
											{ value: "oldest", label: "Oldest First" },
										],
									},
								]}
								filterValues={{
									type: filter,
									sort: sortOrder,
								}}
								onFilterChange={(filterId, value) => {
									if (filterId === "type") {
										setFilter(value as ReleaseFilter);
									} else if (filterId === "sort") {
										setSortOrder(value as SortOrder);
									}
								}}
								activeFilters={[
									...(searchQuery
										? [
											{
												id: "search",
												type: "search",
												value: searchQuery,
												label: `"${searchQuery}"`,
											},
										]
										: []),
									...(filter !== "all"
										? [
											{
												id: "type",
												type: "type",
												value: filter,
												label:
													filter === "stable" ? "Stable" : "Pre-releases",
											},
										]
										: []),
									...(sortOrder !== "newest"
										? [
											{
												id: "sort",
												type: "sort",
												value: sortOrder,
												label: "Oldest First",
											},
										]
										: []),
								]}
								onRemoveFilter={(type) => {
									if (type === "search") setSearchQuery("");
									if (type === "type") setFilter("all");
									if (type === "sort") setSortOrder("newest");
								}}
								onClearAll={() => {
									setSearchQuery("");
									setFilter("all");
									setSortOrder("newest");
								}}
								resultsCount={currentReleases.length}
								totalCount={
									filteredReleases.length !== releases.length
										? releases.length
										: undefined
								}
							/>
						</Card>
					</Section>

					{/* Releases Timeline */}
					<Section>
						{currentReleases.length === 0 ? (
							<Card variant="hover" fill>
								<CardContent centered className="py-16">
									<Package className="h-12 w-12 text-muted-foreground/50 mb-4 mx-auto" />
									<Heading as="h3" variant="section" className="mb-2">
										No Releases Found
									</Heading>
									<Text variant="muted" className="mb-4">
										{searchQuery
											? `No releases match "${searchQuery}"`
											: "No releases available with the selected filters."}
									</Text>
									{(searchQuery || filter !== "all") && (
										<button
											type="button"
											onClick={() => {
												setSearchQuery("");
												setFilter("all");
											}}
											className={`${TYPOGRAPHY.FONT_SIZE.sm} text-primary`}
										>
											Clear filters
										</button>
									)}
								</CardContent>
							</Card>
						) : (
							<Div className="space-y-6">
								{currentReleases.map((release, index) => (
									<ReleaseCard
										key={release.version}
										version={release.version}
										date={release.date}
										changes={release.changes}
										url={release.url}
										isPrerelease={release.isPrerelease}
										isLatest={index === 0 && !release.isPrerelease}
									/>
								))}
							</Div>
						)}
					</Section>

					{/* Pagination */}
					{totalPages > 1 && (
						<Section>
							<Card>
								<CardContent>
									<Div className="flex flex-col sm:flex-row items-center justify-between gap-4">
										{/* Page Info */}
										<Text variant="small" className="text-muted-foreground">
											Page {currentPage} of {totalPages}
										</Text>

										{/* Pagination Controls */}
										<Div className="flex items-center gap-2">
											<button
												type="button"
												onClick={() => goToPage(currentPage - 1)}
												disabled={currentPage === 1}
												className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
												aria-label="Previous page"
											>
												<ChevronLeft className="h-5 w-5" />
											</button>

											<Div className="flex items-center gap-1">
												{Array.from(
													{ length: totalPages },
													(_, i) => i + 1,
												).map((page) => {
													// Show first page, last page, current page, and pages around current
													const showPage =
														page === 1 ||
														page === totalPages ||
														Math.abs(page - currentPage) <= 1;

													if (!showPage) {
														// Show ellipsis for skipped pages
														if (
															page === currentPage - 2 ||
															page === currentPage + 2
														) {
															return (
																<Span
																	key={page}
																	className="px-2 text-muted-foreground"
																>
																	...
																</Span>
															);
														}
														return null;
													}

													return (
														<button
															key={page}
															type="button"
															onClick={() => goToPage(page)}
															className={`min-w-10 h-10 rounded-lg border transition-colors ${page === currentPage
																	? "bg-primary text-primary-foreground border-primary"
																	: "border-border"
																}`}
															aria-label={`Go to page ${page}`}
															aria-current={
																page === currentPage ? "page" : undefined
															}
														>
															{page}
														</button>
													);
												})}
											</Div>

											<button
												type="button"
												onClick={() => goToPage(currentPage + 1)}
												disabled={currentPage === totalPages}
												className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
												aria-label="Next page"
											>
												<ChevronRight className="h-5 w-5" />
											</button>
										</Div>

										{/* Jump to page on larger screens */}
										{totalPages > 5 && (
											<Div className="hidden lg:flex items-center gap-2">
												<Text variant="small" className="text-muted-foreground">
													Jump to:
												</Text>
												<Select
													value={currentPage.toString()}
													onValueChange={(value) => goToPage(Number(value))}
												>
													<SelectTrigger className="w-[120px]">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														{Array.from(
															{ length: totalPages },
															(_, i) => i + 1,
														).map((page) => (
															<SelectItem key={page} value={page.toString()}>
																Page {page}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</Div>
										)}
									</Div>
								</CardContent>
							</Card>
						</Section>
					)}
				</>
			)}
		</PageTemplate>
	);
};
