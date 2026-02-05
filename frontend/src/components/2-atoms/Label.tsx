import { Label as ShadcnLabel } from "@/components/ui/label";
import type { ComponentProps } from "react";

/**
 * Label Component
 *
 * Form label element for accessibility and usability.
 * Re-exports shadcn/ui Label with proper semantics.
 *
 * Features:
 * - Proper htmlFor association with inputs
 * - Disabled state styling
 * - Screen reader support
 *
 * Usage:
 * ```tsx
 * <Label htmlFor="email">Email Address</Label>
 * <Input id="email" type="email" />
 * ```
 */

export { ShadcnLabel as Label };
export type LabelProps = ComponentProps<typeof ShadcnLabel>;
