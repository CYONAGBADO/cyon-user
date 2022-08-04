import React, { useEffect, useState } from "react";
// import Lottie from "react-lottie";
// import loader from "../assets/lotties/loader.json";
import moment from "moment";
// import noVisitsAnimae from "assets/lotties/19314-sequis-empty-state.json";
import {
  Button,
  ButtonDropdown,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { MdRefresh } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";

const _ = require("lodash");

export const Loading = (props) => {
  return (
    <div
      className={`${props.className ? props.className : "flex full-container py-md-5 transparent"
        } align-center`}
    >
      {/* <img className="mx-auto" style={props.loaderStyle || { opacity: '0.7', borderRadius: 200 }} src={require("assets/img/preloader.gif")} alt="Loading..." /> */}
      {/* <h4
        style={{ marginTop: 50, textAlign: "center", color: "#293450" }}
        className=" text-center "
      >
        {props.title || props.text || "Fetching..."}
      </h4> */}
    </div>
  );
};

export const allStates = [
  { label: "Abia", value: "Abia" },
  { label: "Adamawa", value: "Adamawa" },
  { label: "Akwa Ibom", value: "Akwa Ibom" },
  { label: "Anambra", value: "Anambra" },
  { label: "Bauchi", value: "Bauchi" },
  { label: "Bayelsa", value: "Bayelsa" },
  { label: "Benue", value: "Benue" },
  { label: "Borno", value: "Borno" },
  { label: "Cross River", value: "Cross River" },
  { label: "Delta", value: "Delta" },
  { label: "Ebonyi", value: "Ebonyi" },
  { label: "Enugu", value: "Enugu" },
  { label: "Edo", value: "Edo" },
  { label: "Ekiti", value: "Ekiti" },
  { label: "Gombe", value: "Gombe" },
  { label: "Imo", value: "Imo" },
  { label: "Jigawa", value: "Jigawa" },
  { label: "Katsina", value: "Katsina" },
  { label: "Kebbi", value: "Kebbi" },
  { label: "Kogi", value: "Kogi" },
  { label: "Kwara", value: "Kwara" },
  { label: "Lagos", value: "Lagos" },
  { label: "Nasarawa", value: "Nasarawa" },
  { label: "Niger", value: "Niger" },
  { label: "Ogun", value: "Ogun" },
  { label: "Ondo", value: "Ondo" },
  { label: "Osun", value: "Osun" },
  { label: "Oyo", value: "Oyo" },
  { label: "Plateau", value: "Plateau" },
  { label: "Rivers", value: "Rivers" },
  { label: "Sokoto", value: "Sokoto" },
  { label: "Taraba", value: "Taraba" },
  { label: "Zamfara", value: "Zamfara" },
  { label: "Abuja", value: "Abuja" },
];


// export const EmptyResult = (props) => {
//   return (
//     <div className="full-container align-center pt-md-5">
//       <Lottie
//         options={{
//           loop: true,
//           autoplay: true,
//           animationData: noVisitsAnimae,
//         }}
//         height={props.height || 300}
//         width={props.width || 300}
//       />
//       {props.text && <p className="lead" style={{ textAlign: "center" }}>{props.text}</p>}
//     </div>
//   );
// };

export const DataTableHeader = (props) => {
  return (
    <Row
      className={`data-table-header ${props.className}`}
      style={{ width: "inherit" }}
    >
      {props.rightComponent && <Col md={6} className="ml-md-n3">{props.rightComponent}</Col>}
      <Col
        md={6}
        className="ml-auto"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {props.children}
        {props.refresh && (
          <Button
            title="Refresh"
            color="light"
            className="p-2 table-menu-btn"
            onClick={props.refresh}
          >
            <MdRefresh
              className={`white-text ${props.isLoading ? "fa-spin" : ""}`}
              style={{ fontSize: 20 }}
            />
          </Button>
        )}
      </Col>
    </Row>
  );
};

export const TableMenuButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      className={`my-0 py-0 ${props.className}`}
    >
      <DropdownToggle className="my-0 p-0 bg-transparent">
        <Button color="light" className={`my-0 m-0 table-menu-btn p-0 ${props.innerClassName}`}>
          {props.iconComponent || <RiMenu4Line />}
        </Button>
      </DropdownToggle>
      <DropdownMenu className="py-0">
        {_.map(props.options, function (option, index) {
          return (
            <DropdownItem key={index} onClick={option.action} className={`mt-0 ${option.className}`}>
              {option.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export const MiscModal = (props) => {
  return (
    <Modal
      size={props.size || "md"}
      fade={props.fade}
      backdropClassName={props.bgDrop || "bg-dark"}
      isOpen={props.open}
      toggle={props.toggle}
      className={`modal-dialog-centered border-0 ${props.className}`}
    >
      {props.title && (
        <ModalHeader>
          <h5 className="h5-responsive red-text">{props.title}</h5>
        </ModalHeader>
      )}
      <ModalBody className={`bg-light misc-modal ${props.bodyClassName || ''}`}>
        {props.children}
      </ModalBody>
      <ModalFooter>
        {props.footer}
      </ModalFooter>
    </Modal>
  );
};

export const MiscModal2 = (props) => {
  return (
    <Modal
      size={props.size || "md"}
      fade={false}
      backdropClassName={props.bgDrop || "bg-dark"}
      isOpen={props.open}
      toggle={props.toggle}
      className={`modal-dialog-centered border-0 invoice-modal ${props.className}`}
    >
      {props.title && (
        <ModalHeader>
          <h5 className="h5-responsive red-text">{props.title}</h5>
        </ModalHeader>
      )}
      {/* <ModalBody className={`shadow bg-light ${props.bodyClassName || ''}`}> */}
      {props.children}
      {/* </ModalBody> */}
    </Modal>
  );
};

export const StepsCounter = (props) => {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    let _bars = [];
    for (let i = 0; i < props.total; i++) {
      _bars.push(
        <div
          className={`flex-1 ${i + 1 <= props.current ? "bg-warning" : "bg-grey"
            }`}
          style={{ height: 5, margin: 1 }}
        />
      );
    }
    setBars(_bars);
  }, [props.current, props.total]);

  return (
    <>
      <div
        className="flex flex-1 w-100"
        style={{ flexDirection: "column", alignItems: "flex-end" }}
      >
        <small className="grey-text">{`Step ${props.current} of ${props.total}`}</small>
        <div className="flex flex-1 w-100">{bars}</div>
      </div>
      {props.children}
    </>
  );
};

export const DecisionModal = (props) => {
  return (
    <MiscModal
      size={"md"}
      open={props.open}
      toggle={props.toggle}
      className="rounded-borders-md"
      title="Confirm"
    >
      {/* <div className="font-weight-bold sad-color">Confirm</div> */}
      <div className="text-center p-5">
        Are you sure you want to proceed?
      </div>
      <div className="align-right mt-2">
        <Button outline className="strong-btn" onClick={props.toggle}>Cancel</Button>
        <Button className="strong-btn primary-color" onClick={props.next}>Proceed</Button>
      </div>
    </MiscModal>
  )
}

export const MenuTile = (props) => {
  return (
    <div className="shadow bg-menu-tile menu-tile rounded-borders-md clickable hover" onClick={props.onClick} style={{ borderTop: `5px solid ${props.color}` }} >
      <div className="p-4">
        <div className="row">
          <div className="col-md-3 menu-tile-icon">
            {props.icon}
          </div>
          <div className="col-md-9 my-auto">
            {props.title}
          </div>
        </div>
      </div>
      <div className="bottom-label rounded-borders-md shadow" >
        <div className="row">
          <div className="col-md-9">
            {props.body}
          </div>
          <div className="col-md-2">
            <TableMenuButton
              innerClassName={props.innerClassName}
              className={props.className}
              options={props.options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}