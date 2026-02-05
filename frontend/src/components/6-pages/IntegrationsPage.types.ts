import type { ReactNode } from "react";

export type Integration = {
	icon: ReactNode;
	title: string;
	description: string;
	status: "ready" | "soon" | "planned";
	links?: {
		docs?: string;
		github?: string;
		internal?: string;
	};
};

export type IntegrationCategory = {
	icon: ReactNode;
	title: string;
	description: string;
	integrations: Integration[];
};
