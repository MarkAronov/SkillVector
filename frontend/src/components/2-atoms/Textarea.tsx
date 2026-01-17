import type { ComponentProps } from "react";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";

/**
 * Textarea Component
 *
 * Re-exports shadcn/ui Textarea.
 */

export { ShadcnTextarea as Textarea };
export type TextareaProps = ComponentProps<typeof ShadcnTextarea>;
