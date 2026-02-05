/**
 * IONS: Sizing Tokens
 *
 * Common component size primitives for consistent scaling.
 * Provides standardized dimensions across different UI element types.
 *
 * Size Scale Philosophy:
 * - xs: Extra small - Tight spaces, inline elements
 * - sm: Small - Compact UI, mobile interfaces
 * - md: Medium - Default size for most elements
 * - lg: Large - Emphasized elements, comfortable touch targets
 * - xl: Extra large - Hero elements, prominent UI
 * - 2xl: Double extra large - Maximum size, special emphasis
 *
 * Icon Sizes:
 * - xs: 12px - Inline text icons
 * - sm: 16px - Standard inline icons
 * - md: 20px - Default icons
 * - lg: 24px - Prominent icons
 * - xl: 32px - Large feature icons
 * - 2xl: 40px - Hero icons
 *
 * Avatar Sizes:
 * - xs: 24px - Tiny user indicators
 * - sm: 32px - Compact lists
 * - md: 40px - Standard profile pictures
 * - lg: 48px - Featured users
 * - xl: 64px - Profile headers
 * - 2xl: 80px - Hero avatars
 *
 * Button Sizes (height x padding):
 * - sm: 32px x 12px - Compact actions
 * - md: 40px x 16px - Standard buttons
 * - lg: 44px x 32px - Prominent CTAs
 * - xl: 48px x 40px - Hero buttons
 *
 * Input Sizes (height x padding):
 * - sm: 32px x 12px - Compact forms
 * - md: 40px x 16px - Standard inputs
 * - lg: 48px x 24px - Large forms
 *
 * Spinner Sizes:
 * - xs: 12px - Inline loading
 * - sm: 16px - Button loading
 * - md: 24px - Card loading
 * - lg: 32px - Section loading
 * - xl: 48px - Page loading
 */

export const SIZING = {
	/**
	 * Icon size tokens
	 * Square dimensions for icon elements
	 */
	ICON: {
		xs: "size-3",    // 12px - Inline text icons
		sm: "size-4",    // 16px - Standard inline icons
		md: "size-5",    // 20px - Default icons
		lg: "size-6",    // 24px - Prominent icons
		xl: "size-8",    // 32px - Large feature icons
		"2xl": "size-10", // 40px - Hero icons
	},

	/**
	 * Avatar size tokens
	 * Square dimensions for profile pictures
	 */
	AVATAR: {
		xs: "size-6",    // 24px - Tiny user indicators
		sm: "size-8",    // 32px - Compact user lists
		md: "size-10",   // 40px - Standard profile pictures
		lg: "size-12",   // 48px - Featured users
		xl: "size-16",   // 64px - Profile headers
		"2xl": "size-20", // 80px - Hero avatars
	},

	/**
	 * Button size tokens
	 * Height and horizontal padding combinations
	 */
	BUTTON: {
		sm: "h-8 px-3",   // 32px height, 12px padding - Compact actions
		md: "h-10 px-4",  // 40px height, 16px padding - Standard buttons
		lg: "h-11 px-8",  // 44px height, 32px padding - Prominent CTAs
		xl: "h-12 px-10", // 48px height, 40px padding - Hero buttons
	},

	/**
	 * Input size tokens
	 * Height and horizontal padding for form inputs
	 */
	INPUT: {
		sm: "h-8 px-3",  // 32px height, 12px padding - Compact forms
		md: "h-10 px-4", // 40px height, 16px padding - Standard inputs
		lg: "h-12 px-6", // 48px height, 24px padding - Large forms
	},

	/**
	 * Spinner size tokens
	 * Loading indicator dimensions
	 */
	SPINNER: {
		xs: "size-3",  // 12px - Inline loading indicators
		sm: "size-4",  // 16px - Button loading states
		md: "size-6",  // 24px - Card loading
		lg: "size-8",  // 32px - Section loading
		xl: "size-12", // 48px - Page loading
	},
} as const;
