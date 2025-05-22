import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientWrapper from '@/components/ClientWrapper'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CreatorNex - Powering Your Social & AI Presence',
  description: 'CreatorNex offers AI Agents, Social Media Marketing, Design, and Video services to elevate your brand. Book a free consult today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 