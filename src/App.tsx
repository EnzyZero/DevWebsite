import { useState } from 'react'
import Boot from './boot/Boot'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      <Boot />
      {isBooted &&
        <>
          <Hero />
          <About />
          <Projects />
        </>
      }
    </>
  )
}

export default App
