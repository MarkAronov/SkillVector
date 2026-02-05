import type { LucideIcon } from "lucide-react";

export interface StatCardProps {
	icon: LucideIcon;
	iconColor: string;
	bgColor: string;
	label: string;
	value: string | number;
	valueColor?: string;
}
