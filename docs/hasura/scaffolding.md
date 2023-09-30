# Scaffolding hasura application from scratch

Download docker compose file

https://hasura.io/docs/latest/getting-started/docker-simple/

Install hasura cli

https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/

Init hasura project
```
hasura init .
```

Set admin secret
Add these lines in docker compose
```
HASURA_GRAPHQL_ADMIN_SECRET: myadminsecretkey
HASURA_WEBHOOK_SECRET: mywebhooksecret
```

Start docker container
```
docker compose up
```

Start developement console
```
hasura console --admin-secret myadminsecretkey
```

Once console opens visit data tab, click add connection, select postgres, use env variable `PG_DATABASE_URL` as connection string.
