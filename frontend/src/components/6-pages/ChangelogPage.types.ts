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
