import type { ComponentProps } from "react";
import {
	Table as ShadcnTable,
	TableBody as ShadcnTableBody,
	TableCaption as ShadcnTableCaption,
	TableCell as ShadcnTableCell,
	TableFooter as ShadcnTableFooter,
	TableHead as ShadcnTableHead,
	TableHeader as ShadcnTableHeader,
	TableRow as ShadcnTableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TYPOGRAPHY } from "../1-ions";
import type { TableCellProps } from "./Table.types";

/**
 * Table Components
 *
 * Semantic table elements with SkillVector styling.
 * Wraps shadcn/ui Table and adds custom cell variants.
 */

// Base table props type
type TableProps = ComponentProps<typeof ShadcnTable>;

// Re-export shadcn table components without modification
const Table = ShadcnTable;
const TableHeader = ShadcnTableHeader;
const TableBody = ShadcnTableBody;
const TableRow = ShadcnTableRow;
const TableHead = ShadcnTableHead;
const TableFooter = ShadcnTableFooter;
const TableCaption = ShadcnTableCaption;

/**
 * TableCell variant styles
 * - default: Standard table cell
 * - code: Monospace font for code/data (12px → 14px)
 * - muted: De-emphasized text color
 */
const cellVariants = {
	// Default cell - standard text
	default: "",

	// Code cell - monospace for technical data
	code: TYPOGRAPHY.PRESETS.code,

	// Muted cell - secondary information
	muted: "text-muted-foreground",
};

/**
 * TableCell with variant support
 *
 * Enhanced table cell with styling variants.
 * Use 'code' for technical data, 'muted' for less important info.
 */
const TableCell = ({
	className,
	variant = "default",
	...props
}: TableCellProps) => {
	// Get the variant styling
	const variantClass = cellVariants[variant];

	// Combine variant with custom classes
	const combinedClassName = cn(variantClass, className);

	return <ShadcnTableCell className={combinedClassName} {...props} />;
};

export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
	type TableCellProps,
	type TableProps,
};
