import React, { useState } from "react";
import { withRedux } from "../lib/redux";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, updateCart } from "../redux/action/actionCart";
import Layout from "../components/Layout";
import { Button, TextField } from "@material-ui/core";

const cart = () => {
  const pageConfig = {
    title: "My Cart",
  };
  const cartData = useSelector((state) => state.cart);
  const [qty, setQty] = useState([...cartData.cart]);
  const dispatch = useDispatch();

  const handleUpdateQty = (e, id) => {
      
    dispatch(updateCart(id, e.target.value));
  };

  const handleChangeQty = (e, id) => {
      const idx = qty.findIndex(item => item.id === id)
      qty[idx].qty = e.target.value
      console.log(qty)
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
          <h1>My Cart <span className="counter">{cartData.cartCount}</span></h1>
        </div>
        <div className="cart-content">
          <div className="cart-items">
            {cartData.cart.length ? (
              cartData.cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  {item.product.image}
                  {item.product.name}
                  <small>{item.product.sku}</small>
                  {item.product.price}
                  <div className="cart-actions">
                    <TextField 
                      type="number"
                      name="qty"
                      id="qty"
                      label="Qty"
                      variant="filled"
                      value={qty[qty.findIndex(cart => cart.id === item.id)].qty}
                      onBlur={(e) => handleUpdateQty(e, item.id)}
                      onChange={(e) => handleChangeQty(e, item.id)}
                    />
                    <Button variant="contained" color="primary"
                      className="action remove"
                      onClick={(e) => handleRemove(e, item.id)}
                    >
                      <span>Remove</span>
                    </Button>
                  </div>
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
