import type { ReactNode } from "react";

export type CookieCategory = {
	icon: ReactNode;
	title: string;
	description: string;
	cookies: {
		name: string;
		purpose: string;
		duration: string;
	}[];
};
