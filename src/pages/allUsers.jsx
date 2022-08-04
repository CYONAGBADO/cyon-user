import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
// import Search from "./searchbar";
import ModalRegForm from "../components/form";
import { createUser, getUsers } from "../services/users.services";
import moment from "moment";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Container,
  FormGroup,
  Col,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { getEntry } from "../services/dataGenerator";
import { DataTableHeader, EmptyResult, Loading, MiscModal } from '../components/Misc';

const AllUsers = () => {
  // const [isModalOpen, toggleModal] = useState(true);
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    name: "",
    address: "",
    dob: new Date().toDateString(),
    gender: "",
    marital_status: "",
    occupation: "",
    phone: "",
    lga: "",
    soo: "",
    country: "",
    password: "",
    createdAt: { __type: "Date", iso: moment().toISOString() },
    updatedAt: { __type: "Date", iso: moment().toISOString() },
  });
  const [users, setUsers] = useState([]);
  const [show, toggle] = useState(false);
  const [countries, setCountries] = useState([]);
  const [columns, setColumns] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isRefreshing, setisRefreshing] = useState(false);
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Button color="secondary" onClick={() => toggle(!show)}>
            Add User
          </Button>

          <div className="users m-3 shadow p-3">
            <span className="other-title">
              <FaUsers />
              All Users
            </span>
            <br />
            <div className="row">
              <div className="col-md-12">
                <div>
                  <MiscModal
                    open={show}
                    size={"xl"}
                    toggle={() => toggle(!show)}
                    title={"Create user"}
                    footer={
                      <FormGroup check row className="p-2">
                        <Col sm={{ size: 10, offset: 2 }}>
                          <Button>Submit</Button>
                        </Col>
                      </FormGroup>
                    }
                  >
                    <ModalRegForm
                      countries={countries}
                      getPayload={(_payload) => {
                        setPayload({ ...payload, ..._payload });
                      }}
                    />
                  </MiscModal>
                </div>
                <div className="mt-3">
                  <DataTable
                    noHeader={true}
                    // title={props.title}
                    subHeaderComponent={
                      <DataTableHeader
                        isLoading={isRefreshing}
                        refresh={() =>
                          setMeta({ ...meta, page: 1 })
                        }
                      >

                      </DataTableHeader>
                    }
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
                    onChangeRowsPerPage={(rows) => setMeta({ ...meta, limit: rows })}
                    onChangePage={(page) => setMeta({ ...meta, page: page })}
                  // progressComponent={<Loading title="Gathering logs, Please wait..." />}
                  // noDataComponent={<EmptyResult text={"No logs found"} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
