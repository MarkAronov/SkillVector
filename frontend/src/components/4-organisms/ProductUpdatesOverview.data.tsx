import type { LucideIcon } from "lucide-react";
import {
	Bug,
	Eye,
	GitBranch,
	GitCommit,
	GitFork,
	Package,
	Shield,
	Star,
	Tag,
	TrendingUp,
	Users,
} from "lucide-react";

export interface StatConfig {
	icon: LucideIcon;
	variant:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "accent"
		| "muted"
		| "destructive";
	label: string;
	valueKey: string;
}

// Primary release/repo stats configuration
export const primaryStats: StatConfig[] = [
	{
		icon: Tag,
		variant: "primary",
		label: "Latest Version",
		valueKey: "latestVersion",
	},
	{
		icon: Package,
		variant: "secondary",
		label: "Total Releases",
		valueKey: "totalReleases",
	},
	{
		icon: TrendingUp,
		variant: "success",
		label: "Stable Releases",
		valueKey: "stableReleases",
	},
	{
		icon: GitCommit,
		variant: "warning",
		label: "Total Commits",
		valueKey: "totalCommits",
	},
	{
		icon: GitBranch,
		variant: "accent",
		label: "Branches",
		valueKey: "branches",
	},
	{
		icon: Users,
		variant: "muted",
		label: "Contributors",
		valueKey: "contributors",
	},
];

// Secondary GitHub metadata stats configuration
export const secondaryStats: StatConfig[] = [
	{
		icon: Star,
		variant: "warning",
		label: "Stars",
		valueKey: "stargazers_count",
	},
	{
		icon: GitFork,
		variant: "secondary",
		label: "Forks",
		valueKey: "forks_count",
	},
	{
		icon: Eye,
		variant: "primary",
		label: "Watchers",
		valueKey: "watchers_count",
	},
	{
		icon: Bug,
		variant: "destructive",
		label: "Open Issues",
		valueKey: "open_issues_count",
	},
	{
		icon: Shield,
		variant: "success",
		label: "License",
		valueKey: "license",
	},
];
