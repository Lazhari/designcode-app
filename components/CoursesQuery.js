import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const CoursesQuery = gql`
  {
    courses {
      id
      title
      subtitle
      caption
      author
      image {
        url
      }
      logo {
        url
      }
      avatar {
        url
      }
    }
  }
`;

const CoursesQueryContainer = ({ children }) => (
  <Query query={CoursesQuery}>{children}</Query>
);

export default CoursesQueryContainer;
