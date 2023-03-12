import Header from "./component/Header"
import HeroSection from "./component/HeroSection"
import AboutSection from "./component/ValuesSection"
import ServiceSection from "./component/ServiceSection"
import OurworkSection from "./component/OurworkSection"
import BannerSection from "./component/BannerSection"
import Footer from "./component/Footer"

import Custom from "./assets/js/Custom"

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
        <main id="main">
          <AboutSection/>
          <ServiceSection/>
          <OurworkSection/>
          <BannerSection/>
        </main>
        <Footer/>
        <Custom/>
    </>
  )
}

export default App
