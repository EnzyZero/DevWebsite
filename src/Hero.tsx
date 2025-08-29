
export default function Hero() {

    return (
        <div id="hero">
            <h1 className="hero-title">Hi, I'm a Developer</h1>
            <h2 className="hero-struct">
                <span className="hero-blue">{"{"}</span>
                <span className="hero-key">name:</span>
                <span className="hero-value">jakob_petracek</span>
                <span className="hero-blue">{"}"}</span>
            </h2>
            <div className="hero-buttons">
                <button>About Me</button>
                <button>Projects</button>
                <button id="hero-linked-in-button">Linked In</button>
            </div>
        </div>
    );
}