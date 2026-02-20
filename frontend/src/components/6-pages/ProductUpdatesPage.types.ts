export type ReleaseFilter = "all" | "stable" | "prerelease";
export type SortOrder = "newest" | "oldest";

export interface GitHubRelease {
	id: number;
	tag_name: string;
	name: string;
	body: string;
	published_at: string;
	html_url: string;
	draft: boolean;
	prerelease: boolean;
}

export interface ParsedRelease {
	version: string;
	date: string;
	changes: string[];
	url: string;
	isPrerelease: boolean;
}

/** GitHub repository metadata from the repos API */
export interface GitHubRepoInfo {
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	watchers_count: number;
	size: number;
	default_branch: string;
	language: string;
	license: { spdx_id: string; name: string } | null;
	created_at: string;
	updated_at: string;
	pushed_at: string;
}

/** GitHub branch from the branches API */
export interface GitHubBranch {
	name: string;
	protected: boolean;
}

/** GitHub contributor from the contributors API */
export interface GitHubContributor {
	login: string;
	avatar_url: string;
	html_url: string;
	contributions: number;
}

/** GitHub commit from the commits API */
export interface GitHubCommit {
	sha: string;
	commit: {
		message: string;
		author: {
			name: string;
			date: string;
		};
	};
	author: {
		login: string;
		avatar_url: string;
		html_url: string;
	} | null;
	html_url: string;
}

/** Aggregated repo stats for the overview panel */
export interface RepoStats {
	repo: GitHubRepoInfo | null;
	branches: GitHubBranch[];
	contributors: GitHubContributor[];
	recentCommits: GitHubCommit[];
	totalCommits: number;
	languages: Record<string, number>;
}
