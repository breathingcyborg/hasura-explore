import { setContext } from '@apollo/client/link/context';
import getAuthStore from '../auth/auth-store/store';

export const authLink = setContext((_, { headers }) => {

  const token = getAuthStore().getTokens()?.access_token || null;

  const newHeaders = { ...headers };
  if (token !== null) {
    newHeaders['authorization'] = `Bearer ${token}`;
  }

  return { headers: newHeaders };
});
