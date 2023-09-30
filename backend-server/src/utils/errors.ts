import { CombinedError } from "@urql/core";

export const CODE_NETWORK_ERROR = 'network-error'

export class AppError extends Error {

    code?: string
    httpStatusCode?: number

    constructor(message: string, code?: string, httpStatusCode?: number) {
        super(message);
        this.code = code;
        this.httpStatusCode = httpStatusCode;
    }
}

/**
 * 
 * create error in format hasura understands
 * 
 */
export function appErrorToHasuraError(appError: AppError) {
    const message = appError.message;
    const code = appError.code;
    const error : any = { message: message }
    if (code) {
        error.extensions = { code: code }
    }
    return error;
}

/**
 * 
 * maps urql error to error format expected by hasura.
 * 
 */
export function urqlErrorToHasuraError(urqlError: CombinedError) {

    if (urqlError.networkError) {
        return {
            "message": "Network Error",
            "extensions": {
                "code": CODE_NETWORK_ERROR,
            }
        }
    }

    if (urqlError.graphQLErrors && urqlError.graphQLErrors.length > 0) {
        return urqlError.graphQLErrors[0];
    }

    return {
        "message": "Something went wrong",
    }
}