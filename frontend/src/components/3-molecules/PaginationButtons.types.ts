export interface PaginationButtonsProps {
	/** Current active page (1-indexed) */
	currentPage: number;

	/** Total number of pages available */
	totalPages: number;

	/** Handler for previous page navigation */
	onPrevious: () => void;

	/** Handler for next page navigation */
	onNext: () => void;

	/** Optional className for external layout control */
	className?: string;
}
