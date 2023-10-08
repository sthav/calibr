import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'




export const metadata = {
  title: 'nexcent',
  description: 'Uncover business like never before',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
