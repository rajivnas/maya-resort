import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/share/Background"
import Layout from "../components/share/Layout"
import Seo from "../components/share/Seo"

export default function thanks({ data }) {
  const thanks = data.allContentfulPrivacyPage.nodes[0]

  const pluginImage = getImage(thanks.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Thanks"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title="Thanks" />

      <div className="page-content container">
        <h2>Thank you for your inquery</h2>
        <p>
          We have received your request, and will get back to you very soon. We
          usually response within 24 hours
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
