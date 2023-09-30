import express from "express";
import signup from "../features/auth/signup.webhook-handler";
import login from "../features/auth/login.webhook-handler";
import { verifySecretMiddleware } from "./verify-secret.middleware";
import { errorHandlerMiddleware } from "./error-handler.middleware";

const router = express.Router();

router.use(verifySecretMiddleware);

router.post('/signup', signup);
router.post('/login', login);

router.use(errorHandlerMiddleware);

export default router;