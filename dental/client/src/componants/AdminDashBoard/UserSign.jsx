import React, { useState } from "react";
import styled from "styled-components";
import { Table, Input, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import Lottie from "react-lottie";
import Sider from "./SideBarIVF";
// import animationData from "../../images/animation/loading-effect.json";

function SecurityAmount() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [securityList, setSecurityList] = useState([]);
  const [loadingEffect, setLoadingEffect] = useState(false);
  const [showEditSecAmount, setShowEditSecAmount] = useState(false);
  const [showPaySecAmount, setShowPaySecAmount] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [currentRows, setCurrentRows] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(e.target.value);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <div className="header">{/* <Header /> */}</div>

      <div className="row flex-nowrap">
        <div className="col-lg-1 col-1 " id="hd">
          <Sider />
        </div>
        <div className="col-lg-11 mt-2 set" id="set">
          <div className="text-center mt-4">
            <h3>Welcome To dentalguru Software </h3>
            <h3 className="fw-bold">Booking Data</h3>
          </div>
          <div className="row">
            {/* Start Search by Patient */}
            <div className="col-lg-12" id="head">
              <nav className="shadow rounded navbar navbar-light bg-light">
                <h6 className="mx-3 my-1 my-md-0">Search By Patient</h6>
                <div className="container-fluid" id="cont">
                  <div className="navbar1">
                    <input
                      className="form-control me-2 rounded-5"
                      type="search"
                      placeholder="Enter Patient Name or Mobile or Id"
                      aria-label="Search"
                      onChange={handleSearch}
                      value={searchTerm}
                    />
                  </div>
                  <div>
                    <Form.Group
                      controlId="rowsPerPageSelect"
                      style={{ display: "flex" }}
                    >
                      <h6 className="d-flex align-items-center">
                        Rows Per Page:
                      </h6>
                      <Form.Control
                        as="select"
                        value={rowsPerPage}
                        className="m-2"
                        style={{ width: "auto" }}
                        onChange={handleRowsPerPageChange}
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div>
                    <h5>Total Patients - {securityList?.length}</h5>
                  </div>
                </div>
              </nav>
            </div>
            {/* End Search by Patient */}

            <div className="col-lg-12">
              <div
                className="widget-area-2 proclinic-box-shadow mt-5"
                id="tableres"
              >
                {loadingEffect ? (
                  <Lottie
                    options={defaultOptions}
                    height={300}
                    width={400}
                    style={{ background: "transparent" }}
                  ></Lottie>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Full Name</th>
                          <th>Mobile Number</th>
                          <th>Medical Record Number</th>
                          <th>Preferred Date</th>
                          <th>Preferred Time</th>
                          <th>Reason for Visit</th>
                        </tr>
                      </thead>
                      {currentRows?.length === 0 ? (
                        <div className="no-data-container">
                          <h4>No Data Found</h4>
                        </div>
                      ) : (
                        <tbody>
                          {currentRows?.map((item) => (
                            <tr className="table-row" key={item.appointment_id}>
                              <td>
                                {item?.date
                                  ? moment(
                                      item?.date,
                                      "DD-MM-YYYYTHH:mm:ss"
                                    ).format("DD/MM/YYYY")
                                  : ""}
                              </td>
                              <td>{item.appointment_id}</td>
                              <td>{item.patient_name}</td>
                              <td>{item.patient_number}</td>
                              <td>
                                {"Dr. "}
                                {item.assigned_doctor}
                              </td>
                              <td>{item.amount}</td>
                              <td>{item.remaining_amount}</td>
                              <td>{item.payment_Mode}</td>
                              <td>{item.transaction_Id}</td>
                              <td>
                                {item.payment_date
                                  ? moment(
                                      item?.payment_date,
                                      "DD-MM-YYYYTHH:mm:ss"
                                    ).format("DD/MM/YYYY")
                                  : ""}
                              </td>
                              <td>
                                {item?.refund_date
                                  ? moment(
                                      item?.refund_date,
                                      "DD-MM-YYYYTHH:mm:ss"
                                    ).format("DD/MM/YYYY")
                                  : ""}
                              </td>
                              <td>
                                <div className="d-flex">
                                  <h6>{item.payment_status}</h6>
                                </div>
                              </td>
                              <td>{item.refund_amount}</td>
                              <td>
                                {item.payment_status === "pending" ? (
                                  <>
                                    <button
                                      className="mx-2 btn btn-info"
                                      // onClick={() =>
                                      //   openSecurityAmtPay(item.sa_id)
                                      // }
                                    >
                                      Pay now
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      className={`mx-2 btn btn-warning ${
                                        item.remaining_amount === 0
                                          ? "disabled"
                                          : ""
                                      }`}
                                      // onClick={() =>
                                      //   openSecAmountSubPopup(item.sa_id)
                                      // }
                                    >
                                      Make Refund
                                    </button>
                                  </>
                                )}
                              </td>
                              <td>
                                <Link
                                  to={`/print_security_amount/${item.sa_id}`}
                                >
                                  {item.payment_status !== "Pending" && (
                                    <button className="btn btn-success">
                                      Print
                                    </button>
                                  )}
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                )}
                <div className="container mt-3 mb-3">
                  <div className="row">
                    <div className="col-lg-10 col-xl-8 col-md-12 col-sm-12 col-8">
                      <h4
                        style={{
                          color: "black",
                          marginLeft: "5px",
                          marginRight: "5px",
                          fontSize: "1.1rem",
                        }}
                      >
                        {searchTerm ? (
                          <>
                            Showing Page {currentPage} of
                            {/* {totalPages} */}
                            from {filteredData?.length} entries (filtered from{" "}
                            {securityList?.length} total entries)
                          </>
                        ) : (
                          <>
                            Showing Page {currentPage} of
                            {/* {totalPages}  */}
                            from {securityList?.length} entries
                          </>
                        )}
                      </h4>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                      <div className="d-flex justify-content-evenly">
                        <Button
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          variant="warning"
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={() => setCurrentPage(currentPage + 1)}
                          // disabled={currentPage ===
                          //   totalPages
                          // }
                          variant="success"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SecurityAmount;

const Wrapper = styled.div`
  // Add your styled-components CSS here
  .margin {
    margin-left: 90px;
  }
  th {
    background-color: #f8f9fa;
    /* color: aliceblue; */
  }
  .set {
    margin-left: -10px;
  }
  th {
    background-color: teal;
    color: #f8f9fa;
  }
`;
