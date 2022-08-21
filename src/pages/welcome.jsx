import React from "react";
import CYON from "../imges/CYON.png";
import CYONBG from "../imges/CYONBG.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Welcome = (props) => {
    return (
        <div className="container-fluid" style={{ background: `url(${CYONBG})`, backgroundSize: "cover" }}>
            <div className="row" style={{ background: "#322c4cee" }}>
                <div className="col-md-6">
                    <div style={{ background: `url(${CYON})`, backgroundSize: "cover", height: "100vh" }} />
                </div>
                <div className="col-md-5">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", color: "white" }}>
                        <h2 className="big-font">FOR GOD AND FOR YOUTH...</h2>
                        <p className="medium-font">
                            CYO Nigeria was founded in 1985 to create a youth organization for young Catholics in Nigeria. CYO emerged in the context of a concern of the Catholic Bishops' Conference of Nigeria (CBCN) that the young Catholics and local Catholic youth organizations in Nigeria should celebrate the International Youth Year (IYY) declared by the United Nations in 1985.
                        </p>
                        <div className="pt-3">
                            <Button style={{ width: "200px", fontSize: "1.5em" }} className="btn btn-md button-style p-3">
                                <Link to="/auth/login" style={{ textDecoration: "none", color: "white" }}>
                                    Login
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;