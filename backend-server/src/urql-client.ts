import { Client, fetchExchange } from '@urql/core';
import fetch from 'cross-fetch';

const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_URL;
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

const client = new Client({
  url: HASURA_GRAPHQL_URL!,
  exchanges: [fetchExchange],
  fetch: fetch,
  fetchOptions: {
    headers: {
        'x-hasura-admin-secret': HASURA_ADMIN_SECRET!,
    }
  },
});

export default client;