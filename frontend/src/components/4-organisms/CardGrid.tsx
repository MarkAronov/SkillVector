import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { List, ListItem } from "../2-atoms/List";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "../3-molecules/Card";

/**
 * CardGrid Component
 *
 * A data-driven, responsive grid layout system that automatically generates cards.
 * Accepts an array of data and renders cards based on the content structure.
 *
 * SPACING SYSTEM (NO MANUAL ADJUSTMENTS NEEDED):
 * - Section spacing: Wrap CardGrid in <Section> for automatic mb-8 lg:mb-12 margins
 * - Card padding: CardContent automatically applies p-8 lg:p-12 (32px mobile, 48px desktop)
 * - Grid gaps: Controlled by gap prop (sm=16px, md=24px, lg=32px, xl=48px)
 * - No default margin: CardGrid has NO margin - Section component handles all section spacing
 *
 * SMART HEIGHT BEHAVIOR:
 * - 1-column layouts (maxColumns={1}): Cards fit content by default (stretchCards=false)
 * - Multi-column layouts (maxColumns={2|3}): Cards have equal heights by default (stretchCards=true)
 * - Override: Set stretchCards explicitly to override automatic behavior
 *
 * CUSTOM CONTENT STANDARDS (CRITICAL - MUST FOLLOW):
 * When using customContent instead of the default renderer, you MUST maintain consistency:
 *
 * 1. WIDTH & LAYOUT:
 *    - Use noWrapper: true and provide your own <Card fill>
 *    - ALWAYS add `fill` prop to Card to match grid cell width
 *    - Example: <Card fill><CardContent>...</CardContent></Card>
 *
 * 2. PADDING:
 *    - Use <CardContent> which applies standard p-8 lg:p-12
 *    - Never use custom padding classes on Card wrapper
 *    - CardContent handles all internal spacing automatically
 *
 * 3. TYPOGRAPHY:
 *    - Headings: Use <Heading variant="section|subsection|card">
 *    - Body text: Use <Text variant="body"> (text-sm lg:text-base)
 *    - Lead text: Use <Text variant="lead"> (text-base lg:text-xl)
 *    - Small text: Use <Text variant="small"> (text-xs lg:text-sm)
 *    - Muted text: Use <Text variant="muted">
 *    - NEVER use inline text size classes (text-sm, text-base, etc.)
 *
 * 4. SPACING:
 *    - Section headings: mb-4 (standard)
 *    - Body paragraphs: mb-4 (standard)
 *    - Lead text: mb-6 (more breathing room)
 *    - Buttons/CTAs: mt-auto (for bottom alignment in flex layouts)
 *
 * 5. CORRECT PATTERN:
 *    items={[{
 *      noWrapper: true,
 *      customContent: (
 *        <Card fill>
 *          <CardContent className="flex flex-col gap-6">
 *            <Heading variant="section" className="mb-4">Title</Heading>
 *            <Text variant="body" className="mb-4">Description</Text>
 *            <Text variant="lead" className="mb-6">Lead text</Text>
 *          </CardContent>
 *        </Card>
 *      )
 *    }]}
 *
 * 6. INCORRECT PATTERNS (DO NOT USE):
 *    ❌ <Card> without fill prop (causes 932px instead of 960px width)
 *    ❌ <div className="p-4"> custom padding (inconsistent with design system)
 *    ❌ <p className="text-sm"> inline typography (breaks responsive scaling)
 *    ❌ <h3 className="text-xl"> raw HTML headings (inconsistent styling)
 *
 * Automatically adapts to viewport width:
 * - Mobile (< 768px): 1 column
 * - Tablet (768px - 1023px): 2 columns
 * - Desktop (>= 1024px): 3 columns (or maxColumns)
 *
 * Features:
 * - Data-driven card generation
 * - Responsive breakpoints
 * - Customizable gap sizes
 * - Same height or content-fit cards
 * - Configurable max columns
 * - Flexible content structure (icons, headings, text, lists, actions)
 *
 * Usage:
 * ```tsx
 * <CardGrid
 *   items={[
 *     { title: "Feature 1", description: "...", icon: <Icon /> },
 *     { title: "Feature 2", description: "..." }
 *   ]}
 *   maxColumns={2}
 * />
 * ```
 */

type GapSize = "sm" | "md" | "lg" | "xl";
type MaxColumns = 1 | 2 | 3;

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

interface CardGridBaseProps {
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

	/** Use semantic list structure */
	as?: "div" | "ul";

	/** Custom render function for card content */
	renderCard?: (item: CardGridItem) => ReactNode;

	/** Enforce default card wrapper and baseline typography for custom content */
	enforceCustomContent?: boolean;
}

