import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES } from "@contentful/rich-text-types"
import Background from "../components/share/Background"
import Layout from "../components/share/Layout"
import Seo from "../components/share/Seo"

export default function service({ data }) {
  const service = data.allContentfulServicePage.nodes[0]

  const pluginImage = getImage(service.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <Layout>
      <Seo
        title={service.title}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={service.title} />

      <div className="page-content container">
        {renderRichText(service.body, options)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulServicePage {
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
