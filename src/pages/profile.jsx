import React, { useEffect, useState } from "react";
import { FaCogs, FaHamburger, FaInfo, FaInfoCircle, FaSearch, FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import Chart from 'react-apexcharts'
import Users from "../imges/users.png";
import Graph from "../imges/graph.png";
import { BsEyeSlash } from "react-icons/bs";
import DataTable, { createTheme } from "react-data-table-component";
import { getEntry } from "../services/dataGenerator";
import { BiMenu, BiUser } from "react-icons/bi";
import { Form, Input, InputGroupText } from "reactstrap";
import { Link } from "react-router-dom";
import { decodeAccessToken } from "../services/userAccessControl";

const moment = require("moment");

const Profile = () => {
  const [columns, setColumns] = useState([]);
  const [userData, setUserData] = useState([]);
  const [meta, setMeta] = useState({
    limit: 10,
    totalDocs: 3,
    page: 1
  });

  const user = decodeAccessToken();

  console.log({ user });

  return (
    <div className="container">
      <div className="hero-title pt-3">
        <div className="row mt-3 mb-3 p-2">
          <div className="col-4">
            <div className="avatar-lg">
              <BiUser />
            </div>
          </div>
          <div className="col-7">
            <div style={{ paddingTop: "10px" }}>{user?.name || user?.username}</div>
            <div style={{ fontSize: "0.7em", fontWeight: "lighter" }}> {user?.position} </div>
          </div>
        </div>
      </div>

      <div className="container-fluid profile-layer p-3">
        <div className="p-3">
          <p className="mb-0">
            {user?.address}, {user?.state}, <span style={{textTransform: "capitalize"}}>{user?.country}</span>
          </p>
          <small>Address</small>
        </div>
        <div className="p-3">
          <p className="mb-0">
            {user?.email}
          </p>
          <small>Email</small>
        </div>
        <div className="p-3">
          <p className="mb-0">
            {user?.occupation}
          </p>
          <small>Occupation</small>
        </div>
        <div className="p-3">
          <p className="mb-0">
            {user?.phone}
          </p>
          <small>Phone</small>
        </div>
        <div className="p-3">
          <p className="mb-0">
            {moment(user?.dob).format("DD-MM-YYYY")}
          </p>
          <small>Date of birth</small>
        </div>
        <div className="p-3">
          <p className="mb-0">
            {user?.marital_status}
          </p>
          <small>Marital Status</small>
        </div>
        <div className="">
          <small style={{}}><FaInfoCircle /> For any corrections, kindly contact the cyon president</small>
        </div>
      </div>
    </div>
  );
};

export default Profile;
