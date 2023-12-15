import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Sähkötiedot</h1>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/dashboard/search"}>Search</Link>
        {children}
      </body>
    </html>
  )
}