import { EXTERNAL_LINKS, SOCIAL_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { FileText, Github, SquareArrowOutUpRight } from "lucide-react";
import { SIZING, SPACING, TYPOGRAPHY } from "../1-ions";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Link } from "../2-atoms/Link";
import { Section } from "../2-atoms/Section";
import { Span } from "../2-atoms/Span";
import { Text } from "../2-atoms/Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../2-atoms/Tooltip";
import { Card, CardContent } from "../3-molecules/Card";
import { Hero } from "../3-molecules/Hero";
import { StatusBadge } from "../3-molecules/StatusBadge";
import { CardGrid } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { categories } from "./IntegrationsPage.data.tsx";

export const IntegrationsPage = () => {
	useNavigate();
	return (
		<PageTemplate title="Integrations">
			{/* Hero Section */}
			<Hero
				title="Integrations"
				brand="Hub"
				subtitle="Connect SkillVector with your favorite tools and services for seamless talent search."
			/>

			{/* Integration Categories */}
			<Section>
				<CardGrid
					maxColumns={1}
					gap="lg"
					enforceCustomContent
					items={categories.map((category) => ({
						id: category.title,
						title: category.title,
						centered: false,
						customContent: (
							<Div
								className={cn(
									// Layout
									"flex flex-col",
									// Spacing
									SPACING.GAP.xl,
								)}
							>
								<Div
									variant="flex"
									className={cn(
										// Layout
										"items-start",
										// Spacing
										SPACING.GAP.md,
									)}
								>
									<Div className="text-primary shrink-0">{category.icon}</Div>
									<Div className="min-w-0">
										<Heading variant="card" className="mb-1">
											{category.title}
										</Heading>
										<Text variant="muted">{category.description}</Text>
									</Div>
								</Div>

								{(() => {
									const hasAnyActions = category.integrations.some(
										(i) =>
											i.links?.docs || i.links?.github || i.links?.internal,
									);
									return (
										<Table className="w-full table-fixed [&_th]:h-8 [&_td]:py-1.5">
											<TableHeader>
												<TableRow>
													<TableHead>Integration</TableHead>
													<TableHead className="hidden sm:table-cell w-[45%]">
														Description
													</TableHead>
													<TableHead>Status</TableHead>
													{hasAnyActions && (
														<TableHead className="hidden sm:table-cell text-right">
															Actions
														</TableHead>
													)}
												</TableRow>
											</TableHeader>
											<TableBody>
												{category.integrations.map((integration) => {
													const actions = {
														internal: integration.links?.internal,
														docs: integration.links?.docs,
														github: integration.links?.github,
													};
													const hasRowActions =
														actions.internal || actions.docs || actions.github;

													return (
														<TableRow key={integration.title}>
															<TableCell
																className={cn(
																	TYPOGRAPHY.FONT_WEIGHT.medium,
																	"min-w-0",
																)}
															>
																<Div
																	variant="flex"
																	className="items-center gap-3"
																>
																	<Div className="text-primary shrink-0">
																		{integration.icon}
																	</Div>
																	<Div className="min-w-0">
																		<Span className="truncate">
																			{integration.title}
																		</Span>
																		<Text
																			variant="small"
																			className="mt-1 sm:hidden whitespace-normal break-words"
																		>
																			{integration.description}
																		</Text>
																		{hasRowActions && (
																			<Div
																				className={`mt-2 flex flex-wrap ${SPACING.GAP.xs} sm:hidden`}
																			>
																				{actions.internal && (
																					<Button
																						asChild
																						className="p-1.5 min-w-0"
																						aria-label="Open"
																					>
																						<Link to={actions.internal}>
																							<SquareArrowOutUpRight
																								className={SIZING.ICON.xs}
																							/>
																						</Link>
																					</Button>
																				)}
																				{actions.docs && (
																					<Button
																						asChild
																						variant="outline"
																						className="p-1.5 min-w-0"
																						aria-label="Documentation"
																					>
																						<Link href={actions.docs} external>
																							<FileText
																								className={SIZING.ICON.xs}
																							/>
																						</Link>
																					</Button>
																				)}
																				{actions.github && (
																					<Button
																						asChild
																						variant="outline"
																						className="p-1.5 min-w-0"
																						aria-label="GitHub Repository"
																					>
																						<Link
																							href={actions.github}
																							external
																						>
																							<Github
																								className={SIZING.ICON.xs}
																							/>
																						</Link>
																					</Button>
																				)}
																			</Div>
																		)}
																	</Div>
																</Div>
															</TableCell>
															<TableCell
																className={cn(
																	// Layout
																	"hidden sm:table-cell whitespace-normal break-words",
																	// Colors
																	"text-muted-foreground",
																	// Typography
																	TYPOGRAPHY.COMBINATIONS.small,
																)}
															>
																{integration.description}
															</TableCell>
															<TableCell>
																<StatusBadge
																	status={integration.status}
																	className="px-1 py-0 !text-[14px] !leading-none"
																/>
															</TableCell>
															{hasAnyActions && (
																<TableCell className="hidden sm:table-cell text-right">
																	{hasRowActions ? (
																		<Div
																			className={cn(
																				// Layout
																				"flex flex-wrap justify-end",
																				// Spacing
																				SPACING.GAP.xs,
																			)}
																		>
																			{actions.internal && (
																				<Tooltip delayDuration={200}>
																					<TooltipTrigger asChild>
																						<Button
																							asChild
																							className="p-1.5 min-w-0"
																							aria-label="Open"
																						>
																							<Link to={actions.internal}>
																								{/* Action icon - 14px size */}
																								<SquareArrowOutUpRight
																									className={SIZING.ICON.xs}
																								/>
																							</Link>
																						</Button>
																					</TooltipTrigger>
																					<TooltipContent>Open</TooltipContent>
																				</Tooltip>
																			)}
																			{actions.docs && (
																				<Tooltip delayDuration={200}>
																					<TooltipTrigger asChild>
																						<Button
																							asChild
																							variant="outline"
																							className="p-1.5 min-w-0"
																							aria-label="Documentation"
																						>
																							<Link
																								href={actions.docs}
																								external
																							>
																								{/* Docs icon - 14px size */}
																								<FileText
																									className={SIZING.ICON.xs}
																								/>
																							</Link>
																						</Button>
																					</TooltipTrigger>
																					<TooltipContent>
																						Documentation
																					</TooltipContent>
																				</Tooltip>
																			)}
																			{actions.github && (
																				<Tooltip delayDuration={200}>
																					<TooltipTrigger asChild>
																						<Button
																							asChild
																							variant="outline"
																							className="p-1.5 min-w-0"
																							aria-label="GitHub Repository"
																						>
																							<Link
																								href={actions.github}
																								external
																							>
																								{/* GitHub icon - 14px size */}
																								<Github
																									className={SIZING.ICON.xs}
																								/>
																							</Link>
																						</Button>
																					</TooltipTrigger>
																					<TooltipContent>
																						GitHub
																					</TooltipContent>
																				</Tooltip>
																			)}
																		</Div>
																	) : (
																		<Span className="text-muted-foreground">
																			—
																		</Span>
																	)}
																</TableCell>
															)}
														</TableRow>
													);
												})}
											</TableBody>
										</Table>
									);
								})()}
							</Div>
						),
					}))}
				/>
			</Section>

			{/* CTA Section */}
			<Card variant="hover" aria-label="Request custom integration">
				<CardContent centered>
					<Heading variant="section" className="mb-4">
						Need a Custom Integration?
					</Heading>
					<Text variant="lead" className="mb-6">
						SkillVector is open source and extensible. Build your own or request
						new integrations.
					</Text>
					<Div
						className={cn(
							// Layout
							"flex justify-center flex-wrap",
							// Spacing
							SPACING.GAP.md,
						)}
					>
						<Button asChild aria-label="View SkillVector on GitHub">
							<Link href={SOCIAL_LINKS.github} external>
								View on GitHub
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							aria-label="Request new integration"
						>
							<Link href={EXTERNAL_LINKS.discussions} external>
								Request Integration
							</Link>
						</Button>
					</Div>
				</CardContent>
			</Card>
		</PageTemplate>
	);
};
