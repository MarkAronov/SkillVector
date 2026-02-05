import type { ComponentProps } from "react";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";

/**
 * Textarea Component
 *
 * Multi-line text input for longer form content.
 * Re-exports shadcn/ui Textarea with SkillVector customizations.
 *
 * Features:
 * - Automatic resize disabled by default (add resize class to enable)
 * - Consistent border and focus states
 * - Disabled state styling
 * - Error state with aria-invalid support
 * - Minimum height of 80px for comfortable input
 *
 * Usage:
 * ```tsx
 * <Textarea placeholder="Enter your message" rows={5} />
 * <Textarea aria-invalid={hasError} className="resize" />
 * ```
 */

export { ShadcnTextarea as Textarea };
export type TextareaProps = ComponentProps<typeof ShadcnTextarea>;
