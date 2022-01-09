import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({ title, description, keywords }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle:title
          siteDesc:description
          author
          image
          twitterUsername
          keywords
          siteUrl
        }
      }
    }
  `)

  
  const metaKeywords = keywords || site.siteMetadata.keywords.join(",")
  const {siteTitle, siteDesc, author, image, twitterUsername,siteUrl } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
    >

    <meta name="description" content={description || siteDesc}/>
    <meta name="keywords" content={metaKeywords} />

    {/* Author & Image  */}
    <meta name= "author" content ={author}/>
    <meta name= "image" content ={image}/>

    {/* Twiter card   */}
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:creator" content= {twitterUsername} />
   <meta name="twitter:title" content= {siteTitle} />
   <meta name="twitter:description" content= {siteDesc} />
   <meta name="twitter:image" content= {`${siteUrl}${image}`} />
    </Helmet>
  )
}
