import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { Section } from "../2-atoms/Section";
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

export const ResourcesPage = () => {
	const { effectiveTheme } = useTheme();
	const isDark = effectiveTheme === "dark";
	const apiRef = useRef<HTMLDivElement | null>(null);
	const sdkRef = useRef<HTMLDivElement | null>(null);
	const [_activeTab, _setActiveTab] = useState<"api" | "sdk">(
		typeof window !== "undefined" && window.location.hash === "#sdk"
			? "sdk"
			: "api",
	);

	// Clear Scalar's localStorage theme preference on mount to force app theme
	useEffect(() => {
		localStorage.removeItem("colorMode");
	}, []);

	const specUrl = "/openapi.json";

	const configuration = useMemo(
		() => ({
			spec: { url: specUrl },
			darkMode: isDark,
			hideTestRequestButton: true,
			hideSearch: true,
			hideModels: true,
			hideDarkModeToggle: true,
			hideClientButton: true,
			showSidebar: true,
			showDeveloperTools: false,
			showToolbar: false,
			operationTitleSource: "summary" as const,
			theme: "alternate" as const,
			persistAuth: false,
			layout: "modern" as const,
			isEditable: false,
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
			// Disable routing to prevent URL changes
			onUpdateRoute: () => {
				// Prevent route updates
			},
		}),
		[isDark],
	);

	const installNpm = `npm install @skillvector/sdk`;
	const installBun = `bun add @skillvector/sdk`;
	const installYarn = `yarn add @skillvector/sdk`;
	const installPnpm = `pnpm add @skillvector/sdk`;

	const basicSearch = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com' 
});

const results = await client.search('TypeScript developer', 10, 0);
console.log(results);`;

	const filterSearch = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com' 
});

const filtered = await client.searchWithFilters({
  query: 'Full Stack Engineer',
  filters: { 
    skills: ['React', 'Node.js', 'TypeScript'],
    experience: { min: 3, max: 7 },
    location: ['Remote', 'New York']
  },
  limit: 20,
  offset: 0
});`;

	const paginationExample = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com' 
});

// Fetch first page
const page1 = await client.search('Data Scientist', 20, 0);

// Fetch second page  
const page2 = await client.search('Data Scientist', 20, 20);

// Fetch third page
const page3 = await client.search('Data Scientist', 20, 40);`;

	const errorHandling = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com',
  timeout: 5000,
  retries: 3
});

try {
  const results = await client.search('Python developer', 10, 0);
  console.log('Search successful:', results);
} catch (error) {
  if (error.response?.status === 404) {
    console.error('Resource not found');
  } else if (error.response?.status === 500) {
    console.error('Server error, please try again later');
  } else {
    console.error('An error occurred:', error.message);
  }
}`;

	const customConfig = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({
  baseUrl: 'https://api.skillvector.com',
  timeout: 10000,        // 10 second timeout
  retries: 5,            // Retry up to 5 times
  retryDelay: 1000,      // 1 second between retries
  headers: {
    'X-Custom-Header': 'value'
  }
});`;

	const batchSearch = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com' 
});

const queries = [
  'Frontend Developer',
  'Backend Developer', 
  'DevOps Engineer',
  'Data Scientist'
];

const results = await Promise.all(
  queries.map(query => client.search(query, 10, 0))
);

results.forEach((result, index) => {
  console.log(\`Results for \${queries[index]}:\`, result.length);
});`;

	const complexFilters = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com' 
});

const results = await client.searchWithFilters({
  query: 'Senior Software Engineer',
  filters: {
    skills: ['Kubernetes', 'AWS', 'Terraform', 'Python'],
    experience: { min: 5, max: 10 },
    location: ['Remote', 'San Francisco', 'Seattle'],
    education: ['Bachelor', 'Master'],
    certifications: ['AWS Certified', 'CKA']
  },
  limit: 50,
  offset: 0
});

// Sort by score
const sorted = results.sort((a, b) => b.score - a.score);

// Filter by minimum score threshold
const highQuality = sorted.filter(r => r.score > 0.8);`;

	const streamResults = `import { SkillVectorClient } from '@skillvector/sdk';

const client = new SkillVectorClient({ 
  baseUrl: 'https://api.skillvector.com' 
});

async function* searchWithPagination(query: string, pageSize: number = 20) {
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    const results = await client.search(query, pageSize, offset);
    
    if (results.length === 0) {
      hasMore = false;
      break;
    }

    yield results;
    offset += pageSize;

    if (results.length < pageSize) {
      hasMore = false;
    }
  }
}

