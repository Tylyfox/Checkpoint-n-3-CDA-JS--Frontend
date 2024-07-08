import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  query ListCountries {
    countries {
      emoji
      name
      id 
      code
      continent {
        id
        name
      }
    }
  }
`;

export const FIND_COUNTRY = gql`
  query FindCountry($code: String!) {
    country(code: $code) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`