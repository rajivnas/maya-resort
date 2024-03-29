import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/share/Background"
import Layout from "../components/share/Layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/share/Seo"

export default function Error({ data }) {
  const error = data.allContentfulPrivacyPage.nodes[0]

  const pluginImage = getImage(error.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="404"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title="404" />

      <div className="page-content container">
        <h2>Opps! Invalid page</h2>
        <p>
          Looks like you have landed in a wrong page or the page does not exist.
          Kindly back to the &nbsp;
          <Link to="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>
          &nbsp; page
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPrivacyPage {
      nodes {
        title
        background {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 70
          )
        }
      }
    }
  }
`
