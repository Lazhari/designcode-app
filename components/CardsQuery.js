import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const CardsQuery = gql`
  {
    cards {
      id
      title
      subtitle
      caption
      status
      image {
        url
      }
      logo {
        url
      }
    }
  }
`;

const CardsQueryContainer = ({ children }) => (
  <Query query={CardsQuery}>{children}</Query>
);

export default CardsQueryContainer;
