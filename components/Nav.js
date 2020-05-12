import Link from 'next/link'
import { withRouter } from 'next/router'
import { withRedux } from '../lib/redux';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, makeStyles, Typography, Button, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  nav: {
    color: 'white',
    borderColor: 'white',
    marginRight: '20px'
  }
}));

const Nav = ({ router: { pathname } }) => {
  const cartCount = useSelector((state) => state.cart.cartCount)
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Magento
        </Typography>
        <Link href="/">
          <Button size="small" variant="outlined" className={pathname === '/' ? 'is-active' : '' + classes.nav}>Home</Button>
        </Link>
        <Link href="/cart">
          <Button size="small" variant="outlined" className={pathname === '/cart' ? 'is-active' : '' + classes.nav}>My Cart <span className="cart-counter">{cartCount}</span></Button>
        </Link>
        <style jsx>{`
          header {
            margin-bottom: 25px;
          }
          a {
            font-size: 14px;
            margin-right: 15px;
            text-decoration: none;
          }
          .is-active {
            text-decoration: underline;
          }
        `}</style>
      </Toolbar>
    </AppBar>
  )
}

export default compose(withRedux, withRouter)(Nav)
