import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BORDERS, SPACING, TYPOGRAPHY } from "../1-ions";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { ScrollAreaScrollbar } from "../2-atoms/ScrollArea";
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
	 * Copy code to clipboard and show feedback.
	 * Uses navigator.clipboard with an execCommand fallback for mobile browsers
	 * that don't support the async clipboard API.
	 * Blurs the button after tap to prevent the stuck-hover issue on touch devices.
	 */
	const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			// Modern clipboard API — works on HTTPS desktop & most mobile browsers
			await navigator.clipboard.writeText(code);
		} catch {
			// Fallback for mobile browsers that block navigator.clipboard
			const textarea = document.createElement("textarea");
			textarea.value = code;
			// Keep off-screen so it doesn't cause a layout shift
			textarea.style.cssText =
				"position:fixed;top:-9999px;left:-9999px;opacity:0";
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		}

		setCopied(true);

		// Blur the button to release the stuck :hover state on touch devices
		(e.currentTarget as HTMLButtonElement).blur();

		// Reset copy feedback after 3 seconds
		setTimeout(() => setCopied(false), 3000);
	};

	return (
		// Outer grid div: display:grid constrains the block to parent width (grid tracks are
		// sized by the parent, not by children) and provides the positioning context for the
		// Copy button. It must NOT have overflow-hidden so the button is never clipped.
		<Div className="relative grid">
			{/* ScrollAreaPrimitive.Root: overflow-hidden clips the <pre> inside the
			    grid-constrained track so it cannot push the layout wider */}
			<ScrollAreaPrimitive.Root
				className={cn("overflow-hidden", BORDERS.RADIUS.md)}
			>
				{/* Viewport: Radix sets overflow:scroll here; whitespace-pre lets long lines
				    overflow horizontally so the horizontal scrollbar actually activates */}
				<ScrollAreaPrimitive.Viewport className="w-full rounded-[inherit]">
					<pre
						className={cn(
							// Colors
							"bg-muted",
							// Spacing — pr-20 (80px) reserves space so code never slides under the
							// absolutely-positioned Copy button; pb-5 clears the horizontal scrollbar
							SPACING.PADDING.md,
							"pr-20 pb-5",
							// Preserve formatting — horizontal overflow is handled by ScrollArea
							"whitespace-pre",
						)}
					>
						<code className={cn(`language-${language}`, "block")}>{code}</code>
					</pre>
				</ScrollAreaPrimitive.Viewport>

				{/* Horizontal scrollbar — atom's auto-fade thumb, positioned bottom of Root */}
				<ScrollAreaScrollbar orientation="horizontal" />

				<ScrollAreaPrimitive.Corner />
			</ScrollAreaPrimitive.Root>

			{/* Copy button — sibling of Root, not inside overflow-hidden, so it is never clipped.
			    Positioned absolute relative to the outer grid div. */}
			<Button
				type="button"
				variant="default"
				size="sm"
				// touch-manipulation removes the 300ms tap delay on mobile
				className={cn(
					"touch-manipulation",
					// Position
					"absolute top-2 right-2 z-10",
					// Typography
					TYPOGRAPHY.FONT_SIZE.xs,
				)}
				onClick={handleCopy}
			>
				{copied ? "Copied!" : "Copy"}
			</Button>
		</Div>
	);
};
