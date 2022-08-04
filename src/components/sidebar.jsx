import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CYON from "../imges/CYON.png";
import { logoutAction } from "../actions/auth";
import { FaPowerOff } from "react-icons/fa"

const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const sideLink = [
    { label: "Dashboard", link: "dashboard" },
    { label: "All Users", link: "users" },
    { label: "Meeting", link: "meeting" },
    { label: "Finance", link: "finance" },
    { label: "Management", link: "management" },
  ];

  return (
    <div className="shadow primary-bg side-bar">
      <div className="p-3">
        <div className="d-flex">
          <div className="left">
            <img src={CYON} alt="cyon-logo" className="cyon-img mt-4" />
          </div>
          <div className="right">
            <h1 className="my-5">
              <b>CYON </b><h6>AGBADO</h6>
            </h1>
          </div>
        </div>

        <ListGroup className="p-2" style={{ height: "55vh" }}>
          {sideLink.map((item) => (
            <ListGroupItem
              key={`${item.link}`}
              className="mt-2 clickable "
              style={{ marginRight: 0 }}
              onClick={() => history.push(item.link)}
            >
              <Link to={item.link} className="link-style">
                {item.label}
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="d-flex" style={{justifyContent: "center"}}>
      <Button
        className="px-5 btn-lg clickable logout-style"
        onClick={handleLogout}
      >
        Logout <FaPowerOff />
      </Button>
      </div>
    </div>
  );
};

export default SideBar;
