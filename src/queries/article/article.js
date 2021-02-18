import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      Title
      Content
      Media {
        url
      }
      category {
        id
        Name
      }
      PublishedDate
      MetaDescription
      Gallery {
        url
      }
    }
  }
`;

export default ARTICLE_QUERY;
