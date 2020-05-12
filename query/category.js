import gql from "graphql-tag";

const CATEGORY_BY_KEY = gql`
  query getCategoryByKey($url_key: String!) {
    categoryList(filters: { url_key: { eq: $url_key } }) {
      id
      name
      image_path
      description
      products {
        items {
          id
          name
          small_image {
            url
          }
          url_key
          sku
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
              final_price {
                currency
                value
              }
            }
          }
        }
      }
      children {
        id
        name
        image_path
        url_key
      }
    }
  }
`;

export { CATEGORY_BY_KEY };
