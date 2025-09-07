import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Boot from './boot/Boot'
import Home from './Home'
import LoadPage from './LoadPage'

export default function App() {
  const [isBooted, setIsBooted] = useState(false);

  // the background always stays, the foreground 
  return (
    <>
      <Boot isBooted={isBooted} isBootedSetter={setIsBooted} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home active={isBooted} />} />

          <Route path="projects" >
            <Route path="start" element={<LoadPage path='/start.html' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
