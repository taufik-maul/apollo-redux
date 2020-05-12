import React from 'react'
import Nav from './Nav'
import Head from 'next/head';
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core';

const Layout = ({ children, pageConfig }) => (
  <>
    <Head>
        <title>{pageConfig.title}</title>
    </Head>
    <Nav />
    <main>
      <Container maxWidth="md">
        <section className="main content">
          {children}
        </section>
      </Container>
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
