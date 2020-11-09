import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Bio from "./bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h2 className="main-heading">
        <Link to="/">{title}</Link>
      </h2>
    )
  } else {
    header = (
      <h2 className="main-heading">
        <Link to="/">Back to {title}</Link>
      </h2>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <Bio />
        <p style={{ fontSize: "small" }}>
          © {new Date().getFullYear()}, Built on {new Date().toDateString()}
          {` `}
          using <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
