import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AttendanceController } from "../components/Misc";
import { getEntry } from "../services/dataGenerator";

const Attendance = (props) => {
    const [data, setData] = useState({});
    const [reload, setReload] = useState(false);
    const [users, setUsers] = useState([]);

    const getAttendanceRecord = () => {
        getEntry(`attendance?$limit=${Math.pow(10, 5)}`, (res, err) => {
            if (!err) {
                console.log(res.data);
                setData(res.data.attendance);
                setReload(!reload);
            } else {
                console.log(err);
            }
        });
    };

    useEffect(() => {
        getAttendanceRecord();
    }, [])

    return (
        <AttendanceController
            attendanceData={{ data }}
            action={"view"}
            reloader={reload}
        />
    )
}

export default Attendance;