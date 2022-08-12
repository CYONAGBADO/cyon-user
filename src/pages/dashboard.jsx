import React, { useEffect, useState } from "react";
import { FaCogs, FaHamburger, FaSearch, FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import Chart from 'react-apexcharts'
import Users from "../imges/users.png";
import Graph from "../imges/graph.png";
import { BsEyeSlash } from "react-icons/bs";
import DataTable, { createTheme } from "react-data-table-component";
import { getEntry } from "../services/dataGenerator";
import { BiMenu } from "react-icons/bi";
import { Form, Input, InputGroupText } from "reactstrap";
import { Link } from "react-router-dom";
import { decodeAccessToken } from "../services/userAccessControl";

const moment = require("moment");

const Dashboard = () => {
  const name = decodeAccessToken()?.name || decodeAccessToken()?.username 

  return (
    <div className="container">
      <div className="mt-3">
        <InputGroupText>
          <Input
            type="text"
            name="searchbar"
            id="search"
            placeholder="Search application"
          // onChange={inputHandler}
          />
        </InputGroupText>
      </div>
      <div className="hero-title pt-3" style={{textTransform: "capitalize"}}>Welcome {name}</div>

      <div className="container-fluid dash-layer">
        <div className="pl-2">
          Quick Actions
        </div>
        <div className="row">
          <div className="col-6">
            <Link to={"/profile"} className="link-style-card">
              <div className="shadow item clickable">
                Show Profile
              </div>
            </Link>
          </div>
          <div className="col-6">
            <Link to={"/finance"} className="link-style-card">
              <div className="shadow item clickable">
                Finance
              </div>
            </Link>
          </div>
          <div className="col-6">
            <Link to={"/announcements"} className="link-style-card">
              <div className="shadow item clickable">
                Annoucement
              </div>
            </Link>
          </div>
          <div className="col-6">
            <Link to={"/request-card"} className="link-style-card">
              <div className="shadow item clickable">
                Request for<br />CYON Card
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid dash-layer mt-3">
        <div className="pl-2">
          Additional resources
        </div>
        <div className="row">
          <div className="col-6">
            <Link to={"/about-cyon"} className="link-style-card">
              <div className="shadow item clickable">
                About CYON
              </div>
            </Link>
          </div>
          <div className="col-6">
            <Link to={"/cyon-agbado"} className="link-style-card">
              <div className="shadow item clickable">
                CYON Agbado Executives
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4" style={{ textAlign: "center", color: "#BDA95C" }}>
        &copy; St Julius Catholic church CYON Agbado
      </div>
    </div>
  );
};

export default Dashboard;
