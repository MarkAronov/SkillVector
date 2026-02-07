import { useState } from "react";
import { cn } from "@/lib/utils";
import { BORDERS, SPACING, TYPOGRAPHY } from "../1-ions";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import type { CodeBlockProps } from "./CodeBlock.types";

/**
 * CodeBlock Component
 *
 * Displays formatted code with syntax highlighting support and copy-to-clipboard functionality.
 *
 * Features:
 * - Responsive wrapping: Wraps on mobile while preserving code structure
 * - Horizontal scroll: Available when needed for long lines
 * - Copy button: Positioned top-right, shows feedback on click
 * - Language support: Accepts language prop for syntax highlighting classes
 *
 * Layout:
 * - Code container: Muted background with medium border radius
 * - Copy button: Absolute positioned, small elevated button
 * - Text wrapping: whitespace-pre-wrap for mobile, scroll for overflow
 *
 * Copy Behavior:
 * - Copies full code to clipboard
 * - Shows "Copied!" feedback for 2 seconds
 * - Automatically resets to "Copy" text
 */

export const CodeBlock = ({ language, code }: CodeBlockProps) => {
	// Track copy state for user feedback
	const [copied, setCopied] = useState(false);

	/**
	 * Copy code to clipboard and show feedback
	 */
	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);

		// Reset copy feedback after 2 seconds
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Div className="relative">
			{/* Code block - Allow pre to wrap on small screens while preserving whitespace, but still support horizontal scroll when desired */}
			<pre
				className={cn(
					// Colors
					"bg-muted",
					// Spacing
					SPACING.PADDING.md,
					// Borders
					BORDERS.RADIUS.md,
					// Layout
					"overflow-x-auto max-w-full w-full whitespace-pre-wrap wrap-break-word",
				)}
			>
				<code className={cn(`language-${language}`, "block w-full")}>
					{code}
				</code>
			</pre>

			{/* Copy to clipboard button */}
			<Button
				type="button"
				variant="outline"
				size="sm"
				onClick={handleCopy}
				className={cn(
					// Position
					"absolute top-2 right-2",
					// Typography
					TYPOGRAPHY.FONT_SIZE.xs,
				)}
			>
				{copied ? "Copied!" : "Copy"}
			</Button>
		</Div>
	);
};
