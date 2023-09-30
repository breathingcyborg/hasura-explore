import 'dotenv/config';
import { CodegenConfig } from '@graphql-codegen/cli';

// @ts-ignore
const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_URL;

// @ts-ignore
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

const config: CodegenConfig = {
  schema: [
    {
        [HASURA_GRAPHQL_URL]: {
            'headers': {
                'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
            }
        },
    }
  ],
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config