import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheus Messias | Portfolio',
  description: 'Matheus Messias é um desenvolvedor de software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
