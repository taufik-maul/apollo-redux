import gql from "graphql-tag";

const PRODUCT_BY_KEY = gql`
  query getProductByKey($url_key: String!) {
    products(filter: { url_key: { eq: $url_key } }) {
      items {
        id
        name
        sku
        description {
          html
        }
        image {
          url
          label
        }
        stock_status
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

export {
    PRODUCT_BY_KEY
}
