import { BORDERS, SIZING } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Text } from "../2-atoms/Text";

interface LoadingStateProps {
	message?: string;
	size?: "sm" | "md" | "lg";
	className?: string;
}

const sizeMap = {
	sm: `${SIZING.SPINNER.md} ${BORDERS.WIDTH.thin}`,
	md: `${SIZING.SPINNER.lg} ${BORDERS.WIDTH.thick}`,
	lg: `${SIZING.SPINNER.xl} ${BORDERS.WIDTH.thick}`,
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
