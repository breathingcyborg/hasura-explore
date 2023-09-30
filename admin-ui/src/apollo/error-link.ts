import { onError } from "@apollo/client/link/error";
import getAuthStore from "../auth/auth-store/store";
import { Observable } from "@apollo/client";

export const errorLink = onError(({ graphQLErrors, networkError }) => {

  if (graphQLErrors) {
    // log error
    graphQLErrors.forEach(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    ));

    // logout on jwt error
    const jwtError = graphQLErrors.filter(({ extensions  }) => {
      return !!extensions
        && extensions.hasOwnProperty('code')
        && extensions.code === 'invalid-jwt';
    });
    if (jwtError.length > 0) {
      return new Observable((observer) => {
        Promise.all([
          getAuthStore().setTokens(null),
          getAuthStore().setUser(null),
        ]).then(() => {
          window.location.reload();
        });
      });
    }
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
