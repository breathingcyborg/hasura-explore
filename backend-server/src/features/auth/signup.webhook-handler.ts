import { RequestHandler } from "express";
import { graphql } from '../../gql';
import client from "../../urql-client";
import { SignupInput, User_Role_Enum } from "../../gql/graphql";
import { hashPassword } from "./password-utils";

const INSERT_USER_ONE = graphql(`mutation InsertUserOne($input: user_insert_input!) {
    insert_user_one(object: $input) {
        id,
    }
}`)

const signup : RequestHandler = async (req, res, next) => {
    try {
        
        const input : SignupInput = req.body.input.input;

        const password = await hashPassword(input.password);
    
        const insertUserResponse = await client.mutation(INSERT_USER_ONE, {
            input: {
                name: input.name,
                email: input.email,
                role: input.role as User_Role_Enum,
                password: password,
            }
        });
    
        if (insertUserResponse.error) {
            throw insertUserResponse.error;
        }
    
        const userId = insertUserResponse.data?.insert_user_one?.id;
    
        return res.json({ user_id: userId });

    } catch (e) {

        next(e);

    }
}

export default signup;