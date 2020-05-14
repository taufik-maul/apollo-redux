import Layout from "../../components/Layout";
import { withApollo } from "../../lib/apollo";
import { withRedux } from "../../lib/redux";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { PRODUCT_BY_KEY } from "../../query/product";
import Price from "../../components/Price";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/action/actionCart';
import { compose } from "redux";
import { Grid, TextField, Paper, Button } from "@material-ui/core";

const Product = () => {
  const pageConfig = {
    title: "PDP",
  };
  const [qty=1, setQty] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const { url_key } = router.query;
  const { loading, data } = useQuery(PRODUCT_BY_KEY, {
    variables: {
      url_key: url_key,
    },
  });

  if (loading) {
    return (
      <div className="loading">Kela jang sakedap dipilarian heula ...</div>
    );
  }

  const handleQty = (e) => {
      setQty(e.target.value)
  }

  const handleAddtoCart = (e) => {
      e.preventDefault();

      const item = {
        id: product.id,
        qty: parseInt(qty),
        product: {
            name: product.name,
            image: <img src={product.image.url} alt={product.image.label} />,
            price: <Price price={product.price_range.minimum_price}/>,
            sku: product.sku
        }
      }

      dispatch(addToCart(item))
  }

  const product = data.products.items[0];
  pageConfig.title = product.name;

  return (
    <Layout pageConfig={pageConfig}>
      <Grid container className="product-items" spacing={3}>
        <Grid item sm={8}>
          <div className="product-image">
              <img src={product.image.url} alt={product.image.label} />
          </div>
        </Grid> 
        <Grid item sm={4}>
          <div className="availibity">
              <small className="sku">{product.sku}</small>
              <small>availibity: {product.stock_status}</small>
          </div>
          <h1>{product.name}</h1>
          <Price price={product.price_range.minimum_price} />
          <div className="form-add-to-cart">
              <form id={`add-to-cart-${product.id}`} onSubmit={handleAddtoCart}>
                  <TextField required label="Quantity" defaultValue={qty} id="qty" onChange={handleQty} />
                  <Button variant="contained" type="submit">Add to Cart</Button>
              </form>
          </div>
          <div className="description" dangerouslySetInnerHTML={{__html: product.description.html}}></div>
        </Grid>
      </Grid>
    </Layout>
  )
};

export default compose(withApollo, withRedux)(Product);
