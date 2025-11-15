import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import axios from "axios";
import Sider from "./SideBarIVF";

function SecurityAmount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [securityList, setSecurityList] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://dentalguru.software/api/auth/getbookDemo");

      console.log("Full API Response:", response.data);

      if (Array.isArray(response.data)) {
        setSecurityList(response.data);
        console.log("Security List Set:", response.data);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again.");
      setSecurityList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="row flex-nowrap">
        <div className="col-lg-1 col-1">
          <Sider />
        </div>
        <div className="col-lg-11 col-11 mt-2">
          <div className="text-center mt-4 ms-2">
            <h3>Welcome To Dentalguru Software</h3>
            <h3 className="fw-bold">Demo Data</h3>
          </div>

          {loading && <p className="text-center mt-4">Loading data...</p>}

          {error && <p className="text-center text-danger">{error}</p>}

          {!loading && !error && (
            <div className="col-lg-11 mt-4 ms-3">
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {securityList.length > 0 ? (
                      securityList.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name || "N/A"}</td>
                          <td>{item.phone || "N/A"}</td>
                          <td>{item.email || "N/A"}</td>
                          <td>{item.message || "N/A"}</td>
                          <td>{item.create_date ? new Date(item.create_date).toLocaleDateString('en-CA') : "N/A"}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No data found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default SecurityAmount;

const Wrapper = styled.div`
  .margin {
    margin-left: 90px;
  }
  th {
    background-color: #f8f9fa;
  }
  .set {
    margin-left: -10px;
  }
  th {
    background-color: teal;
    color: #f8f9fa;
  }
`;