import { X } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "../2-atoms/Badge";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Input } from "../2-atoms/Input";
import { Text } from "../2-atoms/Text";

export interface FilterOption {
	value: string;
	label: string;
	icon?: React.ReactNode;
}

export interface FilterConfig {
	label: string;
	value: string;
	options: FilterOption[];
	icon?: React.ReactNode;
}

export interface ActiveFilter {
	type: string;
	value: string;
	label: string;
}

export interface FilterPanelProps {
	/** Icon to display in the header */
	icon?: React.ReactNode;
	/** Title of the panel */
	title?: string;
	/** Description text */
	description?: string;
	/** Search configuration */
	search?: {
		value: string;
		onChange: (value: string) => void;
		placeholder?: string;
		icon?: React.ReactNode;
	};
	/** Filter configurations */
	filters?: FilterConfig[];
	/** Current filter values */
	filterValues?: Record<string, string>;
	/** Filter change handler */
	onFilterChange?: (filterId: string, value: string) => void;
	/** Active filters to display */
	activeFilters?: ActiveFilter[];
	/** Clear all filters handler */
	onClearAll?: () => void;
	/** Remove specific filter handler */
	onRemoveFilter?: (type: string) => void;
	/** Primary action configuration */
	primaryAction?: {
		label: string;
		href: string;
		icon?: React.ReactNode;
	};
	/** Secondary action configuration */
	secondaryAction?: {
		label: string;
		href: string;
		icon?: React.ReactNode;
	};
	/** Results count */
	resultsCount?: number;
	/** Total items count */
	totalCount?: number;
	/** Additional CSS classes */
	className?: string;
	/** Layout variant */
	variant?: "compact" | "full";
}

/**
 * FilterPanel Component
 *
 * A feature-rich 2026 filtering panel with search, multi-select filters, active filter badges,
 * and clear all functionality. Supports both compact and full layouts.
 */
export const FilterPanel = ({
	icon,
	title,
	description,
	search,
	filters = [],
	filterValues = {},
	onFilterChange,
	activeFilters = [],
	onClearAll,
	onRemoveFilter,
	primaryAction,
	secondaryAction,
	resultsCount,
	totalCount,
	className = "",
	variant = "full",
}: FilterPanelProps) => {
	const hasActiveFilters = activeFilters.length > 0 || search?.value;

	return (
		<Div className={`py-6 px-6 ${className}`}>
			{/* Header Section */}
			{variant === "full" && (title || description) && (
				<Div className="text-center mb-6">
					{title && (
						<Div className="flex items-baseline justify-center gap-3 mb-4">
							{icon}
							<Heading variant="section">{title}</Heading>
						</Div>
					)}
					{description && (
						<Text
							variant="lead"
							className="text-muted-foreground mb-6 max-w-2xl mx-auto"
						>
							{description}
						</Text>
					)}
					{(primaryAction || secondaryAction) && (
						<Div className="flex flex-wrap items-center justify-center gap-3 mb-6">
							{primaryAction && (
								<Button asChild>
									<a
										href={primaryAction.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2"
									>
										{primaryAction.icon}
										{primaryAction.label}
									</a>
								</Button>
							)}
							{secondaryAction && (
								<Button asChild variant="secondary">
									<a
										href={secondaryAction.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2"
									>
										{secondaryAction.icon}
										{secondaryAction.label}
									</a>
								</Button>
							)}
						</Div>
					)}
				</Div>
			)}

			{/* Filter Controls */}
			<Div className="flex flex-col lg:flex-row gap-4">
				{/* Search Input */}
				{search && (
					<Div className="flex-1">
						<Div className="relative">
							{search.icon && (
								<Div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
									{search.icon}
								</Div>
							)}
							<Input
								type="text"
								placeholder={search.placeholder || "Search..."}
								value={search.value}
								onChange={(e) => search.onChange(e.target.value)}
								className={`h-11 ${search.icon ? "pl-10" : ""}`}
							/>
						</Div>
					</Div>
				)}

				{/* Filter Dropdowns */}
				{filters.length > 0 && (
					<Div className="flex flex-wrap gap-2">
						{filters.map((filter) => (
							<Select
								key={filter.value}
								value={filterValues[filter.value] || filter.options[0]?.value}
								onValueChange={(value) => onFilterChange?.(filter.value, value)}
							>
								<SelectTrigger className="w-[160px]">
									{filter.icon}
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{filter.options.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						))}
					</Div>
				)}
			</Div>

			{/* Active Filters & Results Count */}
			{(hasActiveFilters || resultsCount !== undefined) && (
				<Div className="flex flex-wrap items-center gap-3 mt-4 pt-4">
					{/* Results Count */}
					{resultsCount !== undefined && (
						<Text variant="small" className="text-muted-foreground">
							{resultsCount} {resultsCount === 1 ? "result" : "results"}
							{totalCount !== undefined && ` of ${totalCount}`}
						</Text>
					)}

					{/* Active Filters */}
					{hasActiveFilters && (
						<>
							{resultsCount !== undefined && (
								<Div className="h-4 w-px bg-border" />
							)}
							<Text variant="small" className="text-muted-foreground">
								Active filters:
							</Text>
							<Div className="flex flex-wrap gap-2">
								{activeFilters.map((filter, index) => (
									<Badge
										key={`${filter.type}-${index}`}
										variant="secondary"
										className="gap-1 cursor-pointer hover:bg-secondary/80 transition-colors"
										onClick={() => onRemoveFilter?.(filter.type)}
									>
										{filter.label}
										<X className="h-3 w-3" />
									</Badge>
								))}
							</Div>
							{onClearAll && (
								<Button
									variant="ghost"
									size="sm"
									onClick={onClearAll}
									className="h-7 text-xs"
								>
									Clear all
								</Button>
							)}
						</>
					)}
				</Div>
			)}
		</Div>
	);
};
