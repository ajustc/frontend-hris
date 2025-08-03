// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

export function formatDate(date: string | Date): string {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(new Date(date));
}

export function calculateWorkingDays(startDate: string, endDate: string): number {
	const start = new Date(startDate);
	const end = new Date(endDate);
	let count = 0;

	while (start <= end) {
		const dayOfWeek = start.getDay();
		if (dayOfWeek !== 0 && dayOfWeek !== 6) {
			// Exclude weekends
			count++;
		}
		start.setDate(start.getDate() + 1);
	}

	return count;
}
