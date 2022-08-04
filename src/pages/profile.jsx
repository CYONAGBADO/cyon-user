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

const moment = require("moment");

const Profile = () => {
  const [columns, setColumns] = useState([]);
  const [userData, setUserData] = useState([]);
  const [meta, setMeta] = useState({
    limit: 10,
    totalDocs: 3,
    page: 1
  });

  return (
    <div className="container">
    
      <div className="hero-title pt-3">Welcome User</div>

      <div className="container-fluid dash-layer">
        <div className="pl-2">
          Quick Actions
        </div>
        <div className="row">
          <div className="col-6">
            <Link to={"/admin/users"} className="link-style-card">
              <div className="shadow item clickable">
                Show Profile
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

export default Profile;
