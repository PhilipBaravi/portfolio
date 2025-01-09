import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["www.codewars.com"], // Add your allowed domains here
  },
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
  },
};

export default nextConfig;
