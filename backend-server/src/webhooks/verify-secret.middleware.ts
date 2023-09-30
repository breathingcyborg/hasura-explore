import { RequestHandler } from "express";

const HASURA_WEBHOOK_SECRET = process.env.HASURA_WEBHOOK_SECRET;

export const verifySecretMiddleware: RequestHandler = (req, res, next) => {
    const secret = req.headers['x-hasura-webhook-secret'];
    if (secret !== HASURA_WEBHOOK_SECRET) {
        return res
            .status(401)
            .json({ message: 'Invalid webhook request' });
    }
    return next();
};
