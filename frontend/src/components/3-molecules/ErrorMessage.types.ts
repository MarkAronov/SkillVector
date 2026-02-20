export interface ErrorMessageProps {
	message: string;
	title?: string;
	variant?: "error" | "warning" | "info";
	className?: string;
	children?: React.ReactNode;
}
