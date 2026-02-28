import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fine Arts Skill Matcher",
  description: "Profiles, opportunities, and matching for fine arts professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        <div className="min-h-screen flex flex-col">
          <nav className="w-full border-b border-zinc-200/60 dark:border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                Fine Arts Skill Matcher
              </Link>

              <div className="flex items-center gap-4 text-sm">
                <Link
                  href="/profile"
                  className="hover:underline underline-offset-4"
                >
                  Profile
                </Link>
                <Link
                  href="/opportunities"
                  className="hover:underline underline-offset-4"
                >
                  Opportunities
                </Link>
              </div>
            </div>
          </nav>

          <main className="mx-auto w-full max-w-5xl px-6 py-10 flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}