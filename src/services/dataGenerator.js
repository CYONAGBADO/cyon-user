import Axios from "axios";
import UserSession from "../constants/UserSession";


export const base_url =  "http://localhost:5001/api/v1";


Axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const deleteEntry = (path, callback, reauth) => {
  Axios.delete(`${base_url}/${path}`, {
    headers: {
      Authorization: `Bearer ${reauth || UserSession.getToken()}`,
    },
  })
    .then((res) => {
      if (callback) return callback(res, null);
    })
    .catch((error) => {
      console.error(error);
      if (callback) return callback(null, error);
    });
};

export const getEntry = (path, callback, reauth) => {
  Axios.get(`${base_url}/${path}`, {
    headers: {
      Authorization: `Bearer ${reauth || UserSession.getToken()}`,
    },
  })
    .then((res) => {
      if (callback) return callback(res, null);
    })
    .catch((error) => {
      console.error(error);
      if (callback) return callback(null, error);
    });
};

export const createEntry = (path, payload, callback, reauth) => {
  Axios.post(`${base_url}/${path}`, payload, {
    headers: {
      Authorization: `Bearer ${reauth || UserSession.getToken()}`,
    },
  })
    .then((res) => {
      if (callback) return callback(res, null);
    })
    .catch((error) => {
      console.error(error);
      if (callback) return callback(null, error);
    });
};



export function objectCleaner(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
}

export const updateEntry = (path, payload, callback, reauth) => {
  Axios.put(`${base_url}/${path}`, payload, {
    headers: {
      Authorization: `Bearer ${reauth || UserSession.getToken()}`,
    },
  })
    .then((res) => {
      if (callback) return callback(res, null);
    })
    .catch((error) => {
      console.error(error);
      if (callback) return callback(null, error);
    });
};



export const EventEmitter = {
  _events: {},
  dispatch: function (event, data) {
    if (!this._events[event]) return;
    this._events[event].forEach((callback) => callback(data));
  },
  subscribe: function (event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
};

export const NetworkErrorHandler = (error) => {
  try {
  if(!error) return "Unknown Error"
  if (error.response) return error.response.data ? error.response.data.error.message : error.message;
  else if (error.request) return error.request.statusText || error.message;
  else return error.message;
  } catch (error) {
    return "Unknown Error"
  }
};