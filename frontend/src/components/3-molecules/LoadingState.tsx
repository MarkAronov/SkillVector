import { Div } from "../2-atoms/Div";
import { Text } from "../2-atoms/Text";

interface LoadingStateProps {
	message?: string;
	size?: "sm" | "md" | "lg";
	className?: string;
}

const sizeMap = {
	sm: "h-6 w-6 border-2",
	md: "h-8 w-8 border-4",
	lg: "h-12 w-12 border-4",
};

export const LoadingState = ({
	message = "Loading...",
	size = "md",
	className = "",
}: LoadingStateProps) => {
	return (
		<Div variant="center" className={`py-8 ${className}`}>
			<Div className="flex flex-col items-center gap-8">
				<Div
					className={`inline-block animate-spin rounded-full border-solid border-primary border-r-transparent ${sizeMap[size]}`}
				/>
				<Text variant="muted">{message}</Text>
			</Div>
		</Div>
	);
};
