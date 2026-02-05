import { GraphQLClient } from 'graphql-request';

export function getGraphQLClient() {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

  if (!endpoint) {
    throw new Error('NEXT_PUBLIC_GRAPHQL_API_URL is not defined');
  }

  return new GraphQLClient(endpoint);
}
