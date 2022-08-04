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

const Dashboard = () => {
  const [columns, setColumns] = useState([]);
  const [userData, setUserData] = useState([]);
  const [meta, setMeta] = useState({
    limit: 10,
    totalDocs: 3,
    page: 1
  });

  useEffect(() => {
    getEntry("users", (res, err) => {
      if (!err) {
        console.log(res.data);
        setUserData(res.data.users);
        setMeta(res.data);
      } else {
        console.log(err);
      }
    })
    const cols = [
      {
        name: "Name",
        selector: (row, index) => {
          return row.name || row.username
        },
      },
      {
        name: "Phone no.",
        selector: (row) => {
          return row.phone;
        },
      },
      {
        name: "Occupation",
        selector: (row, index) => {
          return row.occupation || "----"
        },
      },
      {
        name: "Created At",
        selector: (row, index) => {
          return moment(row.createdAt).format("DD-MM-YYYY") || "----"
        },
      },
    ]

    setColumns(cols);
  }, [])

  const data = {
    options: {
      stroke: {
        curve: "smooth",
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        colors: ['#BDA95C']
      },
      line: {
        colors: ['#BDA95C']
      },
      colors: ['#BDA95C'],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  const piData = {
    series: [60, 55],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Male', 'Female'],
      colors: ['#9999EE', '#C59ADB'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  }

  return (
    <div className="container">
      <div className="mt-3">
        <InputGroupText>
          <Input
            type="text"
            name="searchbar"
            id="search"
            placeholder="Search for all users"
          // onChange={inputHandler}
          />
        </InputGroupText>
      </div>
      <div className="hero-title pt-3">Welcome User</div>

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
