import type { Metadata } from 'next'
import { Newsreader, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

// Hearth design language: soft serif headlines + grotesk body.
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Ember — Anonymously Vent',
  description: 'Ember is a private community where you say the quiet part out loud. Vent. Connect. Decompress. Built for the moments that never quite leave you.',
  keywords: ['community', 'venting', 'mental health', 'burnout', 'healthcare workers', 'ember app'],
  metadataBase: new URL('https://ember.vercel.app'),
  openGraph: {
    title: 'Ember — Anonymously Vent',
    description: 'A private community where you say the quiet part out loud. Vent. Connect. Decompress. Built for the moments that never quite leave you.',
    siteName: 'Ember',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember — Anonymously Vent',
    description: 'A private community where people say the quiet part out loud.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#0d0805',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("scroll-smooth", newsreader.variable, hanken.variable, "font-sans")}>
      <body className={`${hanken.className} antialiased min-h-screen text-[#fff6ef]`} style={{ background: 'radial-gradient(140% 90% at 50% 108%, #2a1408 0%, #150c07 34%, #0d0805 62%)' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#e85a2a] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}