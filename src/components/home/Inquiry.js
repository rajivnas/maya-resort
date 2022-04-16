import React from "react"
import * as styles from "./home.module.css"

export default function Inquiry() {
  return (
    <div className={styles.container}>
      <div className={styles.inquiry_form}>
        <form
          action="https://mr-inquiry.herokuapp.com/api/inquiry"
          method="POST"
        >
          <div className={styles.form_group}>
            <label htmlFor="name">Your name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              className={styles.name}
              placeholder="Apurba Chatterjee"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="phone">Pnone number:</label> <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 9804XXXXXX"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="arrive">Arriving on:</label> <br />
            <input type="date" id="arrive" name="arrive" required />
          </div>
          <div>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btn_inquiry}`}
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
