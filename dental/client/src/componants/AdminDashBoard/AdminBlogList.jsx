import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Sidebar from "./Sidebar";
import SideBarIVF from "./SideBarIVF";
import axios from "axios";
import { FaCaretRight, FaCaretLeft, FaEdit, FaEye, FaTrashAlt, FaPlus,FaChevronCircleLeft } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const left = "<";
    const right = ">";
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of middle pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }
      
      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="pagination-wrapper d-flex justify-content-center align-items-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="btn btn-primary rounded-circle me-2 d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px" }}
      >
        {/* <FaCaretLeft size={20} /> */}
        {left}
      </button>
      
      <div className="pagination-pages d-flex">
        {getPageNumbers().map((page, index) => (
          page === '...' ? 
            <span key={`ellipsis-${index}`} className="px-3 py-2 d-flex align-items-center">...</span> :
            <button 
              key={`page-${page}`}
              onClick={() => setCurrentPage(page)}
              className={`btn ${currentPage === page ? 'btn-primary' : 'btn-light'} mx-1`}
              style={{ width: "40px", height: "40px" }}
            >
              {page}
            </button>
        ))}
      </div>
      
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="btn btn-primary rounded-circle ms-2 d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px" }}
      >
        {/* <FaCaretRight size={20} /> */}
       {right}
      </button>
    </div>
  );
};

