import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Noto_Serif_Georgian } from "next/font/google";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Philip Baravi - Personal Portfolio",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  weight: ["400", "700"],
  subsets: ["georgian"],
  variable: "--font-noto-serif-georgian",
});

export default async function RootLayout({
  children,
  params, // Make sure this is provided by your routing setup
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const isGeorgian = params.locale === "ka"; // Check if the locale is Georgian

  return (
    <html
      className={`${inter.className} ${
        isGeorgian ? notoSerifGeorgian.className : ""
      }`}
    >
      <body className="w-screen overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-screen bg-neutral-100 dark:bg-stone-950 flex flex-col ">
              <Header />
              <main className="flex-grow w-full flex flex-col items-center pt-[120px]">
                {children}
                <Analytics />
              </main>
              <Toaster />
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
