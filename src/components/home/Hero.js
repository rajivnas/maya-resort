import React from "react"
import { Link } from "gatsby"
import * as styles from "./home.module.css"
import Inquiry from "./Inquiry"

export default function Hero() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>
              Your Favourite Destination <br /> For Next Vacation
            </h1>

            <Link to="/gallery">
              <button
                type="button"
                className={`${styles.btn} ${styles.btn_gallery}`}
              >
                View photos
              </button>
            </Link>
            <a
              href="https://weddingz.in/howrah/maya-resort-benaras-road/"
              target="_blank"
              aria-label="Weddingz.in"
              rel="noreferrer"
            >
              <button
                type="button"
                className={`${styles.btn} ${styles.btn_book}`}
              >
                Book now
              </button>
            </a>
          </div>
        </div>
      </div>

      <Inquiry />
    </>
  )
}
