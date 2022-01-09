import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/share/Background"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES } from "@contentful/rich-text-types"
import Layout from "../components/share/Layout"
import Seo from "../components/share/Seo"

export default function guidelines({ data }) {
  const guideline = data.allContentfulGuidelinePage.nodes[0]

  const pluginImage = getImage(guideline.background.gatsbyImageData)

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
        title={guideline.title}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={guideline.title} />

      <div className="page-content container">
        {renderRichText(guideline.body, options)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGuidelinePage {
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
