import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { useEffect, useMemo, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";
import { BORDERS, LAYOUT } from "../1-ions";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { ScrollArea } from "../2-atoms/ScrollArea";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "../3-molecules/Card";
import { CodeBlock } from "../3-molecules/CodeBlock";
import { Hero } from "../3-molecules/Hero";
import { PageTemplate } from "../5-templates/PageTemplate";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import "./DocumentationPage.css";
import { packageManagers, sdkExamples } from "./DocumentationPage.data";

export const DocumentationPage = () => {
	const { effectiveTheme } = useTheme();
	const isDark = effectiveTheme === "dark";
	const apiRef = useRef<HTMLDivElement | null>(null);
	const sdkRef = useRef<HTMLDivElement | null>(null);

	// Clear Scalar's localStorage theme preference on mount to force app theme
	useEffect(() => {
		localStorage.removeItem("colorMode");
	}, []);

	const specUrl = "/openapi.json";

	const configuration = useMemo(
		() => ({
			spec: {
				url: specUrl,
			},
			darkMode: isDark,
			hideTestRequestButton: false,
			hideSearch: true,
			hideModels: false,
			hideDarkModeToggle: true,
			hideClientButton: true,
			showSidebar: true,
			showDeveloperTools: "never" as const,
			operationTitleSource: "summary" as const,
			theme: "alternate" as const,
			persistAuth: false,
			layout: "modern" as const,
			documentDownloadType: "both" as const,
			showOperationId: false,
			withDefaultFonts: true,
			defaultOpenAllTags: false,
			expandAllModelSections: false,
			expandAllResponses: false,
			orderSchemaPropertiesBy: "alpha" as const,
			orderRequiredPropertiesFirst: true,
			hideDownloadButton: false,
			hiddenClients: [] as string[],
			defaultHttpClient: {
				targetKey: "js" as const,
				clientKey: "fetch" as const,
			},
		}),
		[isDark],
	);

	return (
		<PageTemplate title="Documentation">
			<Hero
				title=""
				brand="Documentation"
				subtitle="API reference, SDKs, and developer guides"
			/>

			{/* API Section */}
			<Div
				id="api"
				ref={
					apiRef as React.RefObject<HTMLDivElement> as React.RefObject<
						HTMLDivElement & { scrollIntoView: () => void }
					>
				}
			>
				<Heading variant="section" className="mb-4">
					API Reference
				</Heading>
				<ScrollArea
					className={`scalar-wrapper ${BORDERS.RADIUS.xl} border border-border ${LAYOUT.SCALAR_API}`}
				>
					<div className="h-full">
						<ApiReferenceReact
							key={`scalar-${isDark}`}
							configuration={configuration}
						/>
					</div>
				</ScrollArea>
			</Div>

			{/* SDK Section */}
			<Div
				id="sdk"
				ref={
					sdkRef as React.RefObject<HTMLDivElement> as React.RefObject<
						HTMLDivElement & { scrollIntoView: () => void }
					>
				}
			>
				<Heading variant="section" className="mb-6">
					TypeScript SDK
				</Heading>

				<Section>
					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-4">
								Installation
							</Heading>
							<Text variant="small" className="mb-4">
								Choose your preferred package manager:
							</Text>
							<Accordion type="single" collapsible className="w-full">
								{packageManagers.map((pm) => (
									<AccordionItem key={pm.id} value={pm.id}>
										<AccordionTrigger>{pm.name}</AccordionTrigger>
										<AccordionContent>
											<CodeBlock language="bash" code={pm.command} />
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				</Section>

				<Section>
					<Heading as="h3" variant="subsection" className="mb-4">
						Usage Examples
					</Heading>
					<Card variant="hover" fill>
						<CardContent>
							<Accordion type="single" collapsible className="w-full">
								{sdkExamples.map((example) => (
									<AccordionItem key={example.id} value={example.id}>
										<AccordionTrigger>{example.title}</AccordionTrigger>
										<AccordionContent>
											<Text variant="small" className="mb-3">
												{example.description}
											</Text>
											<CodeBlock language="ts" code={example.code} />
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</CardContent>
					</Card>
				</Section>
			</Div>
		</PageTemplate>
	);
};

export default DocumentationPage;
