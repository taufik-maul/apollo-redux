import React from 'react'
import Nav from './Nav'
import Head from 'next/head';
import PropTypes from 'prop-types'
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'sans-serif',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px'
  }
}))

const Layout = ({ children, pageConfig }) => {
  const classes = useStyles();
  return(
    <section className={classes.root}>
      <Head>
          <title>{pageConfig.title}</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Nav />
      <main>
        <Container maxWidth="md">
          <section className="main content">
            {children}
          </section>
        </Container>
      </main>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
