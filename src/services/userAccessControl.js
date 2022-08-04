import UserSession from "../constants/UserSession";
import { JWT_ENC_KEY } from "../constants/enums";

const _ = require('lodash');
const jwt = require("jsonwebtoken");

// generate user access control token
export const generateAccessToken = (data, callback) => {
    const token = jwt.sign(data,
        JWT_ENC_KEY,
        {
            expiresIn: "1y"
        }
    );
    // save user access token in local storage
    if (callback) return callback(token);
   
}

// decode UAT
export const decodeAccessToken = () => {
    try {
        const serializedState = JSON.parse(UserSession.getItem('serializedState'))
        if (!serializedState) return null;
        const decoded = jwt.verify(serializedState, JWT_ENC_KEY);
        return decoded; // retruns an object. excatly the same structure with what was returned by the API on login
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export const decodeReauthAccessToken = () => {
    try {
        const serializedState = JSON.parse(UserSession.getItem('reauth'))
        if (!serializedState) return null;
        const { userReducer } = serializedState;
        const UAT = userReducer.user;
        const decoded = jwt.verify(UAT, JWT_ENC_KEY);
        // console.log("decoded" , decoded);
        return decoded; // retruns an object. excatly the same structure with what was returned by the API on login
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

