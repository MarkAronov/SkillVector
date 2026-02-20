export interface ProductUpdatesOverviewStats {
	totalReleases: number;
	prereleases: number;
	stableReleases: number;
	latestVersion: string;
}

export interface ProductUpdatesRepoInfo {
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	watchers_count: number;
	size: number;
	default_branch: string;
	license: { spdx_id: string; name: string } | null;
	created_at: string;
	pushed_at: string;
}

export interface ProductUpdatesBranch {
	name: string;
	protected: boolean;
}

export interface ProductUpdatesContributor {
	login: string;
	avatar_url: string;
	html_url: string;
	contributions: number;
}

export interface ProductUpdatesCommit {
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

export interface ProductUpdatesRelease {
	version: string;
	date: string;
	changes: string[];
	url: string;
	isPrerelease: boolean;
}

export interface ProductUpdatesRepoStats {
	repo: ProductUpdatesRepoInfo | null;
	branches: ProductUpdatesBranch[];
	contributors: ProductUpdatesContributor[];
	recentCommits: ProductUpdatesCommit[];
	totalCommits: number;
	languages: Record<string, number>;
}

export interface ProductUpdatesOverviewProps {
	stats: ProductUpdatesOverviewStats;
	repoStats: ProductUpdatesRepoStats;
	releases: ProductUpdatesRelease[];
	className?: string;
}