// Usage
for await (const batch of searchWithPagination('ML Engineer', 50)) {
  console.log(\`Processing batch of \${batch.length} results\`);
  // Process each batch as it arrives
  batch.forEach(result => {
    console.log(result.name, result.score);
  });
}`;

	return (
		<PageTemplate title="Resources">
			<Div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
				<Hero
					title="Resources"
					brand="Docs"
					subtitle="API reference, SDKs, and developer guides"
				/>
			</Div>

			{/* Sticky navigation removed */}
			{/* API Section */}
			<Div
				id="api"
				ref={
					apiRef as React.RefObject<HTMLDivElement> as React.RefObject<
						HTMLDivElement & { scrollIntoView: () => void }
					>
				}
				className="max-w-4xl mx-auto px-4 mb-8"
			>
				<Heading variant="section" className="mb-4">
					API Reference
				</Heading>
				<Div className="scalar-wrapper rounded-xl overflow-hidden border border-border">
					<ApiReferenceReact
						key={`scalar-${isDark}`}
						configuration={configuration}
					/>
				</Div>
			</Div>

			{/* SDK Section */}
			<Div
				id="sdk"
				ref={
					sdkRef as React.RefObject<HTMLDivElement> as React.RefObject<
						HTMLDivElement & { scrollIntoView: () => void }
					>
				}
				className="max-w-5xl mx-auto px-4 mb-16"
			>
				<Heading variant="section" className="mb-6">
					TypeScript SDK
				</Heading>

				<Section className="mb-8">
					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-4">
								Installation
							</Heading>
							<p className="text-sm text-muted-foreground mb-4">
								Choose your preferred package manager:
							</p>
							<Accordion type="single" collapsible className="w-full">
								<AccordionItem value="npm">
									<AccordionTrigger>npm</AccordionTrigger>
									<AccordionContent>
										<CodeBlock language="bash" code={installNpm} />
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="bun">
									<AccordionTrigger>bun</AccordionTrigger>
									<AccordionContent>
										<CodeBlock language="bash" code={installBun} />
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="yarn">
									<AccordionTrigger>yarn</AccordionTrigger>
									<AccordionContent>
										<CodeBlock language="bash" code={installYarn} />
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="pnpm">
									<AccordionTrigger>pnpm</AccordionTrigger>
									<AccordionContent>
										<CodeBlock language="bash" code={installPnpm} />
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</CardContent>
					</Card>
				</Section>

				<Section className="mb-8">
					<Heading as="h3" variant="subsection" className="mb-4">
						Usage Examples
					</Heading>
					<Card variant="hover" fill>
						<CardContent>
							<Accordion type="single" collapsible className="w-full">
								<AccordionItem value="basic">
									<AccordionTrigger>Basic Search</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Perform a simple search with query, limit, and offset:
										</p>
										<CodeBlock language="ts" code={basicSearch} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="filters">
									<AccordionTrigger>Search with Filters</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Apply filters for skills, experience, and location:
										</p>
										<CodeBlock language="ts" code={filterSearch} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="pagination">
									<AccordionTrigger>Pagination</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Handle paginated results across multiple requests:
										</p>
										<CodeBlock language="ts" code={paginationExample} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="error">
									<AccordionTrigger>Error Handling</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Properly handle errors and implement retry logic:
										</p>
										<CodeBlock language="ts" code={errorHandling} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="config">
									<AccordionTrigger>Custom Configuration</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Configure client with custom timeout, retries, and
											headers:
										</p>
										<CodeBlock language="ts" code={customConfig} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="batch">
									<AccordionTrigger>Batch Operations</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Execute multiple search queries in parallel:
										</p>
										<CodeBlock language="ts" code={batchSearch} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="complex">
									<AccordionTrigger>Complex Filtering</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Advanced filtering with multiple criteria and
											post-processing:
										</p>
										<CodeBlock language="ts" code={complexFilters} />
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="stream">
									<AccordionTrigger>Streaming Results</AccordionTrigger>
									<AccordionContent>
										<p className="text-sm text-muted-foreground mb-3">
											Stream large result sets using async generators:
										</p>
										<CodeBlock language="ts" code={streamResults} />
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</CardContent>
					</Card>
				</Section>

				<Section>
					<Heading as="h3" variant="subsection" className="mb-4">
						Key Features
					</Heading>
					<div className="grid gap-4 md:grid-cols-2">
				<Card variant="default" fill>
							<CardContent className="p-4">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<span className="text-primary">⚡</span>
									Type Safety
								</h4>
								<p className="text-sm text-muted-foreground">
									Full TypeScript support with comprehensive type definitions
									for all API responses and requests.
								</p>
							</CardContent>
						</Card>

				<Card variant="default" fill>
							<CardContent className="p-4">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<span className="text-primary">🔄</span>
									Auto Retry
								</h4>
								<p className="text-sm text-muted-foreground">
									Built-in retry logic with exponential backoff to handle
									transient failures gracefully.
								</p>
							</CardContent>
						</Card>

						<Card variant="outline" fill>
							<CardContent className="p-4">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<span className="text-primary">🎯</span>
									Advanced Filtering
								</h4>
								<p className="text-sm text-muted-foreground">
									Powerful filtering capabilities including skills, experience
									levels, locations, and custom criteria.
								</p>
							</CardContent>
						</Card>

						<Card variant="outline" fill>
							<CardContent className="p-4">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<span className="text-primary">📄</span>
									Pagination Support
								</h4>
								<p className="text-sm text-muted-foreground">
									Easy-to-use pagination helpers for handling large result sets
									efficiently.
								</p>
							</CardContent>
						</Card>

						<Card variant="outline" fill>
							<CardContent className="p-4">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<span className="text-primary">⚙️</span>
									Configurable
								</h4>
								<p className="text-sm text-muted-foreground">
									Customize timeout, retries, base URL, and other client
									settings to fit your needs.
								</p>
							</CardContent>
						</Card>

						<Card variant="outline" fill>
							<CardContent className="p-4">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<span className="text-primary">🚀</span>
									Performance
								</h4>
								<p className="text-sm text-muted-foreground">
									Lightweight and optimized for performance with minimal
									dependencies.
								</p>
							</CardContent>
						</Card>
					</div>
				</Section>
			</Div>
		</PageTemplate>
	);
};

export default ResourcesPage;
