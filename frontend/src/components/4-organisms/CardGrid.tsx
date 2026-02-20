import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GRID, SPACING, TYPOGRAPHY } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { List, ListItem } from "../2-atoms/List";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "../3-molecules/Card";
import type {
	CardGridItem as CardGridItemData,
	CardGridItemProps,
	CardGridProps,
	ColumnCount,
	GapSize,
	MaxColumns,
	ResponsiveColumns,
} from "./CardGrid.types";

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
 * - Multi-column layouts (maxColumns={2-8}): Cards have equal heights by default (stretchCards=true)
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
 * - Desktop (>= 1024px): maxColumns (1-8)
 *
 * Or use the `columns` prop for full per-breakpoint control:
 * ```tsx
 * <CardGrid columns={{ base: 2, md: 3, lg: 6 }} />
 * ```
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

const gapClasses: Record<GapSize, string> = {
	sm: GRID.GAP.md,
	md: GRID.GAP.lg,
	lg: GRID.GAP.xl,
	xl: GRID.GAP["2xl"],
};

const baseColumnClasses: Record<MaxColumns, string> = {
	1: GRID.COLUMNS[1],
	// 2-column layout: 1 col phones, 4 sub-columns sm+ for centering
	2: `${GRID.COLUMNS[1]} sm:${GRID.COLUMNS[4]}`,
	// 3-column layout: 1 col mobile, 2 cols tablet, 3 cols desktop (direct, no sub-columns)
	3: `${GRID.COLUMNS[1]} md:${GRID.COLUMNS[2]} lg:${GRID.COLUMNS[3]}`,
	// 4-column layout: 1 col mobile, 2 cols tablet, 4 cols desktop
	4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
	// 5-column layout: 1 col mobile, 2 cols tablet, 5 cols desktop
	5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
	// 6-column layout: 1 col mobile, 2 cols tablet, 6 cols desktop
	6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-6",
	// 7-column layout: 1 col mobile, 2 cols tablet, 4 cols desktop, 7 cols xl
	7: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7",
	// 8-column layout: 1 col mobile, 2 cols tablet, 4 cols desktop, 8 cols xl
	8: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
};

/**
 * Column class lookup for each breakpoint prefix
 * Maps a column count to its Tailwind class at a given breakpoint
 */
const columnClassMap: Record<ColumnCount, string> = {
	1: "grid-cols-1",
	2: "grid-cols-2",
	3: "grid-cols-3",
	4: "grid-cols-4",
	5: "grid-cols-5",
	6: "grid-cols-6",
	7: "grid-cols-7",
	8: "grid-cols-8",
};

/**
 * Breakpoint prefixes for Tailwind responsive classes
 * "base" has no prefix (mobile-first default)
 */
const breakpointPrefixes: Record<keyof ResponsiveColumns, string> = {
	base: "",
	sm: "sm:",
	md: "md:",
	lg: "lg:",
	xl: "xl:",
	"2xl": "2xl:",
};

/**
 * Build responsive grid column classes from a ResponsiveColumns config.
 * Only generates classes for breakpoints that are explicitly specified.
 *
 * @example
 * buildResponsiveColumnClasses({ base: 2, md: 3, lg: 6 })
 * // → "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
 */
const buildResponsiveColumnClasses = (columns: ResponsiveColumns): string => {
	// Ordered breakpoints from smallest to largest
	const breakpoints: (keyof ResponsiveColumns)[] = [
		"base",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
	];

	return breakpoints
		.filter((bp) => columns[bp] !== undefined)
		.map((bp) => {
			const count = columns[bp] as ColumnCount;
			const prefix = breakpointPrefixes[bp];
			return `${prefix}${columnClassMap[count]}`;
		})
		.join(" ");
};

/**
 * Calculate if item is in incomplete last row and should be centered
 */
