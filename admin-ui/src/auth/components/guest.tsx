import { Navigate, useLocation } from "react-router-dom";
import { useAuthUser } from "../hooks/use-auth-user";

export const Guest = ({
    children
} : {
    children: React.ReactElement
}) => {

    const location = useLocation();

    const {
        initialized,
        user,
    } = useAuthUser();

    // wait for store to initialize
    if (!initialized) {
        return null;
    }

    if (user) {
        return <Navigate 
            to={
                location?.state?.rom 
                    ? location?.state.rom
                    : '/admin/dashboard'
            }
        />
    }

    return <>
        { children }
    </>
}