import ProfileJPG from '../assets/me.jpg'
import { heroStructText as heroStruct } from '../texts';
import './hero.css'

interface Props {
  active: boolean;
}


export default function Hero({ active }: Props) {

  const activeClass: string = active ? 'active' : '';

  return (
    <div id="hero" className={activeClass}>
      <h1 className="hero-title">
        Hi, I'm a 
        <span className="hero-title-animation"> Developer</span>
      </h1>


      <div className="hero-profile-container">
        <img src={ProfileJPG} alt="Jakob Petracek" className="hero-profile-picture desktop" />
        {heroStruct}
      </div>

      <div className="hero-buttons">
        <a href="#about">
          <button>About</button>
        </a>
        <a href="#projects">
          <button>Projects</button>
        </a>
        <a id="hero-linked-in-link" href="https://www.linkedin.com/in/jakob-petracek" target="_blank">
          <button>LinkedIn</button>
        </a>
        <a id="hero-github-link" href="https://github.com/EnzyZero" target="_blank">
          <button>Github</button>
        </a>
      </div>

      <img src={ProfileJPG} alt="Jakob Petracek" className="hero-profile-picture mobile" />

    </div>
  );
}