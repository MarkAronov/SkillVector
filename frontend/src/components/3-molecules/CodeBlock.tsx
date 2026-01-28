import { useState } from "react";
import { BORDERS } from "../1-ions";

interface CodeBlockProps {
	language: string;
	code: string;
}

export const CodeBlock = ({ language, code }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative">
			{/* Allow pre to wrap on small screens while preserving whitespace, but still support horizontal scroll when desired */}
			<pre
				className={`bg-muted p-4 ${BORDERS.RADIUS.md} overflow-x-auto max-w-full w-full whitespace-pre-wrap wrap-break-word`}
			>
				<code className={`language-${language} block w-full`}>{code}</code>
			</pre>
			<button
				type="button"
				onClick={handleCopy}
				className={`absolute top-2 right-2 px-2 py-1 text-xs bg-background border ${BORDERS.RADIUS.sm} hover:bg-muted`}
			>
				{copied ? "Copied!" : "Copy"}
			</button>
		</div>
	);
};
