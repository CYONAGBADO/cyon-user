import UserSession from "../constants/UserSession";
import { decodeAccessToken } from "../services/userAccessControl";

const Auth = (state = {isAuth: decodeAccessToken() != null}, action) => {
    switch(action.type) {
        case "login":
            UserSession.setItem("serializedState", JSON.stringify(action.data))
            return {isAuth: true};
        case "logout":
            UserSession.removeItem("serializedState")
            return {isAuth: false};
        default:
            return state;
    }
    
};

export default Auth;

