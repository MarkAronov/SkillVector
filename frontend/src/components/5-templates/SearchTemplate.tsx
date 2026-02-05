import type { SearchTemplateProps } from "./SearchTemplate.types";

export const SearchTemplate = ({
	header,
	searchBar,
	results,
	error,
}: SearchTemplateProps) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8">
			{header}
			{searchBar}
			{error}
			{results}
		</div>
	);
};
