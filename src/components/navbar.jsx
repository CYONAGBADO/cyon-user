import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import ModalForm from "./form";
import { FaBell, FaCog, FaTimes } from "react-icons/fa";
import { BiMenu, BiNotification } from "react-icons/bi"
import SearchPlaceholder from "./fakeSearch";
import { SideNav } from "./sidenav";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(isOpen)
  const [show, toggle] = useState(false);

  const [isModalOpen, toggleModal] = useState(false);
  // handleSubmit () => {}

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-3">
            <BiMenu onClick={() => toggle(!show)} />
          </div>
          <div className="col-6" style={{ textAlign: "center" }}>
            Home
          </div>
          <div className="col-3" style={{ textAlign: "end" }}>
            <BiNotification />
          </div>
        </div>
      </div>
      {
        show && 
        <SideNav toggle={toggle} show={show} />
      }
    </>
  );
};

export default NavBar;
