import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import menu from "../../constants/menu"

export default function Navbar() {
  const [show, setShow] = useState(false)
  const [navScroll, setNavbar] = useState(false)

  //nav scroll
  const scrollHeader = () => {
    if (window.scrollY >= 45) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    scrollHeader()
    window.addEventListener("scroll", scrollHeader)
  })

  return (
    <header className={navScroll ? "navScroll" : "navbar"}>
      <div className="nav-logo">
        <Link to="/">
          <img src="/logo.png" className="logo" width="100" alt="Logo" />
          <img
            src="/logo-white.png"
            className="logo-white"
            width="100"
            alt="Logo"
          />
        </Link>
      </div>

      <nav className="topnav">
        <div className="nav_links">
          {menu.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="nav_link"
              activeClassName="active_link"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </nav>

      <button
        className="menu-toggle"
        aria-label="menu"
        onClick={() => setShow(!show)}
      >
        <BiMenu />
      </button>

      <aside className={show ? "sidenav active" : "sidenav"}>
        <button
          className="menu-toggle"
          aria-label="menu"
          onClick={() => setShow(!show)}
        >
          <BiX />
        </button>
        <div className="nav-items">
          {menu.map((link, i) => (
            <Link key={i} to={link.to}>
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </aside>
    </header>
  )
}
