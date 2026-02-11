import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'CineScope',
  description:
    'A Next.js movie discovery app demonstrating proper routing, rendering strategies, and URL-driven state management.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <Header />
          <Navbar />
          <main className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-6">
              <SearchBox />
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
