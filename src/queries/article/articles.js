import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles
	{
      id
      Title
      category
	  {
        id
        Name
      }
      Media {
        url
      }
      MetaDescription
    }
  }
`;

export default ARTICLES_QUERY;
