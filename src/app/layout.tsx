import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Simon Campos - AI Backend Developer',
  description: 'AI Backend Developer & Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems.',
  keywords: ['AI', 'Backend Developer', 'Python', 'Machine Learning', 'Full Stack', 'Portfolio'],
  authors: [{ name: 'Simon Degala Campos' }],
  creator: 'Simon Degala Campos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simoncampos.dev',
    title: 'Simon Campos - AI Backend Developer',
    description: 'AI Backend Developer & Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems.',
    siteName: 'Simon Campos Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simon Campos - AI Backend Developer',
    description: 'AI Backend Developer & Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems.',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
