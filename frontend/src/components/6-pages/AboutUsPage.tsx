import { Heading } from "../2-atoms/Heading";
import { Section } from "../2-atoms/Section";
import { Text } from "../2-atoms/Text";
import { Hero } from "../3-molecules/Hero";
import { CardGrid } from "../4-organisms/CardGrid";
import { PageTemplate } from "../5-templates/PageTemplate";
import { capabilities } from "./AboutUsPage.data.tsx";

export const AboutPage = () => {
	return (
		<PageTemplate title="About">
			{/* Hero Section */}
			<Hero title="" brand="SkillVector" subtitle="" />

			{/* Mission Section */}
			<Section>
				<CardGrid
					items={[
						{
							title: "Our Mission",
							customContent: (
								<>
									<Heading variant="section" className="mb-4">
										Our Mission
									</Heading>
									<Text variant="body" className="mb-4">
										SkillVector was built to solve a fundamental problem in
										talent discovery: traditional keyword-based search fails to
										capture the nuanced relationships between skills,
										experiences, and expertise.
									</Text>
									<Text variant="body">
										By leveraging advanced AI embeddings and vector similarity
										search, we enable organizations to find the right
										professionals based on what they can do, not just what
										keywords appear in their profiles.
									</Text>
								</>
							),
						},
					]}
					maxColumns={1}
				/>
			</Section>

			<Section>
				<CardGrid
					items={capabilities}
					maxColumns={2}
					gap="lg"
					centerIncompleteRows
				/>
			</Section>
		</PageTemplate>
	);
};
