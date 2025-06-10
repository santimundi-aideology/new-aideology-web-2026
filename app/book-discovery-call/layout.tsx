import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen">
      <Navbar forceDarkLogo />
      {children}
      <Footer />
    </main>
  )
} 