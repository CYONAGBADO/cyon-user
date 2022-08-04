import Parse from "parse";

export const createUser = (data) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("X-Parse-Application-Id", process.env.REACT_APP_ID);
        myHeaders.append("X-Parse-REST-API-Key", process.env.REACT_APP_API_KEY);
        myHeaders.append("X-Parse-Revocable-Session", " 1");
        myHeaders.append("Content-Type", " application/json");

        var raw = data;

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https://parseapi.back4app.com/AllUsers", requestOptions)
        .then(response => response.text())
        .then(result => resolve(result))
        .catch(error => reject('error', error));
    })
}

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("X-Parse-Application-Id", process.env.REACT_APP_ID);
        myHeaders.append("X-Parse-REST-API-Key", process.env.REACT_APP_API_KEY);
        myHeaders.append("X-Parse-Revocable-Session", " 1");
        myHeaders.append("Content-Type", " application/json");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://parseapi.back4app.com/AllUsers", requestOptions)
        .then(response => response.text())
        .then(result => resolve(result))
        .catch(error => reject('error', error));
    })
}