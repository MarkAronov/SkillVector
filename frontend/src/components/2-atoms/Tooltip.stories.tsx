import type { Meta, StoryObj } from "@storybook/react";
import { TooltipWrapper as Tooltip } from "./Tooltip";

const meta = {
	title: "atoms/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "This is a tooltip message",
		children: (
			<span className="underline cursor-help">Hover or long-press me</span>
		),
	},
};

export const LongContent: Story = {
	args: {
		content: "This is a much longer tooltip that might wrap on some screens",
		children: (
			<span className="underline cursor-help">Hover for longer text</span>
		),
	},
};

export const TopPosition: Story = {
	args: {
		content: "Positioned above",
		children: <span className="underline cursor-help">Hover me</span>,
	},
};

export const BottomPosition: Story = {
	args: {
		content: "Positioned below",
		children: <span className="underline cursor-help">Hover me</span>,
	},
};

export const LeftPosition: Story = {
	args: {
		content: "Positioned left",
		children: <span className="underline cursor-help">Hover me</span>,
	},
};

export const RightPosition: Story = {
	args: {
		content: "Positioned right",
		children: <span className="underline cursor-help">Hover me</span>,
	},
};
