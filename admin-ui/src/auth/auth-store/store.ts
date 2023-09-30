import {
    AuthStore,
    LocalStoragePersistance
} from 'reactive-auth-store';

import { User_Role_Enum } from '../../gql/graphql';

// Define type for user
export interface AuthUser {
    id: number
    name: string
    email: string
    role: User_Role_Enum
    created_at: string
}

// Define type for tokens
export interface AuthTokens {
    access_token: string
}


let store: AuthStore<AuthUser, AuthTokens> | null = null;

const AUTH_STORAGE_KEY = '__auth__'

// function to lazily create store when required
export default function getAuthStore() {
    if (store === null) {
        store = new AuthStore(
            // create persistor to save state
            new LocalStoragePersistance(AUTH_STORAGE_KEY),
            // a function to compares user equality
            (userA, userB) => (userA?.id || null) === (userB?.id || null)
        )
        store.setMaxListeners(1000);
    }
    return store;
}