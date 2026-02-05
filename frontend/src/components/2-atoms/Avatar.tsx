import {
	Avatar as ShadcnAvatar,
	AvatarFallback as ShadcnAvatarFallback,
	AvatarImage as ShadcnAvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import * as React from "react";
import "./Avatar.css";
import type { AvatarProps } from "./Avatar.types";

/**
 * Avatar Component
 *
 * User profile picture with shape variants.
 * Wraps shadcn/ui Avatar with SkillVector-specific customizations.
 */

/**
 * Variant styles
 * - default: Standard circular avatar (most common)
 * - nonagon: 9-sided polygon matching the site logo (unique!)
 */

const Avatar = React.forwardRef<
	React.ElementRef<typeof ShadcnAvatar>,
	AvatarProps
>(({ className, variant = "default", ...props }, ref) => {
	// Apply nonagon styling if requested
	const variantClassName =
		variant === "nonagon" ? "avatar-nonagon rounded-none" : "";

	// Combine variant styling with custom classes
	const combinedClassName = cn(variantClassName, className);

	return <ShadcnAvatar ref={ref} className={combinedClassName} {...props} />;
});

Avatar.displayName = "Avatar";

// Re-export shadcn components without modification
const AvatarImage = ShadcnAvatarImage;
const AvatarFallback = ShadcnAvatarFallback;

export { Avatar, AvatarFallback, AvatarImage, type AvatarProps };

