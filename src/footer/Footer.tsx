import ReactSVG from '../assets/react.svg?react'
import TypescriptSVG from '../assets/typescript.svg?react'
import ViteSVG from '../assets/vite.svg?react'
import CssSVG from '../assets/css.svg?react'
import JavaScriptSVG from '../assets/js.svg?react'
import './footer.css'

export default function Footer() {

  return (
    <footer id="footer">
      <p>This website was built with:</p>
      <ul>
        <li key="css"><CssSVG /></li>
        <li key="javascript"><JavaScriptSVG /></li>
        <li key="typescript"><TypescriptSVG /></li>
        <li key="react"><ReactSVG /></li>
        <li key="vite"><ViteSVG /></li>
      </ul>
    </footer>
  );
}