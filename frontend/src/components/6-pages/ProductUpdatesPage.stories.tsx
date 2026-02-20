import type { Meta, StoryObj } from "@storybook/react";
import { ProductUpdatesPage } from "./ProductUpdatesPage";

const meta: Meta<typeof ProductUpdatesPage> = {
	title: "Pages/ProductUpdatesPage",
	component: ProductUpdatesPage,
	parameters: {
		layout: "centered",
	},
};

export default meta;
type Story = StoryObj<typeof ProductUpdatesPage>;

export const Default: Story = {
	render: () => <ProductUpdatesPage />,
};
