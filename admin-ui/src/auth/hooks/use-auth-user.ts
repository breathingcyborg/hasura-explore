import { useEffect, useState } from "react"
import getAuthStore, { AuthUser } from "../auth-store/store";

export const useAuthUser = () => {

    const [initialized, setInitialized] = useState(getAuthStore().getInitialized());
    const [user, setUser] = useState<AuthUser | null>(getAuthStore().getUser());

    useEffect(() => {

        const store = getAuthStore();

        const onInitialized = () => {
            setInitialized(true);
        }

        const onUserChanged = (user: AuthUser | null) => {
            setUser(user);
        }

        // listen to changes
        store.on('initialized', onInitialized);
        store.on('userChanged', onUserChanged);

        // initial values
        setInitialized(store.getInitialized());
        setUser(store.getUser());

        return () => {
            store.off('initialized', onInitialized);
            store.off('userChanged', onUserChanged);
        }
    }, []);

    return { initialized, user }
}