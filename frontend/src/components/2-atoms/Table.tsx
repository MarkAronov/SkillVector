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

/**
 * Table Components
 *
 * Wraps shadcn/ui Table with SkillVector customizations.
 * Adds variant support for different cell styles.
 */

type TableProps = ComponentProps<typeof ShadcnTable>;

const Table = ShadcnTable;
const TableHeader = ShadcnTableHeader;
const TableBody = ShadcnTableBody;
const TableRow = ShadcnTableRow;
const TableHead = ShadcnTableHead;
const TableFooter = ShadcnTableFooter;
const TableCaption = ShadcnTableCaption;

// Custom TableCell with variant support
interface TableCellProps extends ComponentProps<typeof ShadcnTableCell> {
	variant?: "default" | "code" | "muted";
}

const cellVariants = {
	default: "",
	code: "font-mono text-xs lg:text-sm",
	muted: "text-muted-foreground",
};

function TableCell({
	className,
	variant = "default",
	...props
}: TableCellProps) {
	return (
		<ShadcnTableCell
			className={cn(cellVariants[variant], className)}
			{...props}
		/>
	);
}

export {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
	TableFooter,
	TableCaption,
	type TableProps,
	type TableCellProps,
};
