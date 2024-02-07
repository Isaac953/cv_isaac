import { Inter } from 'next/font/google'
import { Header } from "./components/Header"
import { Main } from './components/Main'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Arias CV',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" type="image/png" href="/icons/cv_icon.png"/>
      <body suppressHydrationWarning={true}>
        <Header />
        <Main />
        <Footer />
      </body>
    </html>
  )
}
