import gql from "graphql-tag";

const GALLERY_QUERY = gql`
  query Articles($id: ID!) {
    articles(id: $id) {
      Gallery {
        url
      }
    }
  }
`;

export default GALLERY_QUERY;
