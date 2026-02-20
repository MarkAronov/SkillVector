import type { PersonSearchResult } from "@/types/search.types";

export interface PersonCardProps {
	person: PersonSearchResult;
	view?: "grid" | "row";
}
