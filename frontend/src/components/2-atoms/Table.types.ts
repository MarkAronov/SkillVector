import type { ComponentProps } from "react";
import type { TableCell as ShadcnTableCell } from "@/components/ui/table";

export interface TableCellProps extends ComponentProps<typeof ShadcnTableCell> {
	variant?: "default" | "code" | "muted";
}
