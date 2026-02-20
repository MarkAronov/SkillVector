import type * as React from "react";
import type { Avatar as ShadcnAvatar } from "@/components/ui/avatar";

export interface AvatarProps extends React.ComponentProps<typeof ShadcnAvatar> {
	variant?: "default" | "nonagon";
}
