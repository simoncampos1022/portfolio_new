import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://simoncampos1022.vercel.app'),
  title: 'Simon Degala Campos - Senior Software Engineer | Backend & Python Expert',
  description: 'Senior Software Engineer | Backend & Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems.',
  keywords: ['Senior Software Engineer', 'Backend', 'Python', 'Machine Learning', 'Full Stack', 'Portfolio'],
  authors: [{ name: 'Simon Degala Campos' }],
  creator: 'Simon Degala Campos',
  icons: {
    icon: '/simon.ico',
    shortcut: '/simon.ico',
    apple: '/simon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simoncampos1022.vercel.app',
    title: 'Simon Degala Campos - Senior Software Engineer | Backend & Python Expert',
    description: 'Senior Software Engineer | Backend & Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems.',
    siteName: 'Simon Degala Campos Portfolio',
    images: [
      {
        url: '/simon.ico',
        width: 512,
        height: 512,
        alt: 'Simon Degala Campos - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simon Degala Campos - Senior Software Engineer | Backend & Python Expert',
    description: 'Senior Software Engineer | Backend & Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems.',
    images: ['/simon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
