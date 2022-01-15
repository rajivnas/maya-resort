import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaRupeeSign } from "react-icons/fa"
import Layout from "../components/share/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES } from "@contentful/rich-text-types"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Seo from "../components/share/Seo"
import * as styles from "./room.module.css"

export default function room({ data }) {
  const roomDetails = data.contentfulRooms

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
        title={roomDetails.name}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />

      <div className={styles.blank_space}></div>

      <div className={`${styles.page_content} ${styles.container}`}>
        <div className={styles.room_details}>
          <div className={styles.room_slider}>
            <Carousel showThumbs={false}>
              {roomDetails.slider.map((item, i) => {
                return (
                  <div>
                    <GatsbyImage
                      image={getImage(item.gatsbyImageData)}
                      alt={roomDetails.name}
                      key={i}
                    />
                  </div>
                )
              })}
            </Carousel>
          </div>

          <div className={styles.room_info}>
            <h3>
              <FaRupeeSign />
              {roomDetails.price} <span>/ per night</span>
            </h3>
            <h2>{roomDetails.name}</h2>
            {renderRichText(roomDetails.description, options)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    contentfulRooms(slug: { eq: $slug }) {
      name
      price
      description {
        raw
      }
      slider {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 70)
      }
    }
  }
`
