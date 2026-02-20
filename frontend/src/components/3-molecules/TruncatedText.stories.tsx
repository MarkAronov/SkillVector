import type { Meta, StoryObj } from "@storybook/react";
import { TruncatedText } from "./TruncatedText";

const meta = {
	title: "molecules/TruncatedText",
	component: TruncatedText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TruncatedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "This is a very long text that will be truncated",
		maxLength: 20,
	},
};

export const NoTruncation: Story = {
	args: {
		text: "Short text",
		maxLength: 50,
	},
};

export const LongEmail: Story = {
	args: {
		text: "very.long.email.address.that.needs.truncation@example.com",
		maxLength: 30,
		showTooltip: true,
	},
};

export const WithoutTooltip: Story = {
	args: {
		text: "This text will be truncated without showing a tooltip",
		maxLength: 20,
		showTooltip: false,
	},
};
