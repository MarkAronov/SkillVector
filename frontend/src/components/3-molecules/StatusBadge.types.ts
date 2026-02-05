export type BadgeStatus =
	| "ready"
	| "soon"
	| "planned"
	| "beginner"
	| "intermediate"
	| "advanced";

export interface StatusBadgeProps {
	status: BadgeStatus;
	label?: string;
	className?: string;
}
