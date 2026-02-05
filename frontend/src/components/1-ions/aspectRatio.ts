/**
 * IONS: Aspect Ratio Tokens
 *
 * Common aspect ratio primitives for media elements and containers.
 * Maintains consistent proportions across images, videos, and layout boxes.
 *
 * Ratio Reference:
 * - square: 1:1 (100x100) - Perfect squares for avatars, thumbnails
 * - video: 16:9 (1920x1080) - Standard widescreen video format
 * - portrait: 3:4 (768x1024) - Vertical orientation for mobile/cards
 * - landscape: 4:3 (1024x768) - Traditional photo format
 * - ultrawide: 21:9 (2560x1080) - Cinematic widescreen
 * - auto: Content-driven - Natural aspect ratio from content dimensions
 */

export const ASPECT_RATIO = {
	square: "aspect-square",        // 1:1 - Perfect square (avatars, icons)
	video: "aspect-video",          // 16:9 - Widescreen video (YouTube, Vimeo)
	portrait: "aspect-[3/4]",       // 3:4 - Vertical orientation (mobile cards)
	landscape: "aspect-[4/3]",      // 4:3 - Traditional photo (camera default)
	ultrawide: "aspect-[21/9]",     // 21:9 - Cinematic widescreen (hero images)
	auto: "aspect-auto",            // Auto - Intrinsic content dimensions
} as const;
