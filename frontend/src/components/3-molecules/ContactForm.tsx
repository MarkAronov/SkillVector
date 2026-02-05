import { SITE_CONFIG } from "@/constants/site";
import { type ChangeEvent, type FormEvent, useId, useState } from "react";
import { TYPOGRAPHY } from "../1-ions";
import { Button } from "../2-atoms/Button";
import { Div } from "../2-atoms/Div";
import { Input } from "../2-atoms/Input";
import { Label } from "../2-atoms/Label";
import { Text } from "../2-atoms/Text";
import { Textarea } from "../2-atoms/Textarea";
import type { ContactFormData, FormStatus } from "./ContactForm.types";

/**
 * ContactForm Component
 *
 * Full-featured contact form with validation, submission, and status feedback.
 * Handles form state management and API communication.
 *
 * Form Fields:
 * - Name: Required text input with placeholder
 * - Email: Required email input with validation
 * - Message: Required textarea (6 rows, non-resizable)
 *
 * Status States:
 * - idle: Initial state, ready for input
 * - sending: Submitting to API, button disabled with spinner
 * - success: Message sent successfully, green feedback banner
 * - error: Submission failed, red feedback banner with error message
 *
 * Layout:
 * - Responsive grid: 1 column mobile, 2 columns desktop (md:grid-cols-2)
 * - Spacing: 24px between fields (space-y-6)
 * - Field labels: Medium font weight with required asterisk
 * - Input height: 44px (h-11) for comfortable interaction
 *
 * Validation:
 * - HTML5 required attributes
 * - Email type validation
 * - Client-side trim check before submission
 *
 * API Integration:
 * - POST to /contact endpoint
 * - JSON Content-Type header
 * - Error handling with user-friendly messages
 * - Auto-clears form on success
 *
 * Accessibility:
 * - Unique IDs via useId() for label-input association
 * - Required field indicators (red asterisk)
 * - Descriptive placeholders
 * - Submit button aria-label
 * - Error/success announcements via colored feedback
 */

export const ContactForm = () => {
	// Generate unique IDs for accessibility (label-input association)
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	// Form data state
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});

	// Submission status state
	const [status, setStatus] = useState<FormStatus>("idle");

	// Error message state
	const [errorMessage, setErrorMessage] = useState("");

	/**
	 * Handle input/textarea changes
	 * Updates formData state with new values
	 */
	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	/**
	 * Handle form submission
	 * Sends form data to contact API endpoint
	 */
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus("sending");
		setErrorMessage("");

		try {
			// POST form data to contact endpoint
			const response = await fetch(`${SITE_CONFIG.apiBaseUrl}/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Success: Clear form and show success message
				setStatus("success");
				setFormData({ name: "", email: "", message: "" });
			} else {
				// Error: Parse error message and display
				const error = await response.json();
				setStatus("error");
				setErrorMessage(error.error || "Failed to send message");
			}
		} catch (_error) {
			// Network error: Display generic error message
			setStatus("error");
			setErrorMessage("Network error. Please try again.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<Div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Div className="space-y-2">
					<Label htmlFor={nameId} className={TYPOGRAPHY.FONT_WEIGHT.medium}>
						Name <span className="text-destructive">*</span>
					</Label>
					<Input
						type="text"
						id={nameId}
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
						placeholder="John Doe"
						className="h-11"
					/>
				</Div>
				<Div className="space-y-2">
					<Label htmlFor={emailId} className={TYPOGRAPHY.FONT_WEIGHT.medium}>
						Email <span className="text-destructive">*</span>
					</Label>
					<Input
						type="email"
						id={emailId}
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						placeholder="john@example.com"
						className="h-11"
					/>
				</Div>
			</Div>
			<Div className="space-y-2">
				<Label htmlFor={messageId} className="font-medium">
					Message <span className="text-destructive">*</span>
				</Label>
				<Textarea
					id={messageId}
					name="message"
					value={formData.message}
					onChange={handleInputChange}
					required
					rows={6}
					placeholder="Tell us how we can help you..."
					className="resize-none"
				/>
			</Div>
			{status === "error" && (
				<Div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
					<Text
						variant="small"
						className={`text-destructive ${TYPOGRAPHY.FONT_WEIGHT.medium}`}
					>
						{errorMessage}
					</Text>
				</Div>
			)}
			{status === "success" && (
				<Div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
					<Text
						variant="small"
						className="text-green-600 dark:text-green-400 font-medium"
					>
						✓ Message sent successfully! We'll get back to you soon.
					</Text>
				</Div>
			)}
			<Div className="flex justify-end">
				<Button
					type="submit"
					disabled={status === "sending"}
					aria-label="Send Message"
					className="min-w-[150px]"
				>
					{status === "sending" ? (
						<>
							<span className="inline-block animate-spin mr-2">⏳</span>
							Sending...
						</>
					) : (
						"Send Message"
					)}
				</Button>
			</Div>
		</form>
	);
};
