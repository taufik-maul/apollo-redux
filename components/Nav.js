import Link from 'next/link'
import { withRouter } from 'next/router'
import { withRedux } from '../lib/redux';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, makeStyles, Typography, Button, colors, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  nav: {
    color: 'white',
    border: '1px solid transparent',
    '&:not(last-child)': {
      marginRight: '20px'
    },
    '&.is-active, &:hover': {
      color: 'yellow',
      border: '1px solid yellow'
    },
    '& .material-icons': {
      marginRight: '5px'
    }
  }
}));

const Nav = ({ router: { pathname } }) => {
  const cart = useSelector((state) => state.cart);
  const cartCount = (cart.cart.length)?cart.cart.reduce((accum,item) => parseInt(accum) + parseInt(item.qty), 0):0
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Icon>fingerprint</Icon>BalanjaDidieu.com
        </Typography>
        <Link href="/">
          <Button size="small" className={`${classes.nav} ${(pathname === '/'?'is-active' : '')}`}><Icon>home</Icon> Home</Button>
        </Link>
        <Link href="/cart">
          <Button size="small" className={`${classes.nav} ${(pathname === '/cart'?'is-active' : '')}`}><Icon>shopping_cart</Icon> My Cart <span className="cart-counter">{cartCount}</span></Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default compose(withRedux, withRouter)(Nav)
