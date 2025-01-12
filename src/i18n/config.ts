export type Locale = (typeof locales)[number];

export const locales = ["en", "es", "ge"] as const;
export const defaultLocale: Locale = "en";
