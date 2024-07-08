import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String'];
};

export type NewCountryInput = {
  code: Scalars['String'];
  continent?: InputMaybe<Scalars['Int']>;
  emoji: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String'];
};

export type CreateCountryMutationVariables = Exact<{
  infos: NewCountryInput;
}>;


export type CreateCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };

export type ListContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', id: number, name: string }> };

export type ListCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', emoji: string, name: string, id: number, code: string, continent?: { __typename?: 'Continent', id: number, name: string } | null }> };

export type FindCountryQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type FindCountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };


export const CreateCountryDocument = gql`
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
export type CreateCountryMutationFn = Apollo.MutationFunction<CreateCountryMutation, CreateCountryMutationVariables>;

/**
 * __useCreateCountryMutation__
 *
 * To run a mutation, you first call `useCreateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCountryMutation, { data, loading, error }] = useCreateCountryMutation({
 *   variables: {
 *      infos: // value for 'infos'
 *   },
 * });
 */
export function useCreateCountryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCountryMutation, CreateCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCountryMutation, CreateCountryMutationVariables>(CreateCountryDocument, options);
      }
export type CreateCountryMutationHookResult = ReturnType<typeof useCreateCountryMutation>;
export type CreateCountryMutationResult = Apollo.MutationResult<CreateCountryMutation>;
export type CreateCountryMutationOptions = Apollo.BaseMutationOptions<CreateCountryMutation, CreateCountryMutationVariables>;
export const ListContinentsDocument = gql`
    query ListContinents {
  continents {
    id
    name
  }
}
    `;

/**
 * __useListContinentsQuery__
 *
 * To run a query within a React component, call `useListContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListContinentsQuery(baseOptions?: Apollo.QueryHookOptions<ListContinentsQuery, ListContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListContinentsQuery, ListContinentsQueryVariables>(ListContinentsDocument, options);
      }
export function useListContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListContinentsQuery, ListContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListContinentsQuery, ListContinentsQueryVariables>(ListContinentsDocument, options);
        }
export type ListContinentsQueryHookResult = ReturnType<typeof useListContinentsQuery>;
export type ListContinentsLazyQueryHookResult = ReturnType<typeof useListContinentsLazyQuery>;
export type ListContinentsQueryResult = Apollo.QueryResult<ListContinentsQuery, ListContinentsQueryVariables>;
export const ListCountriesDocument = gql`
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

/**
 * __useListCountriesQuery__
 *
 * To run a query within a React component, call `useListCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCountriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCountriesQuery, ListCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCountriesQuery, ListCountriesQueryVariables>(ListCountriesDocument, options);
      }
export function useListCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCountriesQuery, ListCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCountriesQuery, ListCountriesQueryVariables>(ListCountriesDocument, options);
        }
export type ListCountriesQueryHookResult = ReturnType<typeof useListCountriesQuery>;
export type ListCountriesLazyQueryHookResult = ReturnType<typeof useListCountriesLazyQuery>;
export type ListCountriesQueryResult = Apollo.QueryResult<ListCountriesQuery, ListCountriesQueryVariables>;
export const FindCountryDocument = gql`
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
    `;

/**
 * __useFindCountryQuery__
 *
 * To run a query within a React component, call `useFindCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useFindCountryQuery(baseOptions: Apollo.QueryHookOptions<FindCountryQuery, FindCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCountryQuery, FindCountryQueryVariables>(FindCountryDocument, options);
      }
export function useFindCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCountryQuery, FindCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCountryQuery, FindCountryQueryVariables>(FindCountryDocument, options);
        }
export type FindCountryQueryHookResult = ReturnType<typeof useFindCountryQuery>;
export type FindCountryLazyQueryHookResult = ReturnType<typeof useFindCountryLazyQuery>;
export type FindCountryQueryResult = Apollo.QueryResult<FindCountryQuery, FindCountryQueryVariables>;