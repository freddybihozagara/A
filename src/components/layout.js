import React from "react"
import { Link } from "gatsby"
import SocialMedia from './socialmedia';
import {GrReactjs} from "react-icons/gr/";
import {GrGatsbyjs} from "react-icons/gr/";
import {GrNode} from "react-icons/gr/";
import {SiTypescript} from "react-icons/si";
import {FaNpm} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {SiFlutter} from "react-icons/si";
import {DiSqllite} from "react-icons/di";
import {SiGraphql} from "react-icons/si";
import {SiNetlify} from "react-icons/si";
import { IconContext } from "react-icons";


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <SocialMedia/>
      <main>{children}</main>
      <SocialMedia/>
      <footer>
      <IconContext.Provider value={{ size: "10em", color: "#002e06" }}>
        <div>
        <a href="https://reactjs.org/"><GrReactjs/></a>
        <a href="https://nodejs.org/"><GrNode/></a>
        <a href="https://www.typescriptlang.org/"><SiTypescript/></a>
        <a href="https://www.npmjs.com/"><FaNpm/></a>
        <a href="https://www.python.org/"><FaPython/></a>
        <a href="https://flutter.dev/"><SiFlutter/></a>
        <a href="https://graphql.org/"><SiGraphql/></a>
        <a href="https://sqlite.org/"><DiSqllite/></a>
        <a href="https://www.netlify.com/"><SiNetlify/></a>
        </div>
        <div>
        
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com"><GrGatsbyjs/></a>
        </div>
        </IconContext.Provider>
      </footer>
    </div>
  )
}

export default Layout
