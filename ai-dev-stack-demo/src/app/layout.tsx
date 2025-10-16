import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Development Stack | Build at the Speed of Thought',
  description: 'Experience the future of development with our AI-powered stack. From idea to production in minutes.',
  keywords: 'AI development, Next.js, Claude, ChatGPT, Vercel, automation',
  authors: [{ name: 'AI Dev Stack' }],
  openGraph: {
    title: 'AI Development Stack | Build at the Speed of Thought',
    description: 'Experience the future of development with our AI-powered stack.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Plausible Analytics - Replace 'your-domain.com' with your actual domain */}
        <script
          defer
          data-domain="your-domain.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
