import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaQuoteLeft } from "react-icons/fa"
import * as styles from "./component.module.css"

import Carousel from "react-elastic-carousel"

const query = graphql`
  {
    allContentfulTestimonials(limit: 7, sort: { fields: date, order: DESC }) {
      edges {
        node {
          name
          review
          avatar {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 70
            )
          }
          date(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`

export default function Testimonials() {
  const data = useStaticQuery(query)

  const reviews = data.allContentfulTestimonials.edges

  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.section_title}>
          <h2>Guest Reviews</h2>
          <p>Most valuable words from our guests</p>
        </div>

        <Carousel>
          {reviews.map((review, i) => {
            return (
              <div className={styles.tes_card} key={i}>
                <FaQuoteLeft className={styles.quote_icon} />
                <p>&nbsp; &nbsp; {review.node.review}</p>
                <div className={styles.guest_info}>
                  <GatsbyImage
                    image={getImage(review.node.avatar.gatsbyImageData)}
                    alt={review.node.name}
                  />
                  <div>
                    <span> {review.node.name}</span>
                    <br />
                    <small>{review.node.date}</small>
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}
