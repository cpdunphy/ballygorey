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
      <body className="flex h-full">
        <div className='relative w-full flex-col'>
          <Header />
          <main className="flex-auto center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
