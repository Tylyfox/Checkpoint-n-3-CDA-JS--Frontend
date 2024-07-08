import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql`
    mutation CreateCountry($infos: NewCountryInput!) {
        addCountry(data: $infos) {
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
`;