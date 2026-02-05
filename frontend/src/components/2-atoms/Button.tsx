import {
	Button as ShadcnButton,
	buttonVariants as shadcnButtonVariants,
} from "@/components/ui/button";

/**
 * Button Component
 *
 * Interactive button element for actions and navigation.
 * Re-exports shadcn/ui Button with SkillVector's customizations.
 *
 * Variants available:
 * - default: Primary action button
 * - destructive: Dangerous actions (delete, remove)
 * - outline: Secondary actions with border
 * - secondary: Muted secondary actions
 * - ghost: Minimal button without background
 * - link: Text-only button styled like a link
 *
 * Sizes available:
 * - sm: Small button (compact)
 * - default: Standard button size
 * - lg: Large button (prominent)
 * - icon: Square button for icons only
 */

export { ShadcnButton as Button, shadcnButtonVariants as buttonVariants };
