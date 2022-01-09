import React from "react"
import * as styles from "./home.module.css"
import amenities from "../../constants/amenities"

export default function Amenities() {
  return (
    <section className={styles.amenities}>
      <div className={styles.container}>
        <div className={styles.section_title}>
          <h2>Top Amenities</h2>
          <p>Select a room that suit on your budget</p>
        </div>

        <div className={styles.amenities_list}>
          {amenities.map(amenitie => {
            return (
              <div className={styles.amenities_item} key={amenitie.id}>
                <div className={styles.icon}>{amenitie.icon}</div>
                <h3>{amenitie.title}</h3>
                <p>{amenitie.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
