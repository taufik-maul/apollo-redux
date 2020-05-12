import gql from "graphql-tag";

const HOMEPAGE_CATEGORY_LIST = gql`
  {
    categoryList {
      id
      name
      url_key
      children {
        id
        name
        url_key
      }
    }
  }
`;


export {
    HOMEPAGE_CATEGORY_LIST
}