import React from "react"
import { Link } from "gatsby"
import LabelMenus from "../components/LabelMenus"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenusPage = () => (
  <div>
    <SEO title="Menus" />
    <LabelMenus />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default MenusPage
