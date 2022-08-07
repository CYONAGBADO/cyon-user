import { useEffect } from "react";
// import { getEntry } from './services/dataGenerator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import AllUsers from "./pages/allUsers";
import MeetingRecords from "./pages/meetingRecords";
import reducers from "./reducers";
import LogIn from "./pages/login";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import Profile from "./pages/profile";

const App = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    localStorage.setItem(
      "reduxState",
      JSON.stringify({ auth: store.getState() })
    );
  });

  const PrivateRoute = ({ children, ...rest }) => {
    const auth = useSelector(state => state.auth);
    console.log(auth);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.isAuth ? children : <Redirect to={"/auth/login"} />
        }
      />
    );
  };

  const AuthRoute = ({ children, ...rest }) => {
    const auth = useSelector(state => state.auth);
    console.log(auth)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !auth.isAuth ? children : <Redirect to={"/dashboard"} />
        }
      />
    );
  };

  let routes = (
    <Switch>
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute exact path="/finance">
        <Profile />
      </PrivateRoute>
      <PrivateRoute exact path="/meeting">
        <MeetingRecords />
      </PrivateRoute>
    </Switch>
  );

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <AuthRoute path="/auth/login">
            <LogIn />
          </AuthRoute>
          <PrivateRoute>
            <div className="app">
              <div className="">
                <div className="">
                  <NavBar />
                  <div>{routes}</div>
                </div>
              </div>
            </div>
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
