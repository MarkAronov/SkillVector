import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BORDERS, SHADOWS } from "../1-ions";
import { Glass } from "../1-ions/Glass";

/**
 * Card Component
 *
 * Separation of Concerns:
 * - Glass: Provides ONLY glassmorphism effects (backdrop-filter, background blur, noise texture)
 * - Card: Provides ALL depth styling (borders, shadows, padding, layout structure)
 *
 * This ensures clear responsibility boundaries and prevents style conflicts.
 *
 * Spacing System:
 * - Card padding is defined once using CSS custom properties
 * - All subcomponents reference the same spacing values
 * - Modify spacing globally by changing the CSS variables
 */

// Card spacing constants - single source of truth
const CARD_PADDING = "2rem"; // 32px base (p-8), 3rem (48px) on lg+ breakpoint (lg:p-12)
const CARD_SPACING = {
	padding: CARD_PADDING,
	paddingX: "px-8 lg:px-12",
	paddingY: "py-8 lg:py-12",
	paddingTop: "pt-8 lg:pt-12",
	paddingBottom: "pb-8 lg:pb-12",
};

type CardVariant = "default" | "hover" | "feature";

interface CardProps extends ComponentProps<"div"> {
	variant?: CardVariant;
	/** Pass `constrain` to center and limit max width via Glass */
	constrain?: boolean;
	/** Make the card stretch to fill available height (useful in grids) */
	fill?: boolean;
	/** Apply a min-height class to standardize heights (e.g., 'min-h-[160px]') */
	minHeightClass?: string;
	/** Optional width constraint override to pass to Glass */
	maxWidthClass?: string;
}

const variantClasses: Record<CardVariant, string> = {
	default: "",
	hover: "",
	feature: "",
};

function Card({
	className,
	variant = "default",
	children,
	fill = false,
	minHeightClass,
	...props
}: CardProps) {
	const fillClass = fill ? "h-full" : "";
	const minHClass = minHeightClass ?? "";

	return (
		<Glass
			variant="card"
			data-slot="card"
			className={cn(
				"text-card-foreground flex flex-col",
				"backdrop-blur-sm bg-white/40 dark:bg-black/30",
				BORDERS.RADIUS["2xl"],
				`${SHADOWS.lg} shadow-black/5 dark:shadow-black/20`,
				"border border-white/20 dark:border-white/10",
				"relative overflow-hidden z-10",
				variantClasses[variant],
				fillClass,
				minHClass,
				className,
			)}
			{...props}
		>
			{children}
		</Glass>
	);
}

interface CardHeaderProps extends ComponentProps<"div"> {
	icon?: ReactNode;
	iconColor?: string;
}

function CardHeader({
	className,
	icon,
	iconColor = "text-primary",
	children,
	...props
}: CardHeaderProps) {
	if (icon) {
		return (
			<div
				data-slot="card-header"
				className={cn(CARD_SPACING.paddingY, CARD_SPACING.paddingX, className)}
				{...props}
			>
				<div className="flex flex-col items-center text-center gap-4">
					<div className={cn("shrink-0", iconColor)}>{icon}</div>
					<div className="w-full">{children}</div>
				</div>
			</div>
		);
	}

	return (
		<div
			data-slot="card-header"
			className={cn(CARD_SPACING.paddingX, CARD_SPACING.paddingTop, className)}
			{...props}
		>
			{children}
		</div>
	);
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={cn("leading-none font-semibold", className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-muted-foreground text-xs lg:text-sm", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: ComponentProps<"div">) {
	return (
		<div data-slot="card-action" className={cn("mt-2", className)} {...props} />
	);
}

function CardContent({
	className,
	centered = false,
	...props
}: ComponentProps<"div"> & { centered?: boolean }) {
	return (
		<div
			data-slot="card-content"
			className={cn(
				"p-8 lg:p-12 flex flex-col h-full",
				centered && "text-center",
				className,
			)}
			{...props}
		/>
	);
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-footer"
			className={cn(
				CARD_SPACING.paddingX,
				CARD_SPACING.paddingBottom,
				"flex items-center",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
	type CardProps,
	type CardVariant,
	type CardHeaderProps,
};