type CardGridProps = CardGridBaseProps &
	Omit<ComponentProps<"div">, keyof CardGridBaseProps> &
	Omit<ComponentProps<"ul">, keyof CardGridBaseProps>;

const gapClasses: Record<GapSize, string> = {
	sm: "gap-4",
	md: "gap-6",
	lg: "gap-8",
	xl: "gap-12",
};

const columnClasses: Record<MaxColumns, string> = {
	1: "grid-cols-1",
	// Use sub-columns so the last row can be centered without breaking equal card widths.
	// 2-column layout: 4 columns with each card spanning 2.
	2: "grid-cols-1 md:grid-cols-4 md:[&>*]:col-span-2 md:[&>*:nth-last-child(1):nth-child(odd)]:col-start-2",
	// 3-column layout: md uses the same 2-col centering trick; lg uses 6 columns with each card spanning 2.
	// - remainder 1: last item starts at col 3 (center)
	// - remainder 2: last row items start at col 2 and 4 (centered pair)
	3: "grid-cols-1 md:grid-cols-4 lg:grid-cols-6 md:[&>*]:col-span-2 md:[&>*:nth-last-child(1):nth-child(odd)]:col-start-2 lg:[&>*]:col-span-2 lg:[&>*:nth-last-child(1):nth-child(3n+1)]:col-start-3 lg:[&>*:nth-last-child(2):nth-child(3n+1)]:col-start-2 lg:[&>*:nth-last-child(1):nth-child(3n+2)]:col-start-4",
};

/**
 * Default card renderer based on HowItWorksPage design
 */
function defaultCardRenderer(
	item: CardGridItem,
	enforceCustomContent: boolean,
): ReactNode {
	const customContentWrapperClassName = enforceCustomContent
		? "flex flex-col gap-6 text-sm lg:text-base [&_p]:text-sm [&_p]:lg:text-base [&_span]:text-sm [&_span]:lg:text-base [&_th]:text-xs [&_th]:lg:text-sm [&_td]:text-xs [&_td]:lg:text-sm [&_button]:text-sm [&_button]:lg:text-base [&_a]:text-sm [&_a]:lg:text-base [&>div>div>svg]:h-6 [&>div>div>svg]:w-6"
		: undefined;
	// If noWrapper is true, render customContent directly without Card wrapper
	if (item.noWrapper && item.customContent && !enforceCustomContent) {
		return item.customContent;
	}

	if (
		process.env.NODE_ENV !== "production" &&
		item.noWrapper &&
		item.customContent &&
		enforceCustomContent
	) {
		// noWrapper is ignored when enforceCustomContent is enabled
	}

	return (
		<Card aria-label={item.ariaLabel || item.title} fill>
			<CardContent centered={item.centered ?? !item.step}>
				{item.customContent ? (
					<Div className={customContentWrapperClassName}>
						{item.customContent}
					</Div>
				) : (
					<>
						{/* Step-based layout (HowItWorksPage style) */}
						{item.step && (
							<Div className="flex flex-col md:flex-row gap-6 items-start">
								{item.icon && (
									<Div className={cn("shrink-0", item.color)}>{item.icon}</Div>
								)}
								<Div className="flex-1">
									<Div className="flex items-baseline gap-3 mb-3">
										<Span className={cn("text-xl font-bold", item.color)}>
											STEP {item.step}
										</Span>
										<Heading as="h3" variant="card" className="mb-0">
											{item.title}
										</Heading>
									</Div>
									{item.description && (
										<Text variant="muted" className="mb-4">
											{item.description}
										</Text>
									)}

									{item.codeExample && (
										<Div variant="codeBlock" className="mb-4">
											<Text variant="small" className="font-mono">
												{item.codeExample.code}
											</Text>
											{item.codeExample.note && (
												<Text
													variant="small"
													className="mt-1 text-muted-foreground"
												>
													{item.codeExample.note}
												</Text>
											)}
										</Div>
									)}

									{item.tags && (
										<Div variant="codeBlock" className="space-y-2">
											<Text variant="small" className="font-semibold">
												Supported AI Providers:
											</Text>
											<Div className="flex flex-wrap gap-2">
												{item.tags.map((tag) => (
													<Span
														key={tag}
														className="px-2 py-1 bg-background rounded text-xs lg:text-sm"
													>
														{tag}
													</Span>
												))}
											</Div>
										</Div>
									)}

									{item.items && (
										<Div variant="codeBlock">
											<Text variant="small" className="font-semibold mb-2">
												Result Quality Metrics:
											</Text>
											<List variant="spaced">
												{item.items.map((listItem) => (
													<ListItem key={listItem} variant="bullet">
														<Span className="text-primary">•</Span>
														<Text variant="small">{listItem}</Text>
													</ListItem>
												))}
											</List>
										</Div>
									)}
								</Div>
							</Div>
						)}

						{/* Icon-based layout (standard card with icon) */}
						{!item.step && item.icon && (
							<>
								<Div className="mb-4 text-primary flex justify-center">
									{item.icon}
								</Div>
								<Heading variant="card" className="mb-3 text-center">
									{item.title}
								</Heading>
								{item.description && (
									<Text variant="muted" className="mb-4 text-center">
										{item.description}
									</Text>
								)}
							</>
						)}

						{/* Standard content layout (no icon) */}
						{!item.step && !item.icon && (
							<>
								<Heading variant="subsection" className="mb-3 lg:mb-4">
									{item.title}
								</Heading>

								{item.content &&
									(typeof item.content === "string" ? (
										<Text variant="small" className="mb-3">
											{item.content}
										</Text>
									) : (
										<Div className="mb-3">{item.content}</Div>
									))}

								{item.description && (
									<Text variant="muted" className="mb-4">
										{item.description}
									</Text>
								)}

								{item.subsections && (
									<Div className="space-y-3 lg:space-y-4">
										{item.subsections.map((sub) => (
											<Div key={sub.title}>
												<Text variant="subheading" className="mb-2">
													{sub.title}
												</Text>
												<Text variant="small">{sub.content}</Text>
											</Div>
										))}
									</Div>
								)}

								{item.items && (
									<List variant="spaced">
										{item.items.map((listItem) => (
											<ListItem key={listItem} variant="bullet">
												{listItem}
											</ListItem>
										))}
									</List>
								)}
							</>
						)}

						{/* Action button */}
						{item.action && (
							<Text variant="small" className="text-center">
								{item.action.isInternal ? (
									<Link
										to={item.action.href}
										variant="primary"
										className="hover:underline"
									>
										{item.action.text}
									</Link>
								) : (
									<Link
										href={item.action.href}
										variant="primary"
										external
										className="hover:underline"
									>
										{item.action.text}
									</Link>
								)}
							</Text>
						)}
					</>
				)}
			</CardContent>
		</Card>
	);
}

