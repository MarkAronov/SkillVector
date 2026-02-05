export interface ReleaseCardProps {
	version: string;
	date: string;
	changes: string[];
	url: string;
	isPrerelease: boolean;
	isLatest?: boolean;
}
