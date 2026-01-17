import * as React from "react";
import {
	Avatar as ShadcnAvatar,
	AvatarFallback as ShadcnAvatarFallback,
	AvatarImage as ShadcnAvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import "./Avatar.module.css";

/**
 * Avatar Component
 *
 * Wraps shadcn/ui Avatar with SkillVector customizations.
 * Adds nonagon (9-sided polygon) variant matching the logo shape.
 *
 * Variants:
 * - default: Standard circular avatar (from shadcn)
 * - nonagon: 9-point polygon shape matching site logo
 */

interface AvatarProps extends React.ComponentProps<typeof ShadcnAvatar> {
	variant?: "default" | "nonagon";
}

const Avatar = React.forwardRef<
	React.ElementRef<typeof ShadcnAvatar>,
	AvatarProps
>(({ className, variant = "default", ...props }, ref) => {
	return (
		<ShadcnAvatar
			ref={ref}
			className={cn(
				variant === "nonagon" && "avatar-nonagon rounded-none",
				className,
			)}
			{...props}
		/>
	);
});
Avatar.displayName = "Avatar";

// Re-export shadcn components without modification
const AvatarImage = ShadcnAvatarImage;
const AvatarFallback = ShadcnAvatarFallback;

export { Avatar, AvatarImage, AvatarFallback, type AvatarProps };
