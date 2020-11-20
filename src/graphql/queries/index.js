/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

const GET_PAGE_LAYOUT = gql`
  {
    pageLayoutsList {
      items {
        id
        name
        path
        props
        nestedComponents {
          items {
            id
            name
            path
            props
          }
        }
      }
    }
  }
`;

export { GET_PAGE_LAYOUT };
