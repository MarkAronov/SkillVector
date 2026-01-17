import { Div } from "../2-atoms/Div";
import { Heading } from "../2-atoms/Heading";
import { List, ListItem } from "../2-atoms/List";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { Card, CardContent } from "../3-molecules/Card";
import { CodeBlock } from "../3-molecules/CodeBlock";
import { CardGrid } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";

export const SdkDocsPage = () => {
	const install = `npm install @skillvector/sdk`;
	const quickUse = `import { SkillVectorClient } from '@skillvector/sdk';

(async () => {
  const client = new SkillVectorClient({ baseUrl: 'http://localhost:3000' });
  const results = await client.search('TypeScript developer', 10, 0);
  console.log(results);
})();`;

	return (
		<PageTemplate title="SDK">
			<Div className="mb-8">
				<Heading variant="section" className="mb-2">
					SDKs
				</Heading>
				<Text variant="muted">
					TypeScript SDK for SkillVector — quick-start and examples
				</Text>
			</Div>
			<Section>
				<CardGrid>
					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-2">
								Install
							</Heading>
							<CodeBlock language="bash" code={install} />
						</CardContent>
					</Card>

					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-2">
								Quick Start
							</Heading>
							<CodeBlock language="ts" code={quickUse} />
						</CardContent>
					</Card>

					<Card variant="hover" fill>
						<CardContent>
							<Heading as="h2" variant="card" className="mb-2">
								Features
							</Heading>
							<List variant="disc">
								<ListItem>Search & pagination helpers</ListItem>
								<ListItem>Filters support with `searchWithFilters`</ListItem>
								<ListItem>Retries and exponential backoff</ListItem>
								<ListItem>TypeScript types for strict typing</ListItem>
							</List>
						</CardContent>
					</Card>
				</CardGrid>
			</Section>
		</PageTemplate>
	);
};
