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
        <div className="product-image">
            <img src={product.image.url} alt={product.image.label} />
        </div>
        <div className="availibity">
            <small className="sku">{product.sku}</small>
            <small>availibity: {product.stock_status}</small>
        </div>
        <h1>{product.name}</h1>
        <Price price={product.price_range.minimum_price} />
        <div className="form-add-to-cart">
            <form id={`add-to-cart-${product.id}`} onSubmit={handleAddtoCart}>
                <input value={qty} type="number" name="qty" id="qty" onChange={handleQty} />
                <button type="submit">Add to Cart</button>
            </form>
        </div>
        <div className="description" dangerouslySetInnerHTML={{__html: product.description.html}}>
        </div>
    </Layout>
  )
};

export default compose(withApollo, withRedux)(Product);
