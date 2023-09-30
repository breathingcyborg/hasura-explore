## Start hasura engine
```
docker compose up
```

## Start hasura console
```
hasura console --admin-secret myadminsecretkey
```

## Make changes

* You can create tables, modify tables, track tables (tracking is term for making tables available via graphql api), modify permissions, create custom actions, etc. All these changes are tracked and saved into hasura metadata directory

* CLI will track these changes and update metadata directory, this directory needs to be included in git repo.
