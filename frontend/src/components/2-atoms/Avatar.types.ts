import type { Avatar as ShadcnAvatar } from "@/components/ui/avatar";
import type * as React from "react";

export interface AvatarProps extends React.ComponentProps<typeof ShadcnAvatar> {
	variant?: "default" | "nonagon";
}