const getCenteringClass = (
	itemIndex: number,
	totalItems: number,
	maxColumns: MaxColumns,
	breakpoint: "base" | "md" | "lg",
): string => {
	if (maxColumns === 1) return "";

	// Determine actual column count at this breakpoint
	// For maxColumns=2: base=1, md=2 (sub-columns: 4), lg=2 (sub-columns: 4)
	// For maxColumns=3: base=1, md=2, lg=3 (direct columns, no sub-columns)
	let cols: number;
	if (breakpoint === "base") {
		cols = 1; // Mobile is always 1 column
	} else if (breakpoint === "md") {
		cols = 2; // Tablet is 2 columns for both maxColumns=2 and maxColumns=3
	} else {
		// lg breakpoint
		cols = maxColumns; // Desktop shows maxColumns
	}

	const remainder = totalItems % cols;

	// If evenly divisible, no centering needed
	if (remainder === 0) return "";

	// Check if this item is in the last incomplete row
	const isInLastRow = itemIndex >= totalItems - remainder;
	if (!isInLastRow) return "";

	// Position within the last row (0-indexed)
	const posInLastRow = itemIndex - (totalItems - remainder);

	let colStart: number;

	// For maxColumns=2, use sub-column logic (4 sub-columns, span 2 each)
	if (maxColumns === 2 && breakpoint !== "base") {
		// 4 sub-columns total, each card spans 2
		const subCols = 4;
		const offset = Math.floor((subCols - remainder * 2) / 2) + 1;
		colStart = offset + posInLastRow * 2;
	}
	// For maxColumns=3, use direct column positioning (no sub-columns)
	else if (maxColumns === 3 && breakpoint === "lg") {
		// 3 direct columns
		// 1 item: center at col 2
		// 2 items: start at col 1 (left-aligned looks better than trying to center)
		if (remainder === 1) {
			colStart = 2; // Middle column
		} else {
			return ""; // 2 items: left-align
		}
	}
	// For tablet (md) with maxColumns=3: use 2-column centering
	else if (maxColumns === 3 && breakpoint === "md") {
		// 2 columns on tablet
		if (remainder === 1) {
			colStart = 2; // Center single item
		} else {
			return ""; // 2 items fills the row
		}
	} else {
		return "";
	}

	// Apply appropriate prefix based on breakpoint
	const prefix = breakpoint === "md" ? "md:" : breakpoint === "lg" ? "lg:" : "";

	// Return the appropriate class
	if (colStart === 2) return `${prefix}col-start-2`;
	if (colStart === 3) return `${prefix}col-start-3`;
	if (colStart === 4) return `${prefix}col-start-4`;

	return "";
};

/**
 * Default card renderer based on HowItWorksPage design
 */
