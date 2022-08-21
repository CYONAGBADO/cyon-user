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
import CustomTab from "../components/customTab";

const moment = require("moment");

const Finance = () => {
  const [finData, setFinData] = useState([]);
  const [totalBalance, setTotalBalance] = useState({});
  const [totalCredit, setTotalCredit] = useState({});
  const [totalDebit, setTotalDebit] = useState({});
  const [meta, setMeta] = useState({
    limit: 10,
    totalDocs: 5,
    page: 1,
  });
  const [totalUsers, setTotalUsers] = useState(0);
  const [columns, setColumns] = useState([]);
  const [show, toggle] = useState(false);

  const getFinances = () => {
    getEntry('finance/records?$include=user', (res, err) => {
      if (!err) {
        console.log(res);
        setFinData(res.data.finance);
      } else {
        console.log(err);
      }
    })
  }

  useEffect(() => {
    getFinances();
  }, [])

  useEffect(() => {
    const cols = [
      {
        name: "Amount",
        selector: (row) => {
          return <span>&#8358; {row.amount.value}</span>;
        },
      },
      {
        name: "Title",
        selector: (row, index) => {
          return row.title || row.name || "----";
        },
      },
      {
        name: "Date",
        selector: (row, index) => {
          return moment(row.date).format("DD-MM-YYYY") || "----";
        },
      },
      {
        name: "Type",
        selector: (row, index) => {
          return row.type
        }
      }
    ];

    setColumns(cols);
  }, []);

  return (
    <div className="container">
      <div className="container-fluid dash-layer mt-3">
        <div className="pl-2 pb-2">
          Financial records
        </div>
        {/* <CustomTab links={["Dues", "Fines", "Supports"]} /> */}
        <div className="row">
          <div className="col-12">
            <DataTable
              noHeader={true}
              // title={props.title}
              columns={columns}
              data={finData}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
