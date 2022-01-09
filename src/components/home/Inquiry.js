import React from "react"
import * as styles from "./home.module.css"

export default function Inquiry() {
  return (
    <div className={styles.container}>
      <div className={styles.inquiry_form}>
        <form action="#">
          <div className={styles.form_group}>
            <label htmlFor="name">Your name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              className={styles.name}
              placeholder="Kishore Naskar"
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="phone">Pnone number:</label> <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 9804893907"
            />
          </div>
          <div className={`${styles.form_group} ${styles.form_date}`}>
            <div>
              <label htmlFor="arrive">Arriving on:</label> <br />
              <input type="date" id="arrive" name="arrive" />
            </div>
            <div>
              <label htmlFor="depar">Departure:</label> <br />
              <input type="date" id="depar" name="depar" />
            </div>
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
