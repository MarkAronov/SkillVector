import type { ComponentProps } from "react";
import { Label as ShadcnLabel } from "@/components/ui/label";

/**
 * Label Component
 *
 * Re-exports shadcn/ui Label.
 */

export { ShadcnLabel as Label };
export type LabelProps = ComponentProps<typeof ShadcnLabel>;
