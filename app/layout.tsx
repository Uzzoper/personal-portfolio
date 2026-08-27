import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-context";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juanperuzzo.is-a.dev"),
  title: "Juan Peruzzo | Developer",
  description:
    "Software developer specializing in high-performance web apps, clean architecture and SaaS. See my projects, skills and get in touch for freelance work.",
  openGraph: {
    title: "Juan Peruzzo | Developer",
    description:
      "Software developer specializing in high-performance web apps, clean architecture and SaaS. See my projects, skills and get in touch for freelance work.",
    url: "https://juanperuzzo.is-a.dev",
    siteName: "Juan Peruzzo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio.png",
        width: 1919,
        height: 924,
        alt: "Juan Peruzzo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Peruzzo | Developer",
    description:
      "Software developer specializing in high-performance web apps, clean architecture and SaaS. See my projects, skills and get in touch for freelance work.",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}