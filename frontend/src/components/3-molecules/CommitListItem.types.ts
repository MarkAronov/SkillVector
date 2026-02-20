export interface CommitListItemProps {
	/** Full commit SHA hash */
	sha: string;

	/** Commit message (full, will be truncated to first line) */
	message: string;

	/** Author's GitHub login (username) */
	authorLogin?: string;

	/** Author's name from commit metadata */
	authorName: string;

	/** Author's GitHub avatar URL */
	authorAvatarUrl?: string;

	/** Commit date (ISO string) */
	commitDate: string;

	/** GitHub URL to this commit */
	htmlUrl: string;

	/** Optional additional className */
	className?: string;
}
