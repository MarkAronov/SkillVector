export interface BranchListItemProps {
	/** Branch name to display */
	branchName: string;

	/** Whether this branch is currently selected for commit viewing */
	isSelected: boolean;

	/** Whether this is the default branch (e.g., main) */
	isDefault: boolean;

	/** Whether this branch is protected */
	isProtected: boolean;

	/** Callback when branch is selected */
	onSelect: () => void;

	/** GitHub URL for this branch */
	githubUrl: string;

	/** Optional additional className */
	className?: string;
}
