import React, { useState } from "react";
import { withRedux } from "../lib/redux";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, updateCart } from "../redux/action/actionCart";
import Layout from "../components/Layout";
import { Button, TextField, Grid, makeStyles, Icon } from "@material-ui/core";

const useStyles= makeStyles((theme) => ({
  cartItem: {
    borderBottom: '1px solid #C0C0C0',
    paddingBottom: '10px',
    '&:not(:last-child)': {
      marginBottom: '10px'
    },
    '& img': {
      width: '100%'
    },
    '& h3': {
      marginBottom: '5px',
    },
    '& .sku': {
      marginBottom: '10px',
    },
    '& .price': {
      marginBottom: '15px',
    }
  }
}))

const cart = () => {
  const pageConfig = {
    title: "My Cart",
  };
  const cartData = useSelector((state) => state.cart);
  let qtyInitial = [];
  if(cartData.cart.length){
    cartData.cart.map((item) => {
      qtyInitial[item.id] = {qty: item.qty, product:item.product};
    })
  }
  const [qty, setQty] = useState(qtyInitial);
  const dispatch = useDispatch();
  const classes = useStyles();

  console.log(qty)

  const handleUpdateQty = (e, id) => {
      
    dispatch(updateCart(id, e.target.value));
  };

  const handleChangeQty = (e, id) => {
      qty[id].qty = parseInt(e.target.value)
      setQty(qty)
  };

  const handleRemove = (e, id) => {
    e.preventDefault();

    dispatch(removeCart(id));
  };

  return (
    <Layout pageConfig={pageConfig}>
      <div className="cart-wrapper">
        <div className="cart-title">
          <h1>My Cart <span className="counter">{cartData.nt}</span></h1>
        </div>
        <div className="cart-content">
          <div className="cart-items">
            {cartData.cart.length ? (
              cartData.cart.map((item) => (
                <div className={classes.cartItem} key={item.id}>
                  <Grid container>
                    <Grid item sm={3}>{item.product.image}</Grid>
                    <Grid item sm={9}>
                      <h3>{item.product.name}</h3>
                      <small className="sku">SKU: {item.product.sku}</small>
                      <strong className="price">{item.product.price}</strong>
                      <div className="cart-actions">
                        <TextField 
                          name="qty"
                          id="qty"
                          label="Qty"
                          variant="filled"
                          value={parseInt(qty[item.id].qty)}
                          onBlur={(e) => handleUpdateQty(e, item.id)}
                          onChange={(e) => handleChangeQty(e, item.id)}
                        />
                        <Button color="primary"
                          className="action remove"
                          onClick={(e) => handleRemove(e, item.id)}
                        >
                          <span><Icon>delete</Icon></span>
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              ))
            ) : (
              <div className="empty">Noting</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRedux(cart);
