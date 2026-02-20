export interface ContributorChipProps {
	/** GitHub username */
	login: string;

	/** Avatar image URL */
	avatarUrl: string;

	/** GitHub profile URL */
	htmlUrl: string;

	/** Number of contributions to the repository */
	contributions: number;

	/** Optional additional className */
	className?: string;
}
