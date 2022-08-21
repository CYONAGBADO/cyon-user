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
  const [userData, setUserData] = useState([]);
  const [columns, setColumns] = useState([]);
  const name = decodeAccessToken()?.name || decodeAccessToken()?.username;
  const [meta, setMeta] = useState({
    limit: 10,
    totalDocs: 5,
    page: 1,
  });

  useEffect(() => {
    getEntry(`users/celebrants`, (res, err) => {
      if (!err) {
        setUserData(res.data.users);
        setMeta(res.data);
      } else {
        console.log(err);
      }
    });
  }, []);

  useEffect(() => {
    const cols = [
      {
        name: "Name",
        selector: (row, index) => {
          return row.name || row.username;
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
          return row.occupation || "----";
        },
      },
      {
        name: "Date of Birth",
        selector: (row, index) => {
          return moment(row.dob).format("DD-MM-YYYY") || "----";
        },
      },
      {
        name: "Created At",
        selector: (row, index) => {
          return moment(row.createdAt).format("DD-MM-YYYY") || "----";
        },
      },
    ];

    setColumns(cols);
  }, [])

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
          {/* <FaSearch /> */}
        </InputGroupText>
      </div>
      <div className="hero-title pt-3" style={{ textTransform: "capitalize" }}>Welcome {name}</div>

      <div className="scrollable">
        <div className="container-fluid dash-layer">
          <div className="pl-2">
            Quick Actions
          </div>
          <div className="row">
            <div className="col-6">
              <Link to={"/attendance"} className="link-style-card">
                <div className="shadow item clickable">
                  Attendance
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

        <div className="dash-layer mt-3">
          <div className="shadow p-2 new_users">
            <h5>Celebrants for the month</h5>
            {/* <div className="inner_new_users"> */}
            <DataTable
              noHeader={true}
              // title={props.title}
              columns={columns}
              data={userData}
              striped={true}
              highlightOnHover={true}
              responsive={true}
              overflowY={true}
              pagination={true}
              defaultSortField={"Swipe Time"}
              paginationPerPage={meta.limit}
              theme={"solarized"}
              paginationTotalRows={meta.totalDocs}
              paginationServer={true}
              noRowsPerPage={false}
              // progressPending={isFetching}
              onChangeRowsPerPage={(rows) =>
                setMeta({ ...meta, limit: rows })
              }
              onChangePage={(page) => setMeta({ ...meta, page: page })}
            // progressComponent={<Loading title="Gathering logs, Please wait..." />}
            // noDataComponent={<EmptyResult text={"No logs found"} />}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
