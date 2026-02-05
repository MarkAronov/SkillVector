import { Search } from "lucide-react";
import { type KeyboardEvent, useEffect, useState } from "react";
import {
	ANIMATION,
	BORDERS,
	CURSOR,
	OPACITY,
	SIZING,
	TYPOGRAPHY,
} from "../1-ions";
import { Glass } from "../1-ions/Glass";
import type { SearchBarProps } from "./SearchBar.types";

/**
 * SearchBar Component
 *
 * Glassmorphism search input with integrated search button and loading state.
 * Syncs with URL/external state via initialValue prop.
 *
 * Features:
 * - Glassmorphism card styling (frosted glass effect)
 * - Rounded-full pill shape with constrained width
 * - Enter key support for search submission
 * - Loading state with spinner animation
 * - Disabled state when loading (prevents duplicate searches)
 * - Visual separator between input and button
 *
 * Input Behavior:
 * - Auto-syncs with initialValue changes (e.g., from URL params)
 * - Trimmed value validation (prevents empty searches)
 * - Responsive text size (sm on mobile, base on desktop)
 * - Transparent background with foreground text
 *
 * Button States:
 * - Default: Search icon (muted foreground)
 * - Loading: Spinning border animation (muted foreground)
 * - Hover: Subtle white background (10% opacity)
 * - Disabled: Reduced opacity, not-allowed cursor
 *
 * Layout:
 * - Glass card container (constrained width, centered)
 * - Flex layout: input (flex-1) | divider | button
 * - Height: 48px (h-12) for comfortable touch targets
 * - Border: Subtle white border with glassmorphism
 */

export const SearchBar = ({
	onSearch,
	placeholder = "Search...",
	isLoading = false,
	initialValue = "",
}: SearchBarProps) => {
	// Local search input state
	const [value, setValue] = useState(initialValue);

	/**
	 * Sync with initialValue when it changes (e.g., from URL)
	 * Allows external state to control input value
	 */
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	/**
	 * Execute search with current value
	 * Only triggers if value is non-empty and not loading
	 */
	const handleSearch = () => {
		if (value.trim() && !isLoading) {
			onSearch(value, true);
		}
	};

	/**
	 * Handle Enter key press for search submission
	 */
	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !isLoading) {
			handleSearch();
		}
	};

	return (
		<Glass
			variant="card"
			constrain
			className="w-full flex items-center rounded-full overflow-hidden p-0 border border-white/20 dark:border-white/10 shadow-md"
		>
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyPress={handleKeyPress}
				className={`flex-1 h-12 px-5 bg-transparent border-none outline-none ${TYPOGRAPHY.FONT_SIZE.sm_base} text-foreground placeholder:text-muted-foreground disabled:${OPACITY.muted} disabled:${CURSOR.notAllowed}`}
				disabled={isLoading}
			/>
			<div className="h-8 w-px bg-border" />
			<button
				type="button"
				onClick={handleSearch}
				disabled={!value.trim() || isLoading}
				className={`h-12 px-5 flex items-center justify-center bg-transparent hover:bg-white/10 dark:hover:bg-white/5 transition-colors disabled:${OPACITY.muted} disabled:${CURSOR.notAllowed}`}
				aria-label="Search"
			>
				{isLoading ? (
					<div
						className={`${SIZING.ICON.md} ${BORDERS.WIDTH.thin} border-muted-foreground border-t-transparent ${BORDERS.RADIUS.full} ${ANIMATION.KEYFRAME.spin}`}
					/>
				) : (
					<Search
						className={`${SIZING.ICON.md} text-muted-foreground`}
						aria-hidden
					/>
				)}
			</button>
		</Glass>
	);
};
