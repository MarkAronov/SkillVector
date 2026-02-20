/**
 * Formatting utilities for dates, sizes, and data visualization
 */

/**
 * Format repository size from KB to human-readable units
 * @param sizeKB - Size in kilobytes
 * @returns Formatted size string with appropriate unit
 */
export const formatRepoSize = (sizeKB: number): string => {
	if (sizeKB >= 1024 * 1024) return `${(sizeKB / (1024 * 1024)).toFixed(1)} GB`;
	if (sizeKB >= 1024) return `${(sizeKB / 1024).toFixed(1)} MB`;
	return `${sizeKB} KB`;
};

/**
 * Format date to a short human-readable format (e.g., "Jan 15, 2024")
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 */
export const formatShortDate = (dateString: string | Date): string => {
	return new Date(dateString).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

/**
 * Format date to a compact format without year (e.g., "Jan 15")
 * @param dateString - ISO date string or Date object
 * @returns Formatted date string
 */
export const formatCompactDate = (dateString: string | Date): string => {
	return new Date(dateString).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
};

/**
 * Convert language byte totals to sorted percentages
 * @param languages - Record of language names to byte counts
 * @returns Array of language data with percentages sorted by usage
 */
export const formatLanguages = (
	languages: Record<string, number>,
): { name: string; percentage: number; bytes: number }[] => {
	const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
	if (total === 0) return [];

	return Object.entries(languages)
		.map(([name, bytes]) => ({
			name,
			// Keep full precision for stable bar width math on small screens
			percentage: (bytes / total) * 100,
			bytes,
		}))
		.sort((a, b) => b.bytes - a.bytes);
};

/**
 * Format percentage for display with appropriate precision
 * @param value - Percentage value (0-100)
 * @returns Formatted percentage string
 */
export const formatLanguagePercentage = (value: number): string => {
	const rounded = Math.round(value * 10) / 10;
	return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
};

/**
 * Truncate Git SHA to short format (7 characters)
 * @param sha - Full Git commit SHA
 * @returns Short SHA (7 chars)
 */
export const formatShortSha = (sha: string): string => {
	return sha.substring(0, 7);
};
