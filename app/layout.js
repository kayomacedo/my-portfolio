import { Poppins} from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'], weight:['300','400','500','600'] })

export const metadata = {
  title: 'Kayo Macedo',
  description: 'Kayo Macedo is a Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>

    </html>
  )
}
