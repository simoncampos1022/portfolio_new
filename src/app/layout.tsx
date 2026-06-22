import type { Metadata } from 'next'
import { Nunito_Sans, Quicksand } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SiteBackground } from '@/components/site-background'
import { ProgressSidebar } from '@/components/progress-sidebar'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://simoncampos1022.vercel.app'),
  title: 'Simon Degala Campos - Senior Software Enigneer | Backend & Python Expert',
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
    title: 'Simon Degala Campos - Senior Software Enigneer | Backend & Python Expert',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${quicksand.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteBackground>
            <ProgressSidebar />
            <div className="relative z-10 flex min-h-screen flex-col pt-16">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SiteBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
