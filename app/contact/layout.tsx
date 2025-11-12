import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-dvh">
      <Navbar forceDarkLogo />
      {children}
      <Footer />
    </main>
  )
}
