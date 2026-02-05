export type FormStatus = "idle" | "sending" | "success" | "error";

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}
