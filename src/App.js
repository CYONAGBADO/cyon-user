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
import Finance from "./pages/finance";
import CyonUser from "./pages/cyonUser";
import AboutCyon from "./pages/aboutCyon";
import Attendance from "./pages/attendance";
import Welcome from "./pages/welcome";
import Announcement from "./pages/announcement";
import CardRequest from "./pages/requestCard";

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
          auth.isAuth ? children : <Redirect to={"/welcome"} />
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
          !auth.isAuth ? children : <Redirect to={"/"} />
        }
      />
    );
  };

  let routes = (
    <Switch>
      <PrivateRoute exact path="/">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute exact path="/finance">
        <Finance />
      </PrivateRoute>
      <PrivateRoute exact path="/meeting">
        <MeetingRecords />
      </PrivateRoute>
      <PrivateRoute exact path="/about-cyon">
        <AboutCyon />
      </PrivateRoute>
      <PrivateRoute exact path="/announcement">
        <Announcement />
      </PrivateRoute>
      <PrivateRoute exact path="/card-request">
        <CardRequest />
      </PrivateRoute>
      <PrivateRoute exact path="/attendance">
        <Attendance />
      </PrivateRoute>
      <PrivateRoute exact path="/cyon-agbado">
        <CyonUser />
      </PrivateRoute>
    </Switch>
  );

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <AuthRoute path="/welcome">
            <Welcome />
          </AuthRoute>
          <AuthRoute path="/auth/login">
            <LogIn />
          </AuthRoute>
          <PrivateRoute>
            <div className="app">
              <div className="">
                <div className="">
                  <NavBar />
                  <div>{routes}</div>
                  <div className="mt-4" style={{ textAlign: "center", color: "#BDA95C" }}>
                    &copy; St Julius Catholic church CYON Agbado
                  </div>
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
