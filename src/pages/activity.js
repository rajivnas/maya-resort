import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Background from "../components/share/Background"
import Layout from "../components/share/Layout"
import { graphql } from "gatsby"
import Seo from "../components/share/Seo"

export default function activity({ data }) {
  const activities = data.allContentfulActivityPage.nodes[0]
  const activity = data.allContentfulActivity.nodes

  const pluginImage = getImage(activities.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]
  return (
    <Layout>
      <Seo
        title={activities.title}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={activities.title} />

      <div className="page-content container">
        <h2>This is the activity page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          harum obcaecati et, ipsum odit animi alias sit expedita atque sequi
          sed! ipsum odit animi alias sit
        </p>

        {activity.map((item, i) => {
          return (
            <div className="activity-item" key={i}>
              <div
                className={
                  i % 2 === 0 ? `activity-image-first` : `activity-image-last`
                }
              >
                <GatsbyImage
                  image={getImage(item.image.gatsbyImageData)}
                  alt={item.name}
                />
              </div>
              <div className="activity-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulActivityPage {
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

    allContentfulActivity(sort: { fields: createdAt, order: ASC }) {
      nodes {
        name
        description
        image {
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
