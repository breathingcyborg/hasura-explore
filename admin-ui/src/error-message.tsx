import { Alert } from "antd";
import { getErrorMessage } from "./error-utils";

export function ErrorMessage(
    { error } : 
    { error : unknown}
) {

    const message = getErrorMessage(error);

    if (message === null) {
        return null;
    }

    if (Array.isArray(message)) {
        return <Alert
            style={{ marginBottom: 24 }}
            type="error"
            message={(
                <ul>
                    {
                        message.map((m, i) => (
                            <li key={i}>
                                { m }
                            </li>
                        ))
                    }
                </ul>
            )}
        />
    }

    return <Alert
        style={{ marginBottom: 24 }}
        type="error"
        message={message}
    />;
}