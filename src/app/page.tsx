import LandingPage from "@/components/LandingPage";
import { IBM_Plex_Mono } from 'next/font/google'


const roboto = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
  })
export default function Home() {
  return (
    <div className={roboto.className}>
      <LandingPage/>
    </div>
  );
}


/*
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000012] relative overflow-hidden">
      <div className="stars absolute inset-0 z-0"></div>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
*/