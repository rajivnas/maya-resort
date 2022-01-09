import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import Background from "../components/share/Background"
import { MdCall, MdLocationOn, MdEmail } from "react-icons/md"
import Layout from "../components/share/Layout"
import Seo from "../components/share/Seo"

export default function contact({ data }) {
  const contact = data.allContentfulContactPage.nodes[0]

  const pluginImage = getImage(contact.background.gatsbyImageData)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title={contact.title}
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={contact.title} />

      <div className="page-content container">
        <h2>This is the Contact page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          harum obcaecati et, ipsum odit animi alias sit.
        </p>

        <div className="contact-area">
          <div className="contact-info">
            <h3>Contact info</h3>

            <p>
              <MdLocationOn size={24} />
              Jotgiri, Howrah, West Bengal 711114
            </p>
            <p>
              <MdCall size={24} /> +91 99035 00000 / 90073 00000
            </p>
            <p>
              <MdEmail size={24} /> mayaresort@gmail.com
            </p>

            <div className="bank-info">
              <h3>Bank Details</h3>

              <p>Name : State Bank Of India</p>
              <p>Branch : Jagadishpur, Howrah</p>
              <p>Beneficiary : Maya Resort Pvt.</p>
              <p>A/c No : 34040000000</p>
              <p>IFSC : SBIN0000010</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send your message</h3>

            <form
              className="contact"
              action="https://formspree.io/f/mbjwlqnl"
              method="POST"
            >
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  name="name"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  name="email"
                  type="email"
                  required
                />
              </fieldset>

              <fieldset>
                <input
                  placeholder="Your Phone Number"
                  type="tel"
                  name="phone"
                  required
                />
              </fieldset>

              <fieldset>
                <textarea
                  placeholder="Type your message here...."
                  name="message"
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulContactPage {
      nodes {
        title
        background {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 70
          )
        }
      }
    }
  }
`
