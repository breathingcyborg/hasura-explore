## Client authentication (JWT Authentication)

* your client app passes jwt to hasura

* hasura extract important parts like `x-hasura-role`, `x-hasura-user-id` etc from that jwt.

* hasura permission system uses these attributes.

* jwt generation is upto you. Hasura and your backend should have access to shared jwt secret key.

* If your backend already generates jwt you can add hasura specific headers. Or you can write custom action in hasura, that action can be handled by your backend api.

Here's how a typical jwt issued by backend might look.

```js
{
    sub: user.id.toString(),
    name: user.name,
    iss: 'backend-server',
    "https://hasura.io/jwt/claims": {
        "x-hasura-user-id": user.id.toString(),
        "x-hasura-allowed-roles": [user.role], // roles that user can specify (required)
        "x-hasura-default-role": user.role, // required
        "x-hasura-custom-info": 'string only'
    }
}
```

* Hasura only allows single role per request.

* Hasura requires `x-hasura-allowed-roles` and `x-hsaura-default-role` in the JWT payload claims.

* It Optionally it also accepts a `x-hasura-role` in request header.

* if `x-hasura-role` header is provided hasura check if the role is in `x-hasura-allowed-roles` header in jwt claim.

* hasura create a session variable `x-hasura-role` (request header) which is either `x-hasura-role` or `x-hasura-default-role` (jwt payload claims).

* the permission system only uses this `x-hasura-role` session variable resolved by hasura.

https://github.com/hasura/graphql-engine/issues/1314


## Guest authentication
* by default hasura denies unauthenticated request

* to allow guest users you can specify role for guest users with  `HASURA_GRAPHQL_UNAUTHORIZED_ROLE: 'guest'` environment variable.

## Admin authentication
* your custom backend server authenticates with hasura with admin secret. the backend server needs to include it in `x-hasura-admin-secret` header.

* to make testing easier admin can specify `x-hasura-role`, `x-hasura-user-id`, directly through request headers. This lets admin assume any role they wish to.

## JWT Token Generation

https://hasura.io/docs/latest/auth/authentication/jwt/


### Configure jwt mode in hasura

modify docker compose to add the following variable in environment section of grahql-engine section in docker-compose file


```bash
HASURA_GRAPHQL_JWT_SECRET: '{"type": "HS256", "key": "myjwtsecret1myjwtsecret1myjwtsecret1myjwtsecret1"}'
```

### Generate jwt from backend

* Generate jwt from backend and sign it with the secret key specified above.
* see the example payload below.

```js
{
    sub: user.id.toString(),
    name: user.name,
    iss: 'backend-server',
    "https://hasura.io/jwt/claims": {
        "x-hasura-user-id": user.id.toString(),
        "x-hasura-allowed-roles": [user.role], // roles that user can specify (required)
        "x-hasura-default-role": user.role, // required
        "x-hasura-custom-info": 'string only'
    }
}
```