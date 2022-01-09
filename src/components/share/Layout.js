import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "@fontsource/poppins"
import Topbar from "./Topbar"

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
