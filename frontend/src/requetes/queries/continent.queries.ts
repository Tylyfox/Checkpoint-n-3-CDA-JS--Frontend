import { gql } from "@apollo/client";

export const LIST_CONTINENTS = gql`
  query ListContinents {
    continents {
      id
      name
    }
  }
`;