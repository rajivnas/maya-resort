import { Link } from "gatsby"
import React from "react"
import menu from "../../constants/menu"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <Link to="/">
              <img
                src="/logo.png"
                className="logo"
                width="100"
                height="auto"
                alt="Logo"
              />
            </Link>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              unde.
            </p>
          </div>
          <div className="footer_link">
            <h3>Quick Links</h3>

            <ul>
              {menu.map((link, i) => (
                <li key={i}>
                  <Link to={link.to}>
                    <p>{link.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-others">
            <h3>Options</h3>
            <ul>
              <li>
                <a href="mailto:someone@example.com">
                  <p>mayaresort@gmail.com</p>
                </a>
              </li>
              <li>
                <a href="tel:9080808080">
                  <p>9080808080</p>
                </a>
              </li>
              <li>
                <Link to="/guidelines">
                  <p>Guidelines</p>
                </Link>
              </li>
              <li>
                <Link to="/privacy">
                  <p>Privacy</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_credit">
          <p>Copyright ©{new Date().getFullYear()} | mayaresort.com</p>
          <span>
            Designed & Developed by{" "}
            <a
              href="https://www.naskar.dev/"
              target="_blank"
              aria-label="Kishore Naskar"
              rel="noreferrer"
            >
              naskar.dev
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
