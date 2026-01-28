import { cn } from "@/lib/utils";
import { CURSOR } from "../1-ions";
import { Tooltip, TooltipContent, TooltipTrigger } from "../2-atoms/Tooltip";

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
		<Tooltip delayDuration={200}>
			<TooltipTrigger asChild>
				<span className={cn(CURSOR.help, className)}>{displayText}</span>
			</TooltipTrigger>
			<TooltipContent>{text}</TooltipContent>
		</Tooltip>
	);
}
