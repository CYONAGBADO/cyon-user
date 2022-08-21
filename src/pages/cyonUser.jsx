import React, { useEffect, useState } from "react";
import { FaSearch, FaSpinner, FaUsers } from "react-icons/fa";
// import Search from "./searchbar";
import ModalRegForm from "../components/form";
import { createUser, getUsers } from "../services/users.services";
import moment from "moment";
import { Button, FormGroup, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { createEntry, getEntry } from "../services/dataGenerator";
import {
    DataTableHeader,
    EmptyResult,
    Loading,
    MiscModal,
    userInfoModal,
} from "../components/Misc";

const CyonUser = (props) => {
    const [users, setUsers] = useState([]);
    const [show, toggle] = useState(false);
    const [countries, setCountries] = useState([]);
    const [columns, setColumns] = useState([]);
    const [userData, setUserData] = useState([]);
    const [allUserData, setAllUserData] = useState([]);
    const [isRefreshing, setisRefreshing] = useState(false);
    const [meta, setMeta] = useState({
        limit: 10,
        totalDocs: 3,
        page: 1,
    });
    const [isSearching, setIsSearching] = useState(false);
    const [showUserModal, toggleUserModal] = useState(false);
    const [selected, setSelected] = useState({});
    const [current, setCurrent] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getUsers = () => {
        getEntry(`users?$limit=${meta.limit}&$page=${meta.page}`, (res, err) => {
            if (!err) {
                console.log(res.data);
                setUserData(res.data.users);
                setMeta(res.data);
            } else {
                console.log(err);
            }
        });
    };

    const getAllUsers = () => {
        getEntry(`users?$limit=${Math.pow(10, 5)}`, (res, err) => {
            if (!err) {
                console.log(res.data.users);
                setAllUserData(res.data.users);
            } else {
                console.log(err);
            }
        });
    };

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
                name: "Position",
                selector: (row, index) => {
                    return row.position || "----";
                },
            },
            {
                name: "Occupation",
                selector: (row, index) => {
                    return row.occupation || "----";
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
    }, []);

    // const handleSubmit = () => {
    //     console.log({ payload });
    //     setIsSubmitting(true)
    //     let _payload = {
    //         ...payload,
    //         name: `${payload.fname} ${payload.mname} ${payload.lname}`,
    //     };
    //     switch (current) {
    //         case 1:
    //             setCurrent(current + 1);
    //             setIsSubmitting(!isSubmitting);
    //             break;
    //         case 2:
    //             createEntry("auth/register", _payload, (res, err) => {
    //                 setIsSubmitting(false);
    //                 if (!err) {
    //                     console.log({ res });
    //                     setPayload({});
    //                     getUsers();
    //                     setCurrent(current + 1)
    //                 } else {
    //                     console.log(err);
    //                 }
    //             });
    //             break
    //         case 3:
    //             createEntry("member", _payload, (res, err) => {
    //                 setIsSubmitting(false);
    //                 if (!err) {
    //                     console.log({ res });
    //                     setPayload({});
    //                     toggle(!show);
    //                     getUsers();
    //                     setCurrent(current + 1)
    //                 } else {
    //                     console.log(err);
    //                 }
    //             });

    //         default:
    //             break;
    //     }
    // };

    const selectRow = (row) => {
        setSelected(row);
        toggleUserModal(!showUserModal)
    }

    return (
        <DataTable
            noHeader={false}
            title={<span className="hero-title"> All Users</span>}
            subHeader={true}
            subHeaderComponent={
                <DataTableHeader
                    isLoading={isRefreshing}
                    // refresh={reset}
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
            onRowClicked={(row) => selectRow(row)}
            // progressPending={isFetching}
            onChangeRowsPerPage={(rows) =>
                setMeta({ ...meta, limit: rows })
            }
            onChangePage={(page) => setMeta({ ...meta, page: page })}
        // progressComponent={<Loading title="Gathering logs, Please wait..." />}
        // noDataComponent={<EmptyResult text={"No logs found"} />}
        />
    );
}

export default CyonUser;