const defaultCardRenderer = (
	item: CardGridItemData,
	enforceCustomContent: boolean,
): ReactNode => {
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
					// Wrapper maintains h-full chain for mt-auto behavior in flex layouts
					<Div className={cn("h-full", customContentWrapperClassName)}>
						{item.customContent}
					</Div>
				) : (
					<>
						{/* Step-based layout (HowItWorksPage style) */}
						{item.step && (
							<>
								{/* Icon + STEP + Title - all inline */}
								<Div
									className={cn(
										// Layout - icon, STEP label, and title all on same line
										"flex items-baseline",
										// Spacing
										SPACING.GAP.sm,
										"mb-3",
									)}
								>
									{item.icon && (
										<Div className={cn("shrink-0", item.color)}>
											{item.icon}
										</Div>
									)}
									<Span
										className={cn(
											// Typography
											TYPOGRAPHY.FONT_SIZE.xl,
											TYPOGRAPHY.FONT_WEIGHT.bold,
											// Colors
											item.color,
										)}
									>
										STEP {item.step}
									</Span>
									<Heading as="h3" variant="card" className="mb-0">
										{item.title}
									</Heading>
								</Div>

								{/* Description - full width below title row */}
								{item.description && (
									<Text variant="muted" className="mb-4">
										{item.description}
									</Text>
								)}

								{/* Code example - full width */}
								{item.codeExample && (
									<Div variant="codeBlock" className="mb-4">
										<Text
											variant="small"
											className={TYPOGRAPHY.FONT_FAMILY.mono}
										>
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

								{/* Tags - full width */}
								{item.tags && (
									<Div variant="codeBlock" className="space-y-2">
										<Text
											variant="small"
											className={TYPOGRAPHY.FONT_WEIGHT.semibold}
										>
											Supported AI Providers:
										</Text>
										<Div
											className={cn(
												// Layout
												"flex flex-wrap",
												// Spacing
												SPACING.GAP.sm,
											)}
										>
											{item.tags.map((tag: string) => (
												<Span
													key={tag}
													className={cn(
														// Spacing
														SPACING.PADDING_X.sm,
														"py-1",
														// Colors & Effects
														"bg-background rounded",
														// Typography
														TYPOGRAPHY.FONT_SIZE.xs_sm,
													)}
												>
													{tag}
												</Span>
											))}
										</Div>
									</Div>
								)}

								{/* Items list - full width */}
								{item.items && (
									<Div variant="codeBlock">
										<Text
											variant="small"
											className={cn(
												// Typography
												TYPOGRAPHY.FONT_WEIGHT.semibold,
												// Spacing
												"mb-2",
											)}
										>
											Result Quality Metrics:
										</Text>
										<List variant="spaced">
											{item.items.map((listItem: string) => (
												<ListItem key={listItem} variant="bullet">
													<Span className="text-primary">•</Span>
													<Text variant="small">{listItem}</Text>
												</ListItem>
											))}
										</List>
									</Div>
								)}
							</>
						)}

						{/* Icon-based layout (standard card with icon) */}
						{!item.step && item.icon && (
							<>
								<Div
									className={cn(
										// Layout
										"flex justify-center",
										// Spacing
										"mb-4",
										// Colors
										"text-primary",
									)}
								>
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
										{item.subsections.map(
											(sub: { title: string; content: string }) => (
												<Div key={sub.title}>
													<Text variant="subheading" className="mb-2">
														{sub.title}
													</Text>
													<Text variant="small">{sub.content}</Text>
												</Div>
											),
										)}
									</Div>
								)}

								{item.items && (
									<List variant="spaced">
										{item.items.map((listItem: string) => (
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
};

const CardGrid = ({
	items,
	children,
	columns,
	maxColumns = 3,
	gap = "md",
	containerClassName,
	stretchCards,
	centerIncompleteRows = false,
	enforceCustomContent = false,
	as = "div",
	renderCard,
	className,
	...props
}: CardGridProps) => {
	// Determine effective max columns for stretch/centering logic
	// When using responsive columns, use the largest specified breakpoint value
	const effectiveMaxColumns: MaxColumns = columns
		? (Math.max(
				...(Object.values(columns).filter(Boolean) as number[]),
			) as MaxColumns)
		: maxColumns;

	// Auto-disable stretchCards for 1-column layouts (cards should fit content)
	// For multi-column layouts, default to true (cards should align heights)
	const shouldStretch = stretchCards ?? effectiveMaxColumns > 1;

	// Build grid column classes — responsive `columns` prop takes priority over `maxColumns`
	const columnClasses = columns
		? buildResponsiveColumnClasses(columns)
		: baseColumnClasses[maxColumns];

	const gridClasses = cn(
		"grid",
		columnClasses,
		gapClasses[gap],
		shouldStretch && "auto-rows-fr", // Equal height rows when stretchCards is true
		containerClassName,
		className,
	);

	const Component = as as ElementType;
	const cardRenderer =
		renderCard ||
		((item: CardGridItemData) =>
			defaultCardRenderer(item, enforceCustomContent));

	const totalItems = items?.length || 0;

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

				// Calculate centering for incomplete rows (only if enabled)
				// For maxColumns=2: apply from sm+ (4 sub-cols with 2-col spans)
				// For maxColumns=3: apply from md+ (2 cols tablet) and lg+ (3 cols desktop)
				// For maxColumns=4-8: centering is not auto-computed here (custom layouts can handle it)
				const mdCentering =
					centerIncompleteRows && maxColumns === 3
						? getCenteringClass(index, totalItems, maxColumns, "md")
						: "";
				const smCentering =
					centerIncompleteRows && maxColumns === 2
						? getCenteringClass(index, totalItems, 2, "md")
						: "";
				const lgCentering = centerIncompleteRows
					? getCenteringClass(index, totalItems, maxColumns, "lg")
					: "";

				// Each card spans 2 sub-columns for maxColumns=2 (sm+ only)
				// On phones (<640px), grid is 1 col so no spanning needed
				// For maxColumns=3, no spanning needed (direct grid columns)
				const spanClass = cn(
					maxColumns === 2 && `sm:col-span-2`,
					mdCentering,
					smCentering && `sm:${smCentering}`,
					lgCentering,
				);

				return as === "ul" ? (
					<ListItem key={key} className={spanClass}>
						{cardRenderer(item)}
					</ListItem>
				) : (
					<Div key={key} className={spanClass}>
						{cardRenderer(item)}
					</Div>
				);
			})}
		</Component>
	);
};

/**
 * CardGridItem Component
 *
 * Optional wrapper for individual grid items when you need more control
 * over item-specific styles or behavior.
 */
const CardGridItem = ({
	colSpan,
	rowSpan,
	as = "div",
	className,
	children,
	...props
}: CardGridItemProps) => {
	const spanClasses = cn(
		// Layout - Column spanning
		colSpan === 2 && "md:col-span-2",
		colSpan === 3 && "lg:col-span-3",
		colSpan === 4 && "lg:col-span-4",
		colSpan === 5 && "lg:col-span-5",
		colSpan === 6 && "lg:col-span-6",
		colSpan === 7 && "xl:col-span-7",
		colSpan === 8 && "xl:col-span-8",
		// Layout - Row spanning
		rowSpan && `row-span-${rowSpan}`,
		className,
	);

	const Component = as as ElementType;

	return (
		<Component className={spanClasses} {...props}>
			{children}
		</Component>
	);
};

export { CardGrid, CardGridItem };
export type {
	CardGridItemData,
	CardGridItemProps,
	CardGridProps,
	ColumnCount,
	GapSize,
	MaxColumns,
	ResponsiveColumns,
};
