import type { SearchResult } from "@/types/search.types";

export interface SearchResultsProps {
	data: SearchResult;
	isLoading?: boolean;
}
