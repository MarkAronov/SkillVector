import { useSearch as useSearchAPI } from "@/hooks/useSearch";
import type { SearchResult } from "@/types/search.types";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
	Briefcase,
	MapPin,
	Search,
	SlidersHorizontal,
	Star,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Link } from "../2-atoms/Link";
import { Text } from "../2-atoms/Text";
import { Card } from "../3-molecules/Card";
import { ErrorMessage } from "../3-molecules/ErrorMessage";
import { FilterPanel } from "../3-molecules/FilterPanel";
import { Hero } from "../3-molecules/Hero";
import { SearchBar } from "../3-molecules/SearchBar";
import { SearchResults } from "../4-organisms/SearchResults";
import { PageTemplate } from "../5-templates/PageTemplate";

type SearchParams = {
	q?: string;
	filter?: string;
	experience?: string;
	region?: string;
	role?: string;
	sort?: string;
};

// Helper to extract experience years
const getExperienceYears = (exp: string | number | undefined): number => {
	if (typeof exp === "number") return exp;
	if (typeof exp === "string") {
		const match = exp.match(/(\d+)/);
		return match ? Number.parseInt(match[1], 10) : 0;
	}
	return 0;
};

export const SearchPage = () => {
	const navigate = useNavigate();
	const searchParams = useSearch({ from: "/search" });
	const query = searchParams.q || "";
	const [offset, setOffset] = useState(0);
	const [accumulatedData, setAccumulatedData] = useState<SearchResult | null>(
		null,
	);
	const limit = 10;

	// Filter states (synced with URL)
	const filterSearch = (searchParams as SearchParams).filter || "";
	const experienceFilter = (searchParams as SearchParams).experience || "all";
	const regionFilter = (searchParams as SearchParams).region || "all";
	const roleFilter = (searchParams as SearchParams).role || "all";
	const sortBy = (searchParams as SearchParams).sort || "relevance";

	// Fetch data from API
	const { data, isLoading, error, refetch } = useSearchAPI(query, {
		enabled: true,
		limit,
		offset,
	});

	// Accumulate results when new data arrives
	useEffect(() => {
		if (data) {
			if (offset === 0) {
				// First page - replace all data
				setAccumulatedData(data);
			} else {
				// Subsequent pages - append to existing data
				setAccumulatedData((prev) => {
					if (!prev) return data;
					return {
						...data,
						people: [...(prev.people || []), ...(data.people || [])],
					};
				});
			}
		}
	}, [data, offset]);

	// Reset accumulated data when query changes
	// biome-ignore lint/correctness/useExhaustiveDependencies: query change should reset state
	useEffect(() => {
		setOffset(0);
		setAccumulatedData(null);
	}, [query]);

	// Apply client-side filtering and sorting
	const filteredData = useMemo((): SearchResult | null => {
		if (!accumulatedData) return null;
		if (!accumulatedData.people) {
			return { ...accumulatedData, people: [] };
		}

		let filtered = [...accumulatedData.people];

		// Apply filter search
		if (filterSearch.trim()) {
			const q = filterSearch.toLowerCase();
			filtered = filtered.filter((person) => {
				const searchableText = [
					person.name,
					person.role,
					person.location,
					person.city,
					person.country,
					person.description,
					person.skills,
				]
					.filter(Boolean)
					.join(" ")
					.toLowerCase();
				return searchableText.includes(q);
			});
		}

		// Apply experience filter
		if (experienceFilter !== "all") {
			filtered = filtered.filter((person) => {
				const years = getExperienceYears(
					person.experience_years || person.experience,
				);
				switch (experienceFilter) {
					case "entry":
						return years < 2;
					case "junior":
						return years >= 2 && years < 5;
					case "mid":
						return years >= 5 && years < 10;
					case "senior":
						return years >= 10 && years < 15;
					case "expert":
						return years >= 15;
					default:
						return true;
				}
			});
		}

		// Apply region filter
		if (regionFilter !== "all") {
			filtered = filtered.filter((person) => {
				const location = (
					person.location ||
					person.country ||
					""
				).toLowerCase();
				const regionMap: Record<string, string[]> = {
					"north-america": [
						"usa",
						"canada",
						"mexico",
						"united states",
						"america",
						"us",
					],
					europe: [
						"uk",
						"germany",
						"france",
						"spain",
						"italy",
						"poland",
						"netherlands",
						"europe",
					],
					asia: ["india", "china", "japan", "korea", "singapore", "asia"],
					"south-america": ["brazil", "argentina", "chile", "colombia"],
					africa: ["south africa", "egypt", "nigeria", "kenya", "africa"],
					oceania: ["australia", "new zealand", "oceania"],
				};
				const keywords = regionMap[regionFilter] || [];
				return keywords.some((k) => location.includes(k));
			});
		}

		// Apply role filter
		if (roleFilter !== "all") {
			filtered = filtered.filter((person) => {
				const role = (person.role || "").toLowerCase();
				const roleMap: Record<string, string[]> = {
					engineering: ["engineer", "developer", "programmer", "software"],
					design: ["designer", "ux", "ui"],
					product: ["product manager", "product owner", "pm"],
					data: ["data scientist", "data analyst", "analytics"],
					management: ["manager", "director", "lead", "cto", "ceo"],
					marketing: ["marketing", "growth"],
					sales: ["sales", "account executive"],
				};
				const keywords = roleMap[roleFilter] || [];
				return keywords.some((k) => role.includes(k));
			});
		}

		// Apply sort
		filtered.sort((a, b) => {
			switch (sortBy) {
				case "experience-high":
					return (
						getExperienceYears(b.experience_years || b.experience) -
						getExperienceYears(a.experience_years || a.experience)
					);
				case "experience-low":
					return (
						getExperienceYears(a.experience_years || a.experience) -
						getExperienceYears(b.experience_years || b.experience)
					);
				case "name-asc":
					return (a.name || "").localeCompare(b.name || "");
				case "name-desc":
					return (b.name || "").localeCompare(a.name || "");
				default: // relevance
					return (b.relevanceScore || 0) - (a.relevanceScore || 0);
			}
		});

		return {
			...accumulatedData,
			people: filtered,
		};
	}, [
		accumulatedData,
		filterSearch,
		experienceFilter,
		regionFilter,
		roleFilter,
		sortBy,
	]);

	// Calculate active filters
	const activeFilters = useMemo(() => {
		const filters = [];
		if (filterSearch)
			filters.push({
				id: "search",
				type: "search",
				value: filterSearch,
				label: `"${filterSearch}"`,
			});
		if (experienceFilter !== "all") {
			const labels = {
				entry: "Entry Level",
				junior: "Junior",
				mid: "Mid-Level",
				senior: "Senior",
				expert: "Expert",
			};
			filters.push({
				id: "experience",
				type: "experience",
				value: experienceFilter,
				label: labels[experienceFilter as keyof typeof labels],
			});
		}
		if (regionFilter !== "all")
			filters.push({
				id: "region",
				type: "region",
				value: regionFilter,
				label: regionFilter
					.replace("-", " ")
					.replace(/\b\w/g, (l: string) => l.toUpperCase()),
			});
		if (roleFilter !== "all")
			filters.push({
				id: "role",
				type: "role",
				value: roleFilter,
				label: roleFilter.charAt(0).toUpperCase() + roleFilter.slice(1),
			});
		if (sortBy !== "relevance") {
			const labels = {
				"experience-high": "Experience ↓",
				"experience-low": "Experience ↑",
				"name-asc": "Name A-Z",
				"name-desc": "Name Z-A",
			};
			filters.push({
				id: "sort",
				type: "sort",
				value: sortBy,
				label: labels[sortBy as keyof typeof labels],
			});
		}
		return filters;
	}, [filterSearch, experienceFilter, regionFilter, roleFilter, sortBy]);

	const handleSearch = (newQuery: string, forceRefetch?: boolean) => {
		setOffset(0);
		setAccumulatedData(null);
		if (forceRefetch && newQuery === query) {
			refetch();
		} else {
			navigate({
				to: "/search",
				search: newQuery.trim() ? { q: newQuery } : {},
			});
		}
	};

	const handleLoadMore = () => {
		if (accumulatedData?.hasMore) {
			setOffset((prev) => prev + limit);
		}
	};

	const clearAllFilters = () => {
		navigate({
			to: "/search",
			search: (prev) => ({
				q: prev.q,
				filter: undefined,
				experience: undefined,
				region: undefined,
				role: undefined,
				sort: undefined,
			}),
			replace: true,
		});
	};

	const removeFilter = (id: string) => {
		const updates: Record<string, undefined> = {};
		if (id === "search") updates.filter = undefined;
		if (id === "experience") updates.experience = undefined;
		if (id === "region") updates.region = undefined;
		if (id === "role") updates.role = undefined;
		if (id === "sort") updates.sort = undefined;

		navigate({
			to: "/search",
			search: (prev) => ({ ...prev, ...updates }),
			replace: true,
		});
	};

	return (
		<PageTemplate title="Search">
			{/* Hero Section */}
			<Hero
				title="Find the "
				brand="Perfect Talent"
				subtitle="Semantic search powered by AI. Search by skills, experience, location, and more."
			/>

			{/* Search Bar */}
			<SearchBar
				onSearch={handleSearch}
				placeholder="Search for people... (e.g., 'Python developers', 'DevOps from Europe')"
				isLoading={isLoading}
				initialValue={query}
			/>

			{/* Error Message */}
			{error && <ErrorMessage message={error.message} className="mt-4" />}

			{/* Filter Panel - Only show when we have search results */}
			{accumulatedData?.people && accumulatedData.people.length > 0 && (
				<Div className="mt-6">
					<Card>
						<FilterPanel
							variant="compact"
							search={{
								value: filterSearch,
								onChange: (value) =>
									navigate({
										to: "/search",
										search: (prev) => ({ ...prev, filter: value || undefined }),
										replace: true,
									}),
								placeholder: "Filter by name, role, skills...",
								icon: <Search className="h-5 w-5" />,
							}}
							filters={[
								{
									label: "Experience",
									value: "experience",
									icon: <Briefcase className="h-4 w-4" />,
									options: [
										{ value: "all", label: "All Levels" },
										{ value: "entry", label: "Entry (0-2 years)" },
										{ value: "junior", label: "Junior (2-5 years)" },
										{ value: "mid", label: "Mid (5-10 years)" },
										{ value: "senior", label: "Senior (10-15 years)" },
										{ value: "expert", label: "Expert (15+ years)" },
									],
								},
								{
									label: "Region",
									value: "region",
									icon: <MapPin className="h-4 w-4" />,
									options: [
										{ value: "all", label: "All Regions" },
										{ value: "north-america", label: "North America" },
										{ value: "europe", label: "Europe" },
										{ value: "asia", label: "Asia" },
										{ value: "south-america", label: "South America" },
										{ value: "africa", label: "Africa" },
										{ value: "oceania", label: "Oceania" },
									],
								},
								{
									label: "Role",
									value: "role",
									icon: <Star className="h-4 w-4" />,
									options: [
										{ value: "all", label: "All Roles" },
										{ value: "engineering", label: "Engineering" },
										{ value: "design", label: "Design" },
										{ value: "product", label: "Product" },
										{ value: "data", label: "Data & Analytics" },
										{ value: "management", label: "Management" },
										{ value: "marketing", label: "Marketing" },
										{ value: "sales", label: "Sales" },
									],
								},
								{
									label: "Sort",
									value: "sort",
									icon: <SlidersHorizontal className="h-4 w-4" />,
									options: [
										{ value: "relevance", label: "Relevance" },
										{ value: "experience-high", label: "Experience ↓" },
										{ value: "experience-low", label: "Experience ↑" },
										{ value: "name-asc", label: "Name A-Z" },
										{ value: "name-desc", label: "Name Z-A" },
									],
								},
							]}
							filterValues={{
								experience: experienceFilter,
								region: regionFilter,
								role: roleFilter,
								sort: sortBy,
							}}
							onFilterChange={(filterId, value) => {
								const updates: Record<string, string | undefined> = {};
								if (filterId === "experience")
									updates.experience = value === "all" ? undefined : value;
								if (filterId === "region")
									updates.region = value === "all" ? undefined : value;
								if (filterId === "role")
									updates.role = value === "all" ? undefined : value;
								if (filterId === "sort")
									updates.sort = value === "relevance" ? undefined : value;

								navigate({
									to: "/search",
									search: (prev) => ({ ...prev, ...updates }),
									replace: true,
								});
							}}
							activeFilters={activeFilters}
							onRemoveFilter={removeFilter}
							onClearAll={clearAllFilters}
							resultsCount={filteredData?.people?.length || 0}
							totalCount={
								filteredData?.people?.length !== accumulatedData?.people?.length
									? accumulatedData?.people?.length
									: undefined
							}
						/>
					</Card>
				</Div>
			)}

			{/* Search Results - Use filtered data */}
			{filteredData && (
				<SearchResults data={filteredData} isLoading={isLoading} />
			)}

			{/* Load More Button */}
			{accumulatedData?.hasMore && (
				<Div variant="center" className="mt-8">
					<Button type="button" onClick={handleLoadMore} disabled={isLoading}>
						{isLoading ? "Loading..." : "Load More Results"}
					</Button>
				</Div>
			)}

			{/* Pagination Info */}
			{accumulatedData?.people && accumulatedData.people.length > 0 && (
				<Div variant="center" className="mt-4">
					<Text variant="small">
						Loaded {accumulatedData.people.length} of{" "}
						{accumulatedData.total || accumulatedData.people.length} total
						results
						{filteredData?.people &&
							filteredData.people.length !== accumulatedData.people.length && (
								<> ({filteredData.people.length} after filtering)</>
							)}
					</Text>
				</Div>
			)}

			{/* Hint for browse all*/}
			{!query && (
				<Div variant="center" className="mt-8">
					<Text variant="caption">
						Tip: Visit{" "}
						<Link to="/people" variant="underline">
							/people
						</Link>{" "}
						to see everyone
					</Text>
				</Div>
			)}
		</PageTemplate>
	);
};
