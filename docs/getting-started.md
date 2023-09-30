# Hasura

## Install hasura cli
https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/

## Start hasura server
```bash
cd hasura
docker compose up
```

## Start hasura console
This will open hasura console in your browser
```bash
cd hasura
hasura console --admin-secret myadminsecretkey
```

## Run migrations
```
hasura migrate apply --admin-secret myadminsecretkey
```

## Seed the database
```
hasura seed apply --admin-secret myadminsecretkey
```

# Backend Server
Hasura need to be running for graphql codegen to work
```bash
cd backend-server
cp .env.example .env
yarn build
yarn start
```
# Admin UI
Hasura need to be running for graphql codegen to work

```bash
cd admin-ui
cp .env.example .env
yarn codegen
yarn start
```

# Usage

## Articles CRUD

Visit http://localhost:3001 and login with one of these credentials.
```
editor@example.com
password

writer1@example.com
password

writer2@example.com
password
```

Navigate to articles page from sidebar

## Signup

Signup action is available from hasura console only. Open hasura console http://localhost:9695 and execute below mutation from graphiql editor in query tab.

```graphql
mutation {
  signup(input: {
    email: "writer3@example.com",
    name: "writer3",
    password: "password",
    role: "writer",
  }) {
    user_id
  }
}
```