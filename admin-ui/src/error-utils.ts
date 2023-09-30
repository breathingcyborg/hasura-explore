import { ApolloError } from "@apollo/client";

export function getErrorMessage(error: unknown) {
    if (error === null || error === undefined) {
        return null;
    }
    if (error instanceof ApolloError) {
        if (error.graphQLErrors !== undefined) {
            return error.graphQLErrors.map(err => {
                return err.message;
            });
        }
        if (error.networkError !== null) {
            return error.networkError.message
        }
    }
    return 'Something went wrong';
}