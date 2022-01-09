import React from "react"
import Layout from "../components/share/Layout"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Amenities from "../components/home/Amenities"
import Rooms from "../components/home/Rooms"
import Gallery from "../components/home/Gallery"
import Testimonials from "../components/Testimonials"
import Seo from "../components/share/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Best resort in Howrah" />
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Testimonials />
      <Gallery />
    </Layout>
  )
}
