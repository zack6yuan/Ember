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
  title: 'Your App',
  description: 'Your description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ztNature.variable}>
      <body className={`${ztNature.className} antialiased min-h-screen bg-gradient-to-b from-black to-[#0015FF] text-white`}>
        {children}
      </body>
    </html>
  )
}