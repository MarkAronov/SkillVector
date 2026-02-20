import type { Meta, StoryObj } from "@storybook/react";
import {
	ExternalLink,
	Filter,
	Github,
	Package,
	Search,
	SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import { FilterPanel } from "./FilterPanel";

const meta = {
	title: "Molecules/FilterPanel",
	component: FilterPanel,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof FilterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullLayout: Story = {
	args: {
		variant: "full",
		icon: <Github className="h-6 w-6 text-primary" />,
		title: "Release Overview",
		description:
			"Follow our GitHub repository for the latest updates, releases, and contribute to the project",
		primaryAction: {
			label: "GitHub Repository",
			href: "https://github.com/MarkAronov/SkillVector",
			icon: <ExternalLink className="h-4 w-4" />,
		},
		secondaryAction: {
			label: "View All Releases",
			href: "https://github.com/MarkAronov/SkillVector/releases",
			icon: <Package className="h-4 w-4" />,
		},
	},
};

export const CompactWithFilters: Story = {
	render: () => {
		const [searchQuery, setSearchQuery] = useState("");
		const [filterType, setFilterType] = useState("all");
		const [sortOrder, setSortOrder] = useState("newest");

		const activeFilters = [
			...(searchQuery
				? [
						{
							id: "search-1",
							type: "search",
							value: searchQuery,
							label: `"${searchQuery}"`,
						},
					]
				: []),
			...(filterType !== "all"
				? [
						{
							id: "type-1",
							type: "type",
							value: filterType,
							label: filterType === "stable" ? "Stable" : "Pre-releases",
						},
					]
				: []),
			...(sortOrder !== "newest"
				? [
						{
							id: "sort-1",
							type: "sort",
							value: sortOrder,
							label: "Oldest First",
						},
					]
				: []),
		];

		return (
			<FilterPanel
				variant="compact"
				search={{
					value: searchQuery,
					onChange: setSearchQuery,
					placeholder: "Search releases...",
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
					type: filterType,
					sort: sortOrder,
				}}
				onFilterChange={(filterId, value) => {
					if (filterId === "type") setFilterType(value);
					if (filterId === "sort") setSortOrder(value);
				}}
				activeFilters={activeFilters}
				onRemoveFilter={(type) => {
					if (type === "search") setSearchQuery("");
					if (type === "type") setFilterType("all");
					if (type === "sort") setSortOrder("newest");
				}}
				onClearAll={() => {
					setSearchQuery("");
					setFilterType("all");
					setSortOrder("newest");
				}}
				resultsCount={42}
				totalCount={100}
			/>
		);
	},
};

export const SearchOnly: Story = {
	render: () => {
		const [searchQuery, setSearchQuery] = useState("");

		return (
			<FilterPanel
				variant="compact"
				search={{
					value: searchQuery,
					onChange: setSearchQuery,
					placeholder: "Search documentation...",
					icon: <Search className="h-5 w-5" />,
				}}
				resultsCount={15}
			/>
		);
	},
};

export const WithActiveFilters: Story = {
	args: {
		variant: "compact",
		search: {
			value: "v1.0",
			onChange: () => {
				/* Storybook demo - no action needed */
			},
			placeholder: "Search...",
			icon: <Search className="h-5 w-5" />,
		},
		filters: [
			{
				label: "Filter",
				value: "type",
				icon: <Filter className="h-4 w-4" />,
				options: [
					{ value: "all", label: "All" },
					{ value: "stable", label: "Stable" },
				],
			},
		],
		filterValues: {
			type: "stable",
		},
		activeFilters: [
			{ id: "search-1", type: "search", value: "v1.0", label: '"v1.0"' },
			{ id: "type-1", type: "type", value: "stable", label: "Stable" },
		],
		resultsCount: 8,
		totalCount: 50,
	},
};
