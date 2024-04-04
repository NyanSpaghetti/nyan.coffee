import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import "./globals.css";

export const metadata: Metadata = {
    title: "nyan.coffee",
    description:
        "A software engineer at Nord and Lofu Studio, currently learning C++ and Rust.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.className}>
            <body className="min-h-screen bg-neutral-950 font-sans antialiased text-white">
                {children}
            </body>
        </html>
    );
}
