import type { PersonSearchResult } from "@/types/search.types";
import { Avatar, AvatarFallback } from "../2-atoms/Avatar";
import { Badge } from "../2-atoms/Badge";
import { Link } from "../2-atoms/Link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../2-atoms/Tooltip";
import { Card } from "./Card";
import { SkillsTooltip } from "./SkillsTooltip";
import { TruncatedText } from "./TruncatedText";

interface PersonCardProps {
	person: PersonSearchResult;
	view?: "grid" | "row";
}

export function PersonCard({ person, view = "grid" }: PersonCardProps) {
	const p = person.person;

	// Helper to display experience
	const expYears =
		(p.experience_years as unknown as number) ||
		(p.experience as unknown as number) ||
		0;

	// Normalize skills into a flat array regardless of incoming shape
	const skillsArray: string[] = (() => {
		const raw = p.skills as unknown;
		if (!raw) return [];
		if (typeof raw === "string") {
			return raw
				.split(/[;,]/)
				.map((s) => s.trim())
				.filter(Boolean);
		}
		if (Array.isArray(raw)) {
			return raw
				.flatMap((s) => (typeof s === "string" ? s.split(/[;,]/) : []))
				.map((s) => s.trim())
				.filter(Boolean);
		}
		return [];
	})();

	// Relevance badge classes based on score (low: red, mid: orange, high: green)
	const relevanceClass =
		person.score >= 0.66
			? "bg-success/10 text-success border-success/30 h-6 py-1"
			: person.score >= 0.33
				? "bg-warning/10 text-warning border-warning/30 h-6 py-1"
				: "bg-destructive/10 text-destructive border-destructive/30 h-6 py-1";

	// derive initials for avatar (used in both grid and row views)
	const initials = (p.name || "U")
		.split(" ")
		.map((s) => s?.[0])
		.filter(Boolean)
		.slice(0, 2)
		.join("")
		.toUpperCase();

	if (view === "row") {
		return (
			<Card className="hover:shadow-md transition-shadow">
				<div className="bg-linear-to-r from-primary/5 to-primary/10 h-20 -m-6 mb-2 rounded-t-lg" />
				<div className="p-6 -mt-16">
					<div className="flex gap-4">
						{/* Avatar */}
						<Avatar variant="nonagon" className="w-16 h-16">
							<AvatarFallback className="bg-primary dark:bg-primary text-primary-foreground font-semibold">
								{initials}
							</AvatarFallback>
						</Avatar>
						{/* Content */}
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-4">
								<div className="min-w-0 flex-1">
									<h3 className="font-semibold text-base leading-tight truncate">
										<TruncatedText text={p.name || "Unknown"} maxLength={25} />
									</h3>
									<p className="text-sm text-muted-foreground mt-1 truncate">
										<TruncatedText
											text={p.role || "No role specified"}
											maxLength={30}
										/>
									</p>
									{(p.location || expYears > 0) && (
										<p className="text-xs text-muted-foreground mt-2 truncate">
											<TruncatedText
												text={[
													p.location,
													expYears > 0 ? `${expYears} years experience` : null,
												]
													.filter(Boolean)
													.join(" · ")}
												maxLength={35}
											/>
										</p>
									)}
								</div>
								{person.score > 0 && (
									<div className="hidden md:flex shrink-0">
										<Badge
											variant="default"
											className={`text-xs ${relevanceClass}`}
										>
											{(person.score * 100).toFixed(0)}%
										</Badge>
									</div>
								)}
							</div>

							{/* Skills */}
							{skillsArray.length > 0 && (
								<div className="mt-3 flex flex-wrap gap-1 items-center">
									{skillsArray.slice(0, 5).map((skill: string) => {
										const isTruncated = skill.length > 10;
										const badgeContent = isTruncated
											? `${skill.substring(0, 10)}…`
											: skill;

										const badge = (
											<Badge
												variant="secondary"
												className="text-xs truncate max-w-20 h-6 py-1 select-none"
											>
												{badgeContent}
											</Badge>
										);

										if (isTruncated) {
											return (
												<Tooltip key={skill}>
													<TooltipTrigger asChild>{badge}</TooltipTrigger>
													<TooltipContent variant="badge">
														{skill}
													</TooltipContent>
												</Tooltip>
											);
										}

										return (
											<div key={skill} className="leading-none flex">
												{badge}
											</div>
										);
									})}
									{skillsArray.length > 5 && (
										<SkillsTooltip skills={skillsArray.slice(5)}>
											<Badge
												variant="secondary"
												className="text-xs cursor-help h-6 py-1"
											>
												+{skillsArray.length - 5}
											</Badge>
										</SkillsTooltip>
									)}
								</div>
							)}

							{/* Email */}
							{p.email && (
								<div className="mt-3">
									<Tooltip delayDuration={200}>
										<TooltipTrigger asChild>
											<Link
												href={`mailto:${p.email}`}
												external
												className="text-xs text-primary hover:underline truncate block"
											>
												{p.email.length > 30
													? `${p.email.substring(0, 30)}…`
													: p.email}
											</Link>
										</TooltipTrigger>
										<TooltipContent>{p.email}</TooltipContent>
									</Tooltip>
								</div>
							)}
						</div>
					</div>
					{person.score > 0 && (
						<div className="md:hidden mt-3">
							<Badge variant="default" className={`text-xs ${relevanceClass}`}>
								{(person.score * 100).toFixed(0)}%
							</Badge>
						</div>
					)}
				</div>
			</Card>
		);
	}

	// Grid / default card
	return (
		<Card className="hover:shadow-md transition-shadow h-full flex flex-col">
			<div className="bg-linear-to-r from-primary/5 to-primary/10 h-12" />
			<div className="px-6 pb-6 flex-1 flex flex-col">
				{/* Avatar overlapping header */}
				<div className="flex justify-center -mt-8 mb-3">
					<Avatar variant="nonagon" className="w-16 h-16">
						<AvatarFallback className="bg-primary dark:bg-primary text-primary-foreground font-semibold">
							{initials}
						</AvatarFallback>
					</Avatar>
				</div>

				{/* Info */}
				<div className="text-center mb-4">
					<h3 className="font-semibold text-base truncate">
						<TruncatedText text={p.name || "Unknown"} maxLength={25} />
					</h3>
					<p className="text-sm text-muted-foreground mt-1 truncate">
						<TruncatedText
							text={p.role || "No role specified"}
							maxLength={30}
						/>
					</p>
					{(p.location || expYears > 0) && (
						<p className="text-xs text-muted-foreground mt-2 truncate">
							<TruncatedText
								text={[p.location, expYears > 0 ? `${expYears} years` : null]
									.filter(Boolean)
									.join(" · ")}
								maxLength={35}
							/>
						</p>
					)}
				</div>

				{/* Skills */}
				{skillsArray.length > 0 && (
					<div className="mb-3">
						<div className="flex flex-wrap gap-1 justify-center items-center">
							{skillsArray.slice(0, 4).map((skill: string) => {
								const isTruncated = skill.length > 10;
								const badgeContent = isTruncated
									? `${skill.substring(0, 10)}…`
									: skill;

								const badge = (
									<Badge
										variant="secondary"
										className="text-xs truncate max-w-20 h-6 py-1 select-none"
									>
										{badgeContent}
									</Badge>
								);

								if (isTruncated) {
									return (
										<Tooltip key={skill} delayDuration={200}>
											<TooltipTrigger asChild>{badge}</TooltipTrigger>
											<TooltipContent variant="badge">{skill}</TooltipContent>
										</Tooltip>
									);
								}

								return (
									<div key={skill} className="leading-none flex">
										{badge}
									</div>
								);
							})}
							{skillsArray.length > 4 && (
								<SkillsTooltip skills={skillsArray.slice(4)}>
									<Badge
										variant="secondary"
										className="text-xs cursor-help h-6 py-1"
									>
										+{skillsArray.length - 4}
									</Badge>
								</SkillsTooltip>
							)}
						</div>
					</div>
				)}

				{/* Email */}
				{p.email && (
					<div className="text-center text-xs mb-4 flex-1 flex items-end justify-center">
						<Tooltip delayDuration={200}>
							<TooltipTrigger asChild>
								<Link
									href={`mailto:${p.email}`}
									external
									className="text-primary hover:underline truncate block"
								>
									{p.email.length > 25
										? `${p.email.substring(0, 25)}…`
										: p.email}
								</Link>
							</TooltipTrigger>
							<TooltipContent>{p.email}</TooltipContent>{" "}
						</Tooltip>
					</div>
				)}
				{/* Relevance */}
				<div className="flex justify-center pt-2 border-t">
					<Badge variant="default" className={`text-xs ${relevanceClass}`}>
						{(person.score * 100).toFixed(0)}% Match
					</Badge>
				</div>
			</div>
		</Card>
	);
}
