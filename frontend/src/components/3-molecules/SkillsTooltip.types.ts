import type * as React from "react";

export interface SkillsTooltipProps {
	skills: string[];
	children: React.ReactNode;
	className?: string;
	delayDuration?: number;
}
