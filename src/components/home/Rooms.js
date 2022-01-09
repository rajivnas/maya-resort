import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./home.module.css"

const query = graphql`
  {
    allContentfulRooms(sort: { fields: thumbnail___title, order: ASC }) {
      edges {
        node {
          name
          price
          slug
          thumbnail {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 70
            )
          }
        }
      }
    }
  }
`

export default function Rooms() {
  const data = useStaticQuery(query)

  const rooms = data.allContentfulRooms.edges

  return (
    <section className={styles.rooms}>
      <div className={styles.container}>
        <div className={styles.section_title}>
          <h2>Room & Suites</h2>
          <p>Select a room that suit on your budget</p>
        </div>

        <div className={styles.room_list}>
          {rooms.map((room, i) => {
            return (
              <div className={styles.room_item} key={i}>
                <GatsbyImage
                  image={getImage(room.node.thumbnail.gatsbyImageData)}
                  alt={room.node.name}
                />
                <div className={styles.room_details}>
                  <p>₹{room.node.price}/night</p>
                  <Link to={`/${room.node.slug}`}>
                    <h3>{room.node.name}</h3>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
