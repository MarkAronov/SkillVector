import { LayoutGrid, List as ListIcon } from "lucide-react";
import { Button } from "../2-atoms/Button";

/**
 * ViewToggle Component
 *
 * Toggle buttons for switching between grid and list view modes.
 * Common pattern for content display preferences.
 *
 * View Modes:
 * - grid: Grid layout (LayoutGrid icon)
 * - row: List/row layout (List icon)
 *
 * Visual States:
 * - Active: Primary color background (bg-primary/20) with primary text
 * - Inactive: Muted foreground color (text-muted-foreground)
 * - Both: Ghost variant buttons with small size
 *
 * Button Features:
 * - Size: Small (sm) for compact toolbar placement
 * - Variant: Ghost (transparent background)
 * - Icons: 16x16px (h-4 w-4) Lucide icons
 * - ARIA: aria-pressed attribute for accessibility
 * - Screen reader: sr-only labels for icon-only buttons
 * - Tooltips: title attribute for hover hints
 *
 * Interaction:
 * - onClick triggers onViewChange callback
 * - Passes selected view mode to parent
 * - Parent manages actual view state and rendering
 *
 * Layout:
 * - Horizontal flex with 8px gap (gap-2)
 * - Inline button group
 * - Custom className for positioning
 *
 * Use Cases:
 * - Search results (grid vs list)
 * - Product catalogs
 * - File browsers
 * - Content galleries
 */

interface ViewToggleProps {
	view: "grid" | "row";
	onViewChange: (view: "grid" | "row") => void;
	className?: string;
}

export const ViewToggle = ({
	view,
	onViewChange,
	className = "",
}: ViewToggleProps) => {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Button
				size="sm"
				variant="ghost"
				className={
					view === "grid"
						? "bg-primary/20 text-primary"
						: "text-muted-foreground"
				}
				onClick={() => onViewChange("grid")}
				aria-pressed={view === "grid"}
				title="Grid view"
			>
				<LayoutGrid className="h-4 w-4" />
				<span className="sr-only">Grid</span>
			</Button>
			<Button
				size="sm"
				variant="ghost"
				className={
					view === "row"
						? "bg-primary/20 text-primary"
						: "text-muted-foreground"
				}
				onClick={() => onViewChange("row")}
				aria-pressed={view === "row"}
				title="List view"
			>
				<ListIcon className="h-4 w-4" />
				<span className="sr-only">List</span>
			</Button>
		</div>
	);
};
