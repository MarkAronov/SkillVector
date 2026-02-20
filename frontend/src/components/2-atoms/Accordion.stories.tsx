import type { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./Accordion";

/**
 * Accordion component for collapsible content sections
 *
 * Supports both single and multiple item expansion.
 * Use island styling for separated items or default for connected items.
 */
const meta: Meta = {
	title: "2-Atoms/Accordion",
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

/**
 * Single collapsible mode
 * Only one item can be open at a time
 */
export const Single: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-full max-w-md">
			<AccordionItem value="item-1">
				<AccordionTrigger>What is SkillVector?</AccordionTrigger>
				<AccordionContent>
					SkillVector is an AI-powered skill development platform that helps you
					discover, learn, and master new skills through personalized learning
					paths.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>How does it work?</AccordionTrigger>
				<AccordionContent>
					Our AI analyzes your current skills and goals, then recommends courses
					and resources tailored to your learning style and schedule.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it free to use?</AccordionTrigger>
				<AccordionContent>
					We offer a free tier with limited features, as well as premium plans
					with advanced AI recommendations and unlimited access to courses.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

/**
 * Multiple expansion mode
 * Multiple items can be open simultaneously
 */
export const Multiple: Story = {
	render: () => (
		<Accordion type="multiple" className="w-full max-w-md">
			<AccordionItem value="item-1">
				<AccordionTrigger>Installation</AccordionTrigger>
				<AccordionContent>
					Install the SDK using your preferred package manager: npm, yarn, pnpm,
					or bun.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Configuration</AccordionTrigger>
				<AccordionContent>
					Configure your API key and endpoint in the client initialization.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Usage</AccordionTrigger>
				<AccordionContent>
					Import the client and call methods to interact with the API.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

/**
 * Island style with separated items
 * Each item has a border and rounded corners with gaps between
 */
export const IslandStyle: Story = {
	render: () => (
		<Accordion type="multiple" className="w-full max-w-md flex flex-col gap-2">
			<AccordionItem
				value="npm"
				className="border rounded-lg border-border px-3"
			>
				<AccordionTrigger>npm</AccordionTrigger>
				<AccordionContent>
					<code className="block bg-muted p-3 rounded-md">
						npm install @skillvector/sdk
					</code>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="yarn"
				className="border rounded-lg border-border px-3"
			>
				<AccordionTrigger>Yarn</AccordionTrigger>
				<AccordionContent>
					<code className="block bg-muted p-3 rounded-md">
						yarn add @skillvector/sdk
					</code>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="pnpm"
				className="border rounded-lg border-border px-3"
			>
				<AccordionTrigger>pnpm</AccordionTrigger>
				<AccordionContent>
					<code className="block bg-muted p-3 rounded-md">
						pnpm add @skillvector/sdk
					</code>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem
				value="bun"
				className="border rounded-lg border-border px-3"
			>
				<AccordionTrigger>Bun</AccordionTrigger>
				<AccordionContent>
					<code className="block bg-muted p-3 rounded-md">
						bun add @skillvector/sdk
					</code>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
