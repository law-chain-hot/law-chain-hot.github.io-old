/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import GitHubIcon from "@material-ui/icons/GitHub"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/luo-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio-container">
      <div className="bio">
        {avatar && (
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="bio-avatar"
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        )}
        {author?.name && (
          <div className="Flex-box-center">
            <p>
              Personal blog by
              <a className="a-underline" href="https://github.com/law-chain-hot"> Brian Luo </a>
            </p>
            <p style={{fontSize: 'small'}}>An Engineering Master Student @ UIUC && Front End Developer</p>
          </div>
        )}
      </div>
      <div></div>
      <div>
        {/* <a href="https://github.com/law-chain-hot">
          <GitHubIcon color="action" fontSize="medium" />
        </a> */}
      </div>
    </div>
  )
}

export default Bio
