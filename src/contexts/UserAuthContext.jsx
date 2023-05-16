import {createContext} from "react";

export const defaultUserAuthInfo = {
    jwt: ""
}

const userAuthContext = createContext(defaultUserAuthInfo);

export default userAuthContext;
