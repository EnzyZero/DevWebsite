import CSVG from '../assets/c.svg?react'
import CppSVG from '../assets/cpp.svg?react'
import CsSVG from '../assets/cs.svg?react'
import CMakeSVG from '../assets/cmake.svg?react'

import JavaSVG from '../assets/java.svg?react'
import GradleSVG from '../assets/gradle.svg?react'
import PythonSVG from '../assets/python.svg?react'

import JavaScriptSVG from '../assets/js.svg?react'
import TypeScriptSVG from '../assets/typescript.svg?react'
import ReactSVG from '../assets/react.svg?react'
import CssSVG from '../assets/css.svg?react'
import HtmlSVG from '../assets/html.svg?react'
import ViteSVG from '../assets/vite.svg?react'

import LinuxSVG from '../assets/linux.svg?react'
import UbuntuSVG from '../assets/ubuntu.svg?react'
import VimSVG from '../assets/vim.svg?react'
import DockerSVG from '../assets/docker.svg?react'
import GitlabSVG from '../assets/gitlab.svg?react'


export default function TechstackMarquee() {

  return (
    <div className="techstack">
      <ul>
        <li key="c"><CSVG /></li>
        <li key="cpp"><CppSVG /></li>
        <li key="cs"><CsSVG /></li>
        <li key="cmake"><CMakeSVG /></li>
        <li key="java"><JavaSVG /></li>
        <li key="gradle"><GradleSVG /></li>
        <li key="python"><PythonSVG /></li>
        <li key="javascript"><JavaScriptSVG /></li>
        <li key="typescript"><TypeScriptSVG /></li>
        <li key="react"><ReactSVG /></li>
        <li key="css"><CssSVG /></li>
        <li key="html"><HtmlSVG /></li>
        <li key="vite"><ViteSVG /></li>
        <li key="linux"><LinuxSVG /></li>
        <li key="ubuntu"><UbuntuSVG /></li>
        <li key="vim"><VimSVG /></li>
        <li key="docker"><DockerSVG /></li>
        <li key="git"><GitlabSVG /></li>
      </ul>
    </div>
  );
}