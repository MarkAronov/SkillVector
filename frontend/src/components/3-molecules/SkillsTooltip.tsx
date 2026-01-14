import type * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../2-atoms/Badge";
import { Glass } from "../1-ions/Glass";
import { Tooltip, TooltipContent, TooltipTrigger } from "../2-atoms/Tooltip";

interface SkillsTooltipProps {
	skills: string[];
	children: React.ReactNode;
	className?: string;
	delayDuration?: number;
}

export function SkillsTooltip({
	skills,
	children,
	className,
	delayDuration = 200,
}: SkillsTooltipProps) {
	return (
		<Tooltip delayDuration={delayDuration}>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent asChild>
				<Glass
					variant="card"
					className={cn("px-3 py-2 max-w-xs z-[9999]", className)}
				>
					<div className="flex flex-wrap gap-1.5">
						{skills.map((skill, index) => (
							<Badge
								key={`${skill}-${index}`}
								variant="secondary"
								className="text-xs"
							>
								{skill}
							</Badge>
						))}
					</div>
				</Glass>
			</TooltipContent>
		</Tooltip>
	);
}
