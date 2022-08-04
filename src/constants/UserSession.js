import { decodeAccessToken } from "../services/userAccessControl";

var UserSession = (function () {

    var setItem = function (name, value) {
        sessionStorage.setItem(name, value);
    }

    var getItem = function (name) {
        return sessionStorage.getItem(name);
    }

    var removeItem = function (name) {
        sessionStorage.removeItem(name);
    };

    var destroy = function () {
        sessionStorage.clear();
    };
    
    var getToken = function(){
        console.log(decodeAccessToken());
        return decodeAccessToken() ? decodeAccessToken().token : null //here we return the decoded token value and if empty we return null
    }


    return {
        destroy: destroy,
        removeItem: removeItem,
        getItem: getItem,
        setItem: setItem,
        getToken: getToken
    }

})();

export default UserSession;