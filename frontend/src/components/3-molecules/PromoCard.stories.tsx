import type { Meta, StoryObj } from "@storybook/react";
import { ExternalLink, Github, Package, Twitter } from "lucide-react";
import { SocialMediaCard } from "./PromoCard";

const meta = {
	title: "Molecules/SocialMediaCard",
	component: SocialMediaCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof SocialMediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GitHubRepository: Story = {
	args: {
		icon: <Github className="h-6 w-6 text-primary" />,
		title: "Release Overview",
		description:
			"Follow our GitHub repository for the latest updates, releases, and contribute to the project",
		primaryAction: {
			label: "GitHub Repository",
			href: "https://github.com/MarkAronov/SkillVector",
			icon: <ExternalLink className="h-4 w-4" />,
		},
		secondaryAction: {
			label: "View All Releases",
			href: "https://github.com/MarkAronov/SkillVector/releases",
			icon: <Package className="h-4 w-4" />,
		},
	},
};

export const TwitterProfile: Story = {
	args: {
		icon: <Twitter className="h-6 w-6 text-primary" />,
		title: "Follow Us on Twitter",
		description:
			"Stay updated with the latest news, announcements, and community highlights",
		primaryAction: {
			label: "Follow on Twitter",
			href: "https://twitter.com",
			icon: <Twitter className="h-4 w-4" />,
		},
	},
};

export const SingleAction: Story = {
	args: {
		icon: <Github className="h-6 w-6 text-primary" />,
		title: "Open Source",
		description:
			"Check out our open source project and contribute to the community",
		primaryAction: {
			label: "View on GitHub",
			href: "https://github.com",
			icon: <Github className="h-4 w-4" />,
		},
	},
};
