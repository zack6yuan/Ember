import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DynaPuff } from 'next/font/google'
import './globals.css'
const ztNature = localFont({
  src: [
    {
      path: '../public/fonts/ZTNature-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZTNature-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ZTNature-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-zt-nature',
})
const dynaPuff = DynaPuff({
  subsets: ['latin'],
  variable: '--font-dyna-puff',
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
    description: 'A private community where nurses say the quiet part out loud.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#000000',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ztNature.variable} ${dynaPuff.variable} scroll-smooth`}>
      <body className={`${ztNature.className} antialiased min-h-screen text-white`} style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 40%, #1a0505 0%, #0a0000 40%, #000000 100%)' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}