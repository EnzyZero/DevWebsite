import ProfileJPG from '../assets/me.jpg'
import './hero.css'

interface Props {
  active: boolean;
}

const heroStruct = 
<div className="hero-struct">
  <span className="hero-struct-braces">{"{"}</span>

  <div className="hero-struct-pair">
    <span className="hero-struct-key">name</span>
    :
    <span className="hero-struct-value">jakob</span>
  </div>
  <div className="hero-struct-pair">
    <span className="hero-struct-key">surname</span>
    :
    <span className="hero-struct-value">petracek</span>
  </div>
  <div className="hero-struct-pair">
    <span className="hero-struct-key">exp</span>
    :
    <span className="hero-struct-value">junior_dev</span>
  </div>
  <div className="hero-struct-pair">
    <span className="hero-struct-key">domain</span>
    :
    <span className="hero-struct-value">petracek.me</span>
  </div>

  <div className="hero-struct-pair-spacer"></div>

  <div className="hero-struct-pair">
    <span className="hero-struct-key">employed</span>
    :
    <span className="hero-struct-value false">false</span>
  </div>
  <div className="hero-struct-pair">
    <span className="hero-struct-key">cs_student</span>
    :
    <span className="hero-struct-value true">true</span>
  </div>

  <span className="hero-struct-braces">{"}"}</span>
</div>;

export default function Hero({ active }: Props) {

  const activeClass: string = active ? 'active' : '';

  return (
    <div id="hero" className={activeClass}>
      <h1 className="hero-title">
        Hi, I'm a 
        <span className="hero-title-animation"> Developer</span>
        !
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