
import './globals.css'

export const metadata = {
  title: "Nishit Vankawala | Senior Full Stack Engineer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
