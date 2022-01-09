import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MdOutlineClose } from "react-icons/md"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import * as styles from "./home.module.css"

const query = graphql`
  {
    allContentfulImages {
      nodes {
        name
        items {
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

export default function SpecialMoment() {
  const data = useStaticQuery(query)

  const images = data.allContentfulImages.nodes[0]

  return (
    <section className={styles.gallery}>
      <div className={styles.img_wrapper}>
        <div className={styles.image_list}>
          {images.items
            .slice(images.items.length - 6)
            .reverse()
            .map((image, i) => {
              return (
                <div key={i}>
                  <a href={`#${i}`}>
                    <GatsbyImage
                      image={getImage(image.gatsbyImageData)}
                      alt={images.name}
                      className={styles.image_item}
                    />
                  </a>

                  <div className={styles.lightbox} id={i}>
                    <a
                      href={`#${i - 1}`}
                      className="light-btn btn-prev"
                      aria-label="Prev"
                    >
                      <FaArrowLeft />
                    </a>
                    <a href="#_" className="btn-close" aria-label="Close">
                      <MdOutlineClose size={36} />
                    </a>
                    <GatsbyImage
                      image={getImage(image.gatsbyImageData)}
                      alt={images.name}
                    />
                    <a
                      href={`#${i + 1}`}
                      className="light-btn btn-next"
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
    </section>
  )
}
