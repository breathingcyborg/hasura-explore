import * as jwt from 'jsonwebtoken';
import { User_Role_Enum } from '../../gql/graphql';

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_ALGO = 'HS256';

export function generateAccessToken(user: {
    id: number,
    name: string,
    role: User_Role_Enum
}) {
    return jwt.sign({
        sub: user.id.toString(),
        name: user.name,
        iss: 'backend-server',
        "https://hasura.io/jwt/claims": {
            "x-hasura-user-id": user.id.toString(),
            "x-hasura-allowed-roles": [user.role],
            "x-hasura-default-role": user.role,
        }
    }, JWT_SECRET, {
        algorithm: JWT_ALGO,
        expiresIn: "12h",
    });
}