const StatusBadge = ({ isPublished }) => {
  // Check if the value is exactly 1 (published) or 0 (draft)
  return isPublished === 1 ? (
    <span className="badge bg-success px-3 py-2 rounded-pill">Published</span>
  ) : (
    <span className="badge bg-warning px-3 py-2 rounded-pill text-dark">Draft</span>
  );
};

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("published_date");
  const [sortDirection, setSortDirection] = useState("desc");
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://dentalguru.software/api/blogs/allBlogsForAdmin');
      console.log(response);
      
      if (Array.isArray(response.data)) {
        console.log("Blog data example:", response.data[0]); // Check what the data looks like
        setBlogs(response.data);
      } else {
        console.error("Received non-array data:", response.data);
      }
      setLoading(false);
    } catch (error) {
      setError('Failed to load blogs');
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await axios.delete(`https://dentalguru.software/api/blogs/deleteByAdmin/${id}`);
        fetchBlogs(); // Refresh the list
        toast.success("Blog deleted successfully");
      } catch (err) {
        toast.error("Failed to delete blog");
        setError('Failed to delete blog');
      }
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Sort blogs
  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortField === "published_date") {
      const dateA = new Date(a[sortField]);
      const dateB = new Date(b[sortField]);
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    } else {
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    }
  });

  // Filter blogs
  const filteredBlogs = sortedBlogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic - now applied AFTER filtering
  const totalItems = filteredBlogs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / rowsPerPage));
  
  // Ensure current page is valid after filtering
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredBlogs, totalPages]);
  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredBlogs.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate the absolute index for each row
  const calculateSerialNumber = (index) => {
    return indexOfFirstRow + index + 1;
  };

  if (loading) return (
    <Wrapper>
      <div className="main">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-lg-1 col-1 p-0">
              <SideBarIVF />
            </div>
            <div className="col-lg-11 col-11 ps-0">
              <div className="container">
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                  <div className="spinner-grow text-primary me-2" role="status"></div>
                  <div className="spinner-grow text-secondary me-2" role="status"></div>
                  <div className="spinner-grow text-success me-2" role="status"></div>
                  <div className="spinner-grow text-info" role="status"></div>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );

  if (error) return (
    <Wrapper>
      <div className="main">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-lg-1 col-1 p-0">
              <SideBarIVF />
            </div>
            <div className="col-lg-11 col-11 ps-0">
              <div className="container">
                <div className="alert alert-danger shadow-sm" role="alert">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {error}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );

  return (
    <Wrapper>
      <div className="main">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-lg-1 col-1 p-0">
              <SideBarIVF />
            </div>
            <div className="col-lg-11 col-11 ps-0 mt-5">
              <div className="container">
                <div className="dashboard-header shadow-sm rounded p-3 mb-4 bg-white">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h2 className="mb-0">Blog Management</h2>
                      <p className="text-muted mb-0">Manage your website's blog content</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                      <Link to="/blogs/newAdd" className="btn btn-success rounded-pill">
                        <FaPlus className="me-2" /> Create New Blog
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="blog-content shadow rounded bg-white">
                  <div className="p-4 border-bottom">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="search-box">
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="fas fa-search"></i>
                            </span>
                            <input 
                              type="text" 
                              className="form-control border-start-0" 
                              placeholder="Search blogs by title..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="me-2 text-muted">Total Blogs: </span>
                        <span className="badge bg-primary rounded-pill px-3 py-2">{filteredBlogs.length}</span>
                        <span className="ms-3 text-muted">Showing: </span>
                        <span className="badge bg-info rounded-pill px-3 py-2">
                          {indexOfFirstRow + 1} - {Math.min(indexOfLastRow, totalItems)} of {totalItems}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" width="60" className="text-center">Sn.</th>
                            <th scope="col" className="cursor-pointer" onClick={() => handleSort("title")}>
                              Title {sortField === "title" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th scope="col" className="cursor-pointer" onClick={() => handleSort("is_published")}>
                              Status {sortField === "is_published" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th scope="col" className="cursor-pointer" onClick={() => handleSort("published_date")}>
                              Date {sortField === "published_date" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th scope="col" className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentRows.length > 0 ? (
                            currentRows.map((blog, index) => (
                              <tr key={blog.id || index}>
                                <td className="text-center">{calculateSerialNumber(index)}</td>
                                <td className="fw-bold">{blog.title}</td>
                                <td><StatusBadge isPublished={blog.is_published} /></td>
                                <td>
                                  <div className="d-flex flex-column">
                                    <span>{new Date(blog.published_date).toLocaleDateString()}</span>
                                    <small className="text-muted">
                                      {new Date(blog.published_date).toLocaleTimeString()}
                                    </small>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex gap-2 justify-content-center">
                                    <Link to={`/Updateblog/${blog.id}`} className="btn btn-sm btn-outline-primary" title="Edit">
                                      <FaEdit />
                                    </Link>
                                    <Link to={`/blogs/${blog.slug}`} className="btn btn-sm btn-outline-info" target="_blank" title="View">
                                      <FaEye />
                                    </Link>
                                    <button 
                                      onClick={() => handleDelete(blog.id, blog.title)} 
                                      className="btn btn-sm btn-outline-danger"
                                      title="Delete"
                                    >
                                      <FaTrashAlt />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="5" className="text-center py-5">
                                <div className="empty-state">
                                  <div className="icon-container mb-3">
                                    <i className="fas fa-newspaper fa-3x text-muted"></i>
                                  </div>
                                  <h5>No blogs found</h5>
                                  <p className="text-muted">Try a different search or create a new blog</p>
                                  {searchTerm && (
                                    <button 
                                      className="btn btn-outline-secondary mt-2"
                                      onClick={() => setSearchTerm('')}
                                    >
                                      Clear Search
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-3 border-top">
                    <Pagination
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalPages={totalPages}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminBlogList;

const Wrapper = styled.div`
  .main {
    min-height: 100vh;
    background-color: #f8f9fa;
    padding-bottom: 2rem;
  }
  
  .dashboard-header {
    transition: all 0.3s ease;
    border-left: 4px solid #004aad;
  }
  
  .blog-content {
    overflow: hidden;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  
  thead th {
    font-weight: 600;
    border-bottom: 2px solid #dee2e6;
  }
  
  table td, table th {
    vertical-align: middle;
  }
  
  .empty-state {
    padding: 2rem;
  }
  
  .pagination-wrapper {
    min-height: 60px;
  }
  
  .badge {
    font-weight: 500;
  }
  
  .search-box .form-control:focus {
    box-shadow: none;
    border-color: #ced4da;
  }
  
  .btn-outline-primary:hover,
  .btn-outline-info:hover,
  .btn-outline-danger:hover {
    color: white;
  }
  
  .btn-outline-primary,
  .btn-outline-info,
  .btn-outline-danger {
    padding: 0.4rem 0.6rem;
  }
  
  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
  }
  
  p {
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
  }
  
  .table-hover tbody tr:hover {
    background-color: rgba(0, 74, 173, 0.05);
  }
  
  /* Animation for page transitions */
  tbody tr {
    transition: all 0.2s ease;
  }
  
  /* Pagination styles */
  .pagination-pages {
    display: flex;
    align-items: center;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .dashboard-header .row {
      text-align: center;
    }
    
    .dashboard-header .col-md-6:last-child {
      margin-top: 1rem;
    }
    
    .pagination-pages {
      display: none;
    }
    
    .col-md-4 .badge {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`;