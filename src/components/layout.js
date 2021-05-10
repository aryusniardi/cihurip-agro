import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Navbar"
import Profile from './Profile'
import Do from './Do'
import Product from "./Product"
import Client from "./Client"
import Footer from './Footer'
import Hero from "./Hero"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Do />
      {/* <Product /> */}
      <Client />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
