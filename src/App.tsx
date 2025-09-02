import { useState } from 'react'
import Boot from './boot/Boot'
import Hero from './hero/Hero'
import About from './about/About'
import Projects from './projects/Projects'
import Footer from './footer/Footer'

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      <Boot isBooted={isBooted} isBootedSetter={setIsBooted} />
      <Hero active={isBooted} />
      <About active={isBooted} />
      <Projects active={isBooted} />
      <Footer />
    </>
  )
}

export default App
