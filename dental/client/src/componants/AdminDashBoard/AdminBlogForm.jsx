import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import Sidebar from "./Sidebar";
// import SideBarIVF from "./SideBarIVF";
import SideBarIVF from "./SideBarIVF";
import { FaArrowLeft, FaSave, FaTimes, FaImage, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminBlogForm = () => {
  const { id } = useParams(); // If editing existing blog, id will be present
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    meta_description: '',
    meta_keywords: '',
    is_published: false,
  });
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  console.log(formData);
  

  useEffect(() => {
    // If editing, fetch the blog data
    if (isEditing) {
      const fetchBlog = async () => {
        console.log(id);
        
        try {
          const response = await axios.get(`https://dentalguru.software/api/blogs/blogGetForEditing/${id}`);
          const blogData = response.data;
          console.log(blogData);
          
          setFormData({
            title: blogData.title,
            content: blogData.content,
            meta_description: blogData.meta_description || '',
            meta_keywords: blogData.meta_keywords || '',
            is_published: Boolean(blogData.is_published),
          });
          
          if (blogData.image_url) {
            setCurrentImage(`https://dentalguru.software/${blogData.image_url}`);
          }
          
          setLoading(false);
        } catch (err) {
          setError('Failed to load blog data');
          setLoading(false);
          toast.error('Failed to load blog data');
        }
      };

      fetchBlog();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleContentChange = (content) => {
    setFormData({
      ...formData,
      content,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    
    // Create preview URL
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const formDataToSend = new FormData();
      console.log(formDataToSend);
      
      
      // Append all form data
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // Append image if selected
      if (image) {
        formDataToSend.append('image', image);
      }

      if (isEditing) {
        await axios.put(
          `https://dentalguru.software/api/blogs/adminUpdateBlog/${id}`,
          formDataToSend,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        toast.success('Blog updated successfully');
      } else {
        await axios.post(
        //   'https://dentalguru.software/api/blogs/admin-create',
          'https://dentalguru.software/api/blogs/admin-create',
          formDataToSend,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        toast.success('Blog created successfully');
      }

      // Navigate to admin blog list
      navigate('/AdminAdd-blogs');
    } catch (error) {
      toast.error('Error saving blog: ' + (error.response?.data?.message || error.message));
      console.error('Error saving blog:', error);
      setError('Error saving blog: ' + (error.response?.data?.message || error.message));
      setSaving(false);
    }
  };

  if (loading && isEditing) return (
    <Wrapper>
      <div className="main">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-lg-1 col-1 p-0">
              <SideBarIVF />
            </div>
            <div className="col-lg-11 col-11 ps-0 mt-5">
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

  return (
    <Wrapper>
      <div className="main">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-lg-1 col-1 p-0">
              <SideBarIVF />
            </div>
            <div className="col-lg-11 col-11 ps-0">
              <div className="container">
                <div className="dashboard-header shadow-sm rounded p-3 mb-4 mt-2 bg-white">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h2 className="mb-0">{isEditing ? 'Edit Blog' : 'Create New Blog'}</h2>
                      <p className="text-muted mb-0">
                        {isEditing ? 'Update your existing blog post' : 'Create a new blog post for your website'}
                      </p>
                    </div>
                    <div className="col-md-6 text-md-end">
                      <Link to="/AdminAdd-blogs" className="btn btn-outline-secondary rounded-pill me-2">
                        <FaArrowLeft className="me-1" /> Back to List
                      </Link>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="alert alert-danger shadow-sm mb-4" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                <div className="blog-form-content shadow rounded bg-white mb-4">
                  <div className="p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="mb-4">
                            <label htmlFor="title" className="form-label fw-bold">Blog/Meta Title <span className='text-danger'>*</span></label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="title"
                              name="title"
                              value={formData.title}
                              onChange={handleChange}
                              placeholder="Enter a compelling title"
                              required
                            />
                          </div>

                          <div className="mb-4">
                            <label htmlFor="content" className="form-label fw-bold">Blog Content <span className='text-danger'>*</span> </label>
                            <div className="quill-container">
                              <ReactQuill
                                value={formData.content}
                                onChange={handleContentChange}
                                theme="snow"
                                modules={{
                                  toolbar: [
                                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image'],
                                    ['clean']
                                  ]
                                }}
                                style={{ height: '300px', marginBottom: '50px' }}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="card mb-4">
                            <div className="card-header bg-light">
                              <h5 className="mb-0">Publishing Options</h5>
                            </div>
                            <div className="card-body">
                              <div className="form-check form-switch mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="is_published"
                                  name="is_published"
                                  checked={formData.is_published}
                                  onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="is_published">
                                  {formData.is_published ? 'Published' : 'Draft'}
                                </label>
                              </div>
                              <div className="d-grid gap-2">
                                <button 
                                  type="submit" 
                                  className="btn btn-primary" 
                                  disabled={saving}
                                >
                                  {saving ? (
                                    <>
                                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                      Saving...
                                    </>
                                  ) : (
                                    <>
                                      <FaSave className="me-2" />
                                      {isEditing ? 'Update Blog' : 'Create Blog'}
                                    </>
                                  )}
                                </button>
                                <button 
                                  type="button" 
                                  className="btn btn-outline-secondary"
                                  onClick={() => navigate('/AdminAdd-blogs')}
                                >
                                  <FaTimes className="me-2" />
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="card mb-4">
                            <div className="card-header bg-light">
                              <h5 className="mb-0">Featured Image <span className='text-danger'>*</span></h5>
                            </div>
                            <div className="card-body">
                              <div className="mb-3">
                                <label htmlFor="image" className="btn btn-outline-primary d-block">
                                  <FaImage className="me-2" />
                                  Select Image
                                </label>
                                <input
                                  type="file"
                                  id="image"
                                  name="image"
                                  onChange={handleImageChange}
                                  accept="image/jpeg,image/png,image/webp,image/jpg"
                                  className="form-control d-none"
                                  
                                />
                                {(previewImage || currentImage) && (
                                  <div className="image-preview mt-3 text-center">
                                    <img 
                                      src={previewImage || currentImage} 
                                      alt="Blog preview" 
                                      className="img-fluid rounded"
                                      style={{ maxHeight: '150px' }}
                                    />
                                    {image && (
                                      <div className="mt-2 text-success">
                                        <FaCheckCircle className="me-1" />
                                        New image selected
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-header bg-light">
                              <h5 className="mb-0">SEO Options</h5>
                            </div>
                            <div className="card-body">
                              <div className="mb-3">
                                <label htmlFor="meta_description" className="form-label">Meta Description</label>
                                <textarea
                                  className="form-control"
                                  id="meta_description"
                                  name="meta_description"
                                  value={formData.meta_description}
                                  onChange={handleChange}
                                  maxLength="260"
                                  rows="3"
                                  placeholder="Brief description for search engines"
                                ></textarea>
                                <small className="text-muted d-block text-end mt-1">
                                  {formData.meta_description.length}/260 characters
                                </small>
                              </div>
                              <div className="mb-3">
                                <label htmlFor="meta_keywords" className="form-label">Meta Keywords</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="meta_keywords"
                                  name="meta_keywords"
                                  value={formData.meta_keywords}
                                  onChange={handleChange}
                                  placeholder="keyword1, keyword2, keyword3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default AdminBlogForm;

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
  
  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
  }
  
  p {
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
  }
  
  .blog-form-content {
    overflow: hidden;
  }
  
  .form-control:focus, .form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(0, 74, 173, 0.25);
    border-color: #004aad;
  }
  
  .form-switch .form-check-input {
    width: 3em;
    height: 1.5em;
  }
  
  .form-check-input:checked {
    background-color: #198754;
    border-color: #198754;
  }
  
  /* Fix ReactQuill container */
  .quill-container {
    height: 350px;
  }
  
  .quill-container .ql-container {
    height: 250px;
    overflow-y: auto;
  }
  
  .card-header {
    font-weight: 600;
  }
  
  .image-preview {
    border: 1px dashed #ced4da;
    padding: 10px;
    border-radius: 5px;
  }
  
  /* Match ReactQuill styles with Bootstrap */
  .ql-toolbar.ql-snow {
    border-radius: 0.25rem 0.25rem 0 0;
  }
  
  .ql-container.ql-snow {
    border-radius: 0 0 0.25rem 0.25rem;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .dashboard-header .row {
      text-align: center;
    }
    
    .dashboard-header .col-md-6:last-child {
      margin-top: 1rem;
    }
  }
`;