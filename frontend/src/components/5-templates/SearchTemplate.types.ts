import type { ReactNode } from "react";

export interface SearchTemplateProps {
	header: ReactNode;
	searchBar: ReactNode;
	results?: ReactNode;
	error?: ReactNode;
}
