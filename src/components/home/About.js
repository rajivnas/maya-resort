import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./home.module.css"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      allContentfulAbout {
        nodes {
          title
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
  `)

  const about = data.allContentfulAbout.nodes[0]

  const image = getImage(about.image.gatsbyImageData)

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.txt_block}>
          <h2>
            Welcome to <br /> The <span>Maya Resort</span>
          </h2>
          <p>{about.description}</p>
          <Link to="/about">
            <button
              type="button"
              className={`${styles.btn} ${styles.full_story}`}
            >
              Full story
            </button>
          </Link>
        </div>
        <div className={styles.img_block}>
          <GatsbyImage image={image} alt="img" />
        </div>
      </div>
    </section>
  )
}
