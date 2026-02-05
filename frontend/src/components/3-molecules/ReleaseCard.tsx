import { Calendar, ExternalLink, GitCommit, Github, Tag } from "lucide-react";
import type React from "react";
import { TYPOGRAPHY } from "../1-ions";
import { Badge } from "../2-atoms/Badge";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { List, ListItem } from "../2-atoms/List";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "./Card";
import type { ReleaseCardProps } from "./ReleaseCard.types";

const parseMarkdownLinks = (
	text: string,
	idx: number,
): (string | React.ReactElement)[] => {
	const parts: (string | React.ReactElement)[] = [];
	let lastIndex = 0;

	// Combined regex to match markdown links, plain URLs, and @mentions
	const combinedRegex =
		/\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s]+)|@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)/g;
	let match: RegExpExecArray | null = null;

	match = combinedRegex.exec(text);
	while (match !== null) {
		// Add text before the link
		if (match.index > lastIndex) {
			parts.push(text.substring(lastIndex, match.index));
		}

		// Check if it's a markdown link, plain URL, or @mention
		if (match[1] && match[2]) {
			// Markdown link [text](url)
			parts.push(
				<Link
					key={`link-${idx}-${match.index}`}
					href={match[2]}
					external
					variant="primary"
					className={`inline-flex items-center gap-1 ${TYPOGRAPHY.FONT_WEIGHT.medium}`}
				>
					{match[1]}
					<ExternalLink className="h-3 w-3" />
				</Link>,
			);
		} else if (match[3]) {
			// Plain URL
			const url = match[3];
			const displayUrl = url.length > 50 ? `${url.substring(0, 47)}...` : url;
			parts.push(
				<Link
					key={`link-${idx}-${match.index}`}
					href={url}
					external
					variant="primary"
					className={`inline-flex items-center gap-1 ${TYPOGRAPHY.FONT_WEIGHT.medium} break-all`}
				>
					{displayUrl}
					<ExternalLink className="h-3 w-3" />
				</Link>,
			);
		} else if (match[4]) {
			// @mention (GitHub username)
			const username = match[4];
			parts.push(
				<Link
					key={`mention-${idx}-${match.index}`}
					href={`https://github.com/${username}`}
					external
					variant="primary"
					className={`inline-flex items-center gap-1 ${TYPOGRAPHY.FONT_WEIGHT.medium}`}
				>
					@{username}
					<ExternalLink className="h-3 w-3" />
				</Link>,
			);
		}

		lastIndex = match.index + match[0].length;
		match = combinedRegex.exec(text);
	}

	// Add remaining text after last link
	if (lastIndex < text.length) {
		parts.push(text.substring(lastIndex));
	}

	// If no links found, just use the original text
	return parts.length > 0 ? parts : [text];
};

export const ReleaseCard: React.FC<ReleaseCardProps> = ({
	version,
	date,
	changes,
	url,
	isPrerelease,
	isLatest = false,
}) => {
	return (
		<Card variant="hover" fill>
			<CardContent className="relative">
				{/* Header */}
				<Div className="flex items-start gap-4 mb-6 pb-6">
					<Div className="flex items-start gap-4 flex-1">
						{/* Icon */}
						<Div
							className={`p-3 rounded-xl shrink-0 ${isPrerelease ? "bg-amber-500/10" : "bg-primary/10"
								}`}
						>
							<Tag
								className={`h-6 w-6 ${isPrerelease ? "text-amber-500" : "text-primary"
									}`}
							/>
						</Div>

						{/* Version Info */}
						<Div className="flex-1 min-w-0">
							<Div className="flex flex-wrap items-center gap-2 mb-2">
								<Heading as="h2" variant="card">
									v{version}
								</Heading>
								{isPrerelease && (
									<Badge
										variant="outline"
										className="text-amber-500 border-amber-500/20 bg-amber-500/10"
									>
										Pre-release
									</Badge>
								)}
								{isLatest && !isPrerelease && (
									<Badge
										variant="default"
										className="bg-green-500 text-white border-green-500"
									>
										Latest
									</Badge>
								)}
							</Div>
							<Div className="flex items-center gap-2 text-muted-foreground">
								<Calendar className="h-4 w-4" />
								<Text variant="small">
									{new Date(date).toLocaleDateString("en-US", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</Text>
								<Span className="text-muted-foreground/50">•</Span>
								<Text variant="small">
									{changes.length} {changes.length === 1 ? "change" : "changes"}
								</Text>
							</Div>
						</Div>
					</Div>

					{/* GitHub Icon - Right Corner */}
					<Link
						href={url}
						external
						className="p-2 rounded-lg hover:bg-accent transition-colors group shrink-0"
					>
						<Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
					</Link>
				</Div>

				{/* Changes List */}
				<List variant="spaced">
					{changes.map((change) => {
						const content = parseMarkdownLinks(change, changes.indexOf(change));

						return (
							<ListItem variant="bullet" key={`${version}-${change}`}>
								<GitCommit className="h-5 w-5 text-primary shrink-0 mt-0.5" />
								<Text variant="muted" className="flex-1 leading-relaxed">
									{content}
								</Text>
							</ListItem>
						);
					})}
				</List>
			</CardContent>
		</Card>
	);
};
