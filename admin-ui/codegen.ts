import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli';

// @ts-ignore
const ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

// @ts-ignore
const GRAPHQL_URL = process.env.REACT_APP_HASURA_GRAPHQL_URL || '';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    // @ts-ignore
    {
      [GRAPHQL_URL]: {
        headers: {
          'x-hasura-admin-secret': ADMIN_SECRET,
        }
      }
    }
  ],
  documents: [
    'src/**/!(*.d).{ts,tsx}',
    '!src/gql/**/*',
  ],
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
