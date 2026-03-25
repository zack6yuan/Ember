import type { Metadata } from 'next'
import localFont from 'next/font/local'
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
export const metadata: Metadata = {
  title: 'Scrubs',
  description: "A community venting app for nurses and healthcare workers",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ztNature.variable} scroll-smooth`}>
      <body className={`${ztNature.className} antialiased min-h-screen text-white`} style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 40%, #1a0505 0%, #0a0000 40%, #000000 100%)' }}>
        {children}
      </body>
    </html>
  )
}