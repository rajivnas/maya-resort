import React from "react"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

export default function Background({ image, styleClass, title, children }) {
  return (
    <>
      <BgImage image={image} className={styleClass}>
        <div className="bg-content">
          <h1>{title}</h1>

          <p>
            <span>
              <Link to="/">Home</Link>
            </span>
            &nbsp; / {title}
          </p>
        </div>
        {children}
      </BgImage>
    </>
  )
}

Background.defaultProps = {
  title: "Default Title",
  styleClass: "default-background",
}
