import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi peeps</h1>
    <p>Welcome to the Toca87 site.</p>
    <Link to="/dj/">Go to Dj</Link>
  </Layout>
);

export default IndexPage
