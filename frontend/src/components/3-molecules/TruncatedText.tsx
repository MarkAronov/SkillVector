import { cn } from "@/lib/utils";
import { TooltipWrapper as Tooltip } from "../2-atoms/Tooltip";

interface TruncatedTextProps {
	text: string;
	maxLength?: number;
	className?: string;
	showTooltip?: boolean;
}

export function TruncatedText({
	text,
	maxLength = 30,
	className,
	showTooltip = true,
}: TruncatedTextProps) {
	const isTruncated = text.length > maxLength;
	const displayText = isTruncated ? `${text.substring(0, maxLength)}…` : text;

	if (!showTooltip || !isTruncated) {
		return <span className={className}>{displayText}</span>;
	}

	return (
		<Tooltip content={text}>
			<span className={cn("cursor-help", className)}>{displayText}</span>
		</Tooltip>
	);
}
