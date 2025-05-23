import { ThemeProvider } from '@/components/theme/ThemeProvider'
import ClientWrapper from '@/components/ClientWrapper'
import '@/app/globals.css'

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
      <body className="font-sans">
        <ThemeProvider defaultTheme="light" storageKey="creatornex-theme">
          <ClientWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 