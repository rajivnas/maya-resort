import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Background from "../components/share/Background"
import { MdOutlineClose } from "react-icons/md"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Layout from "../components/share/Layout"
import Seo from "../components/share/Seo"
import * as styles from "../styles/lightbox.module.css"

export default function gallery({ data }) {
  const gallery = data.allContentfulGalleryPage.nodes[0]
  const images = data.allContentfulImages.nodes[0]

  const pluginImage = getImage(gallery.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title={gallery.title}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={gallery.title} />

      <div className="page-content container">
        <h2>This is the Gallery page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          harum obcaecati et, ipsum odit animi alias
        </p>

        <div className="ga-photo-grid">
          {images.items
            .slice(0, 48)
            .reverse()
            .map((image, i) => {
              return (
                <div key={i}>
                  <a href={`#${i}`}>
                    <GatsbyImage
                      image={getImage(image.gatsbyImageData)}
                      alt={images.name}
                      className="ga-image-item"
                    />
                  </a>

                  <div className={styles.lightbox} id={i}>
                    <a
                      href={`#${i - 1}`}
                      className={`${styles.light_btn} ${styles.btn_prev}`}
                      aria-label="Preview"
                    >
                      <FaArrowLeft />
                    </a>
                    <a
                      href="#_"
                      className={styles.btn_close}
                      aria-label="Close"
                    >
                      <MdOutlineClose size={36} />
                    </a>
                    <GatsbyImage
                      image={getImage(image.gatsbyImageData)}
                      alt={images.name}
                    />
                    <a
                      href={`#${i + 1}`}
                      className={`${styles.light_btn} ${styles.btn_next}`}
                      aria-label="Next"
                    >
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulGalleryPage {
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

    allContentfulImages {
      nodes {
        name
        items {
          createdAt
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
