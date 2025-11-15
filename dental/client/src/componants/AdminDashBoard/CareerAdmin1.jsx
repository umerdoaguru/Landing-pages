// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import SideBarIVF from "./SideBarIVF";
// import axios from "axios";
// import { FaCaretRight } from "react-icons/fa6";
// import { FaCaretLeft } from "react-icons/fa6";
// import { useNavigate, Link } from "react-router-dom";

// const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div>
//       <button
//         onClick={handlePrevPage}
//         disabled={currentPage === 1}
//         className="btn btn-primary"
//       >
//         <FaCaretLeft size={25} />
//       </button>
//       <span className="fs-4 p-1 fw-bold">Page {currentPage}</span>
//       <button
//         onClick={handleNextPage}
//         disabled={currentPage === totalPages}
//         className="btn btn-primary"
//       >
//         <FaCaretRight size={25} />
//       </button>
//     </div>
//   );
// };

// const CareerAdmin = () => {
//   const [userData, setUserData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(5);
//   const navigate = useNavigate();
//   const getContactData = async () => {
//     try {
//       const response = await axios.get(
//         `https://doaguru.com/api/auth/candidates`
//       );
//       console.log(response.data.candidates);

//       if (Array.isArray(response.data.candidates)) {
//         setUserData(response.data.candidates);
//       } else {
//         console.error("Received non-array data:", response.data);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getContactData();
//   }, []);

//   // Pagination component
//   // Pagination logic
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

//   return (
//     <Wrapper>
//       <div className="main">
//         <div className="container-fluid">
//           <div className="row flex-nowrap">
//             <div className="col-lg-2 col-2 p-0">
//               <SideBarIVF />
//             </div>
//             <div className="col-lg-10 col-10 ps-0">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                     <div className="d-flex flex-column justify-content-center align-item-center text-center pt-4">
//                       <h3>Welcome To Jabalpur IVF Center </h3>
//                       <h3 className="fw-bold">Book Now Data</h3>
//                     </div>
//                   </div>
//                   <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                     <table class="table table-bordered border-primary shadow">
//                       <thead class="table table-dark">
//                         <tr>
//                           <th scope="col">Name</th>
//                           <th scope="col">Phone NO</th>
//                           <th scope="col">Email ID</th>
//                           <th scope="col">Apply For</th>
//                           <th scope="col">Resume</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {currentRows.map((item, index) => (
//                           <tr key={index}>
//                             <th>{item.name}</th>
//                             <td>{item.phone_no}</td>
//                             <td>{item.email}</td>
//                             <td>{item.apply_for}</td>
//                             <td className="text-center">
//                               <a
//                                 href={item.cv}
//                                 target="_blank"
//                                 className="btn btn-primary"
//                               >
//                                 View Resume
//                               </a>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                     <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
//                       <Pagination
//                         currentPage={currentPage}
//                         setCurrentPage={setCurrentPage}
//                         totalPages={Math.ceil(userData.length / rowsPerPage)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default CareerAdmin;
// const Wrapper = styled.div`
//   .sc-jiaSJS {
//     @media (min-width: 1024px) {
//       width: 64rem;
//     }
//   }
//   .main {
//     height: 100%;
//     /* background-color: #e6ecf1; */
//   }
//   .chart {
//     background-color: white;
//     border-radius: 5px;
//   }
//   .blDkbe #sidebar {
//     width: 100%;
//     height: 54rem;
//     background-color: #004aad;
//   }
//   h3 {
//     font-family: "Poppins", sans-serif;
//     font-size: 2.5rem;
//   }
//   p {
//     font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
//       "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
//     font-size: 1.5rem;
//     margin: 0 0 8px;
//   }
//   .appointTable {
//     @media screen and (min-width: 768px) and (max-width: 850px) {
//       width: 44rem;
//       margin-left: 1.5rem;
//     }
//     @media screen and (min-width: 851px) and (max-width: 1024px) {
//       width: 58rem;
//       margin-left: 1.1rem;
//     }
//   }
//   th {
//     background-color: teal;
//   }
// `;
