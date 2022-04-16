import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Background from "../components/share/Background"
import Layout from "../components/share/Layout"
import Seo from "../components/share/Seo"

export default function about({ data }) {
  const about = data.allContentfulAboutPage.nodes[0]

  const pluginImage = getImage(about.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title={about.title}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={about.title} />

      <div className="page-content container">{renderRichText(about.body)}</div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulAboutPage {
      nodes {
        title
        background {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 70
          )
        }
        body {
          raw
        }
      }
    }
  }
`
