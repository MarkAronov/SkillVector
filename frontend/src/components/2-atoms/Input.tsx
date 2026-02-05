import { Input as ShadcnInput } from "@/components/ui/input";

/**
 * Input Component
 *
 * Text input field for forms and user data entry.
 * Re-exports shadcn/ui Input with SkillVector customizations.
 *
 * Features:
 * - Consistent border and focus states
 * - Disabled state styling
 * - Error state with aria-invalid support
 * - File input variant support
 *
 * Usage:
 * ```tsx
 * <Input type="text" placeholder="Enter name" />
 * <Input type="email" aria-invalid={hasError} />
 * ```
 */

export { ShadcnInput as Input };

