import type { ComponentProps, ReactNode } from "react";

export type GapSize = "sm" | "md" | "lg" | "xl";
export type MaxColumns = 1 | 2 | 3;

export interface CardGridItem {
	/** Unique identifier */
	id?: string | number;

	/** Optional icon element */
	icon?: ReactNode;

	/** Card title/heading (required unless using customContent) */
	title?: string;

	/** Main description text */
	description?: string;

	/** Additional content text or React element */
	content?: string | ReactNode;

	/** List of items to display */
	items?: string[];

	/** List of subsections with title and content */
	subsections?: { title: string; content: string }[];

	/** Tags/badges to display */
	tags?: string[];

	/** Code example with label and code */
	codeExample?: { label: string; code: string; note?: string };

	/** Action button */
	action?: {
		text: string;
		href: string;
		isInternal?: boolean;
	};

	/** Icon color class */
	color?: string;

	/** Step number (for step-based designs) */
	step?: number;

	/** Custom aria-label */
	ariaLabel?: string;

	/** Custom content that completely replaces default rendering (but keeps Card wrapper) */
	customContent?: ReactNode;

	/** When true, customContent is rendered without Card wrapper (for content that's already a Card) */
	noWrapper?: boolean;

	/** Whether card content should be centered */
	centered?: boolean;
}

export interface CardGridBaseProps {
	/** Array of items to render as cards */
	items?: CardGridItem[];

	/** Children elements (for manual card rendering) */
	children?: ReactNode;

	/** Maximum number of columns at largest breakpoint (1, 2, or 3) */
	maxColumns?: MaxColumns;

	/** Gap size between cards */
	gap?: GapSize;

	/** Custom class for the grid container */
	containerClassName?: string;

	/**
	 * Whether cards should have the same height (true) or fit content (false).
	 * Defaults to false for 1-column layouts, true for multi-column layouts.
	 * Set explicitly to override automatic behavior.
	 */
	stretchCards?: boolean;

	/**
	 * Whether to center incomplete last rows.
	 * - true: Centers odd items (good for finite "How It Works" sections)
	 * - false: Left-aligns all items (recommended for search results/long lists)
	 * Default: false
	 */
	centerIncompleteRows?: boolean;

	/** Use semantic list structure */
	as?: "div" | "ul";

	/** Custom render function for card content */
	renderCard?: (item: CardGridItem) => ReactNode;

	/** Enforce default card wrapper and baseline typography for custom content */
	enforceCustomContent?: boolean;
}

export type CardGridProps = CardGridBaseProps &
	Omit<ComponentProps<"div">, keyof CardGridBaseProps> &
	Omit<ComponentProps<"ul">, keyof CardGridBaseProps>;

export interface CardGridItemBaseProps {
	/** Span multiple columns (1-3) */
	colSpan?: 1 | 2 | 3;

	/** Span multiple rows */
	rowSpan?: number;

	/** Children elements */
	children: ReactNode;

	/** Use semantic list item */
	as?: "div" | "li";
}

export type CardGridItemProps = CardGridItemBaseProps &
	Omit<ComponentProps<"div">, keyof CardGridItemBaseProps> &
	Omit<ComponentProps<"li">, keyof CardGridItemBaseProps>;
