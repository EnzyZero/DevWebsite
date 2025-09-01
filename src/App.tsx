import { useState } from 'react'
import Boot from './boot/Boot'
import Hero from './hero/Hero'
import About from './about/About'
import Projects from './projects/Projects'

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      <Boot isBooted={isBooted} isBootedSetter={setIsBooted} />
      <Hero active={isBooted} />

      {isBooted &&
        <>
          <About />
          <Projects />
        </>
      }
    </>
  )
}

export default App
