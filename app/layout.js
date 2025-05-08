import './globals.css'

export const metadata = {
  title: 'Silver Moon Catalog',
  description: 'Admin + Catalog UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