function CardGrid({
	items,
	children,
	maxColumns = 3,
	gap = "md",
	containerClassName,
	stretchCards,
	enforceCustomContent = false,
	as = "div",
	renderCard,
	className,
	...props
}: CardGridProps) {
	// Auto-disable stretchCards for 1-column layouts (cards should fit content)
	// For multi-column layouts, default to true (cards should align heights)
	const shouldStretch = stretchCards ?? maxColumns > 1;

	const gridClasses = cn(
		"grid",
		columnClasses[maxColumns],
		gapClasses[gap],
		shouldStretch && "auto-rows-fr", // Equal height rows when stretchCards is true
		containerClassName,
		className,
	);

	const Component = as as ElementType;
	const cardRenderer =
		renderCard ||
		((item: CardGridItem) => defaultCardRenderer(item, enforceCustomContent));

	// Support backward compatibility with children
	if (children) {
		return (
			<Component className={gridClasses} {...props}>
				{children}
			</Component>
		);
	}

	// Data-driven approach with items
	return (
		<Component className={gridClasses} {...props}>
			{items?.map((item, index) => {
				const key = item.id || item.title || index;
				return as === "ul" ? (
					<li key={key}>{cardRenderer(item)}</li>
				) : (
					<div key={key}>{cardRenderer(item)}</div>
				);
			})}
		</Component>
	);
}

/**
 * CardGridItem Component
 *
 * Optional wrapper for individual grid items when you need more control
 * over item-specific styles or behavior.
 */
interface CardGridItemBaseProps {
	/** Span multiple columns (1-3) */
	colSpan?: 1 | 2 | 3;

	/** Span multiple rows */
	rowSpan?: number;

	/** Children elements */
	children: ReactNode;

	/** Use semantic list item */
	as?: "div" | "li";
}

type CardGridItemProps = CardGridItemBaseProps &
	Omit<ComponentProps<"div">, keyof CardGridItemBaseProps> &
	Omit<ComponentProps<"li">, keyof CardGridItemBaseProps>;

function CardGridItem({
	colSpan,
	rowSpan,
	as = "div",
	className,
	children,
	...props
}: CardGridItemProps) {
	const spanClasses = cn(
		colSpan === 2 && "md:col-span-2",
		colSpan === 3 && "lg:col-span-3",
		rowSpan && `row-span-${rowSpan}`,
		className,
	);

	const Component = as as ElementType;

	return (
		<Component className={spanClasses} {...props}>
			{children}
		</Component>
	);
}

export { CardGrid, CardGridItem };
export type {
	CardGridProps,
	CardGridItemProps,
	GapSize,
	MaxColumns,
	CardGridItem as CardGridItemData,
};
