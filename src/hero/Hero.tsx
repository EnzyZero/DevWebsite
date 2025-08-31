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
        <span className="hero-title-animation">Developer</span>
        !
      </h1>
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

        <span className="hero-struct-braces">{"}"}</span>
      </div>
      <div className="hero-buttons">
        <button>About Me</button>
        <button>Projects</button>
        <button id="hero-linked-in-button">LinkedIn</button>
      </div>
    </div>
  );
}