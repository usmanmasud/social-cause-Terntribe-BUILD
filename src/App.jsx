import CardsSection from "./components/Card"
import Footer from "./components/Footer"
import GetInvolved from "./components/GetInvolved"
import Hero from "./components/Hero"
import { Navbar } from "./components/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsSection />
      <GetInvolved />
      <Footer />
    </>
  )
}

export default App
