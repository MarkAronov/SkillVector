export interface SearchBarProps {
	onSearch: (query: string, forceRefetch?: boolean) => void;
	placeholder?: string;
	isLoading?: boolean;
	initialValue?: string;
}
