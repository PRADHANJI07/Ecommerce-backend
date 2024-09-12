import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopProducts from './components/TopProducts'
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <TopProducts/>
    </div>
  )
}

export default App