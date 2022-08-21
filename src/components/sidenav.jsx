import React from "react";
import { BiUser } from "react-icons/bi";
import { FaHeadphonesAlt, FaHome, FaInfo, FaPowerOff, FaTimes, FaUser } from "react-icons/fa";
import { decodeAccessToken } from "../services/userAccessControl";
import { useDispatch } from "react-redux";
import { logoutAction } from "../actions/auth";
import { Link } from "react-router-dom";

export const SideNav = (props) => {
    const { toggle, show } = props;
    const dispatch = useDispatch();
    const name = decodeAccessToken()?.name || decodeAccessToken()?.username;

    const logout = () => {
        dispatch(logoutAction());
    }

    return (
        <div className="shadow" style={{ height: "100vh", width: "100vw", position: "fixed", top: "0px", zIndex: "1", display: "flex" }}>
            <div style={{ flex: 8, background: "#fcfcfc", height: "inherit" }}>
                <div>
                    <div className="p-3 shadow-sm">
                        <Link to={"/profile"} className="link-style" style={{color: "black"}} onClick={() => props.toggle(!props.show)}>
                            <div className="row clickable">
                                <div className="col-2">
                                    <div className="avatar">
                                        <BiUser />
                                    </div>
                                </div>
                                <div className="col-10 pt-1">
                                    {name}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="p-3 mt-3">
                        <SideItem {...props} to={"/"} className="row mt-3 p-2" icon={<FaHome />} label={"Home"} />
                        <SideItem className="row mt-3 p-2" icon={<FaHeadphonesAlt />} label={"Support"} />
                        <SideItem className="row mt-3 p-2" icon={<FaInfo />} label={"About"} />
                        <Logout onClick={logout} />
                    </div>
                </div>
            </div>
            <div onClick={() => toggle(!show)} style={{ flex: 4, background: "#22222267", height: "100vh" }}></div>
        </div>
    )
}

const SideItem = (props) => {
    return (
        <Link to={props.to} className="link-style-card">
            <div className={props.className} onClick={() => props.toggle(!props.show)} style={props.label === "Logout" ? { position: "fixed", bottom: 0, display: "flex" } : {}}>
                <div className="col-2">
                    {props.icon}
                </div>
                <div className="col-10 pl-3">
                    {props.label}
                </div>
            </div>

        </Link>
    )
};

const Logout = (props) => {
    return (
        <div className={props.className} onClick={props.onClick} style={{ position: "fixed", bottom: 0, display: "flex", width: "60%", color: "red" }}>
            <div>
                <FaPowerOff />
            </div>
            <div className="pb-3" style={{ marginLeft: "30px" }}>
                Logout
            </div>
        </div>
    )
};
