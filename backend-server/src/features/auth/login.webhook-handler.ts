import { RequestHandler } from "express";
import { graphql } from '../../gql';
import client from "../../urql-client";
import { LoginInput, LoginOutput } from "../../gql/graphql";
import { verifyPassword } from "./password-utils";
import { AppError } from "../../utils/errors";
import { generateAccessToken } from "./jwt-utils";

const FIND_USER_BY_EMAIL = graphql(`query FindUserByEmail($email: String!) {
    user(limit: 1, where: { email: { _eq: $email } }) {
      id,
      email,
      name,
      password,
      role,
    }
}`)

const CODE_NO_USER_WITH_EMAIL = 'no-user-with-email';

const CODE_INVALID_PASSWORD = 'invalid-password';

const login : RequestHandler = async (req, res, next) => {
    try {
        
        const input : LoginInput = req.body.input.input;

        const users = await client.query(FIND_USER_BY_EMAIL, {
            email: input.email,
        })
        if (users.error) {
            throw users.error;
        }

        if (users.data!.user.length <= 0) {
            throw new AppError("no user with this email", CODE_NO_USER_WITH_EMAIL);
        }

        const user = users.data!.user[0];
        const passwordHash = user.password || '';
        const valid = await verifyPassword(input.password, passwordHash);
        if (!valid) {

            throw new AppError("Incorrect password", CODE_INVALID_PASSWORD);
        }

        const token = await generateAccessToken(user);
        const output : LoginOutput = {
            access_token: token,
        }

        return res.status(200).json(output);

    } catch (e) {
        next(e);

    }
}

export default login;