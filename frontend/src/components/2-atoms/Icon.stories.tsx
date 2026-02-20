import type { Meta, StoryObj } from "@storybook/react";
import {
	Brain,
	Cloud,
	Code,
	FileText,
	Gauge,
	Layers,
	RefreshCw,
	Search,
	Settings,
	Shield,
	Target,
	Upload,
	Users,
	Zap,
} from "lucide-react";
import { Icon } from "./Icon";

const meta = {
	title: "Atoms/Icon",
	component: Icon,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
Standard wrapper for Lucide React icons used throughout the application.

## Design Standards
- **Feature card icons** use \`text-primary\` for consistent brand identity
- Button and inline icons inherit text color by default
- Default size is 'md' (24px / h-6 w-6)
- Icons are inline-block and align with text

## Usage Guidelines
- **Feature Cards**: Use 'md' size with \`className="text-primary"\`
- **Button Icons**: Use 'sm' size (16px), inherit text color
- **Hero Icons**: Use 'lg' or 'xl' size
- **List Icons**: Use 'sm' size

## Color Standards
- **Feature Cards**: Use \`text-primary\` (standard)
- **Buttons/Inline**: Inherit text color (default)
- **Muted**: Use \`text-muted-foreground\`
- **Status**: Use semantic colors for status indicators
				`,
			},
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default icon with medium size (24px)
 */
export const Default: Story = {
	args: {
		icon: Search,
	},
};

/**
 * Small icon (16px) - use for buttons and inline text
 */
export const Small: Story = {
	args: {
		icon: Search,
		size: "sm",
	},
};

/**
 * Medium icon (24px) - default size, use for cards and features
 */
export const Medium: Story = {
	args: {
		icon: Search,
		size: "md",
	},
};

/**
 * Large icon (32px) - use for section headers
 */
export const Large: Story = {
	args: {
		icon: Search,
		size: "lg",
	},
};

/**
 * Extra Large icon (40px) - use for hero sections
 */
export const ExtraLarge: Story = {
	args: {
		icon: Search,
		size: "xl",
	},
};

/**
 * Icon with primary color - standard for feature cards
 */
export const WithPrimaryColor: Story = {
	args: {
		icon: Zap,
		className: "text-primary",
	},
};

/**
 * Icon with muted color - use for secondary/supporting icons
 */
export const WithMutedColor: Story = {
	args: {
		icon: Settings,
		className: "text-muted-foreground",
	},
};

/**
 * Icons in a card layout - showing the standard feature card pattern
 */
export const InCardLayout: Story = {
	args: { icon: Search },
	render: () => (
		<div className="space-y-4 w-80">
			<div className="border border-border rounded-lg p-4">
				<div className="flex items-center gap-2 mb-2">
					<Icon icon={Search} className="text-primary" />
					<h4 className="font-semibold">Semantic Search</h4>
				</div>
				<p className="text-sm text-muted-foreground">
					Find talent based on meaning, not just keywords.
				</p>
			</div>

			<div className="border border-border rounded-lg p-4">
				<div className="flex items-center gap-2 mb-2">
					<Icon icon={Zap} className="text-primary" />
					<h4 className="font-semibold">Lightning Fast</h4>
				</div>
				<p className="text-sm text-muted-foreground">
					Built for sub-second search results.
				</p>
			</div>

			<div className="border border-border rounded-lg p-4">
				<div className="flex items-center gap-2 mb-2">
					<Icon icon={Shield} className="text-primary" />
					<h4 className="font-semibold">Type-Safe API</h4>
				</div>
				<p className="text-sm text-muted-foreground">
					Full TypeScript implementation with validation.
				</p>
			</div>
		</div>
	),
};

/**
 * All commonly used icons in the application
 */
export const IconGallery: Story = {
	args: { icon: Search },
	render: () => (
		<div className="grid grid-cols-4 gap-6">
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Search} />
				<span className="text-xs">Search</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Zap} />
				<span className="text-xs">Zap</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Code} />
				<span className="text-xs">Code</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Shield} />
				<span className="text-xs">Shield</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Cloud} />
				<span className="text-xs">Cloud</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Users} />
				<span className="text-xs">Users</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Upload} />
				<span className="text-xs">Upload</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Brain} />
				<span className="text-xs">Brain</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={FileText} />
				<span className="text-xs">FileText</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={RefreshCw} />
				<span className="text-xs">RefreshCw</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Target} />
				<span className="text-xs">Target</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Layers} />
				<span className="text-xs">Layers</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Settings} />
				<span className="text-xs">Settings</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Gauge} />
				<span className="text-xs">Gauge</span>
			</div>
		</div>
	),
};

/**
 * Size comparison - all sizes side by side
 */
export const SizeComparison: Story = {
	args: { icon: Search },
	render: () => (
		<div className="flex items-center gap-4">
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Search} size="sm" />
				<span className="text-xs">sm (16px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Search} size="md" />
				<span className="text-xs">md (24px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Search} size="lg" />
				<span className="text-xs">lg (32px)</span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Icon icon={Search} size="xl" />
				<span className="text-xs">xl (40px)</span>
			</div>
		</div>
	),
};
