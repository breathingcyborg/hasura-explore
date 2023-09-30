import { ErrorRequestHandler } from "express";
import { AppError, appErrorToHasuraError, urqlErrorToHasuraError } from "../utils/errors";
import { CombinedError } from "@urql/core";

export const errorHandlerMiddleware : ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(400).json(appErrorToHasuraError(err));
    }

    if (err instanceof CombinedError) {
        return res.status(400).json(urqlErrorToHasuraError(err));
    }

    return res.status(400).json({
        message: 'something went wrong',
    });
} 