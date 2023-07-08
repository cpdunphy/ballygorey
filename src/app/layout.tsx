import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: {
    default: 'Ballygorey',
    template: `%s | Ballygorey`,
  },
  description: 'Personal website of Collin Dunphy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <meta name="theme-color" content="teal"></meta>
      </head>
      <body>
        <Header />
        <main className="flex-start mx-auto max-w-7xl flex-col px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
