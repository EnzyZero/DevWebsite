import Hero from './hero/Hero'
import About from './about/About'
import Projects from './projects/Projects'
import Footer from './footer/Footer'

export default function Home({ active }: { active: boolean }) {

  return (
    <>
      <Hero active={active} />
      <About active={active} />
      <Projects active={active} />
      <Footer />
    </>
  );
}