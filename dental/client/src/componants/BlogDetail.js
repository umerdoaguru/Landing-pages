

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import background from "../assets/images/bg/08.jpg";
import { Parallax } from "react-parallax";
import Footer from "../componants/footer/footer";
import HomeNavbar from "../componants/navbar/HomeNavbar";

// import Finalnav from '../../page/Homepages/Finalnav';
// import Footer from '../../page/Homepages/Footer';


const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://dentalguru.software/api/blogs/${slug}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 404) {
        //   navigate('/blogslist'); 
          // Redirect to blog list if not found
        } else {
          setError('Failed to load blog');
        }
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  if (loading) return (
  <Wrapper> 
    <div className="container text-center my-5"><h3>Loading...</h3>
    </div>
    </Wrapper>)
  if (error) return <div className="container text-center my-5"><h3>{error}</h3></div>;
  if (!blog) return null;

  

  return (
    <>
      {/* <Finalnav /> */}
      <Helmet>
        <title>{blog.title} | Best Dental Practice Management Software for Clinics & Hospitals</title>
        <meta name="description" content={blog.meta_description} />
        <meta name="keywords" content={blog.meta_keywords} />
        <link rel="canonical" href={`https://dentalguru.software/blogs/${blog.slug}`} />
      </Helmet>

       < HomeNavbar/>
             <section className="position-relative overflow-hidden">
                    <Parallax
                      blur={{ min: 0, max: 0 }}
                      bgImage={background}
                      bgImageAlt="the dog"
                      strength={500}
                      bgportfolioImageize="100%"
                      bgStyle={{
                        width: "auto",
                        height: "100%",
                        backgroundPosition: "center center", // Centers the image
                        backgroundSize: "cover",
                      }}
                      style={{ position: "absolute", width: "100%", height: "100%" }}
                    ></Parallax>
                    <div className="bg-overlay bg-gradient-overlay-2"></div>
                    <div className="bg-half-170 d-table w-100">
                      <div className="container">
                        <div className="row mt-5 justify-content-center">
                          <div className="col-12">
                            <div className="title-heading text-center">
                              {/* <p className="text-white-50 para-desc mx-auto mb-0">
                                Blogs for DentalGuru software.
                              </p> */}
                              <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                                 Blogs for DentalGuru software.
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="position-middle-bottom">
                          <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                              <li className="breadcrumb-item">
                                <Link to="/">DentalGuru</Link>
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                blogs
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </section>
      <Wrapper>
       
        {/* <Breadcrumb /> */}
        <div className="container">
          <div className="container">
            <h2 className="mt-5 text-center">
              {blog.title}
            </h2>
            <div
              className="underline mx-auto"
              style={{
                height: 3,
                width: "4rem",
                backgroundColor: "#34495E",
                marginTop: 25,
                marginBottom: 10,
              }}
            ></div>
            <div className="text-center blog-meta">
              <span className="blog-date">
                Published: {new Date(blog.published_date).toLocaleDateString()}
              </span>
              {blog.updated_date !== blog.published_date && (
                <span className="blog-updated ms-3">
                  Updated: {new Date(blog.updated_date).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div data-aos="fade-right">
                  {blog.image_url && (
                     <img 
                     src={`https://dentalguru.software${blog.image_url || 'uploads/1743677335230-704855352.jpg'}`} 
                     alt={blog.title || 'Default Image'}  
                     className="frontimg rounded m-4" 
                   />
                  )}
                </div>
              </div>
              {/* <div className="col-lg-12 mt-3">
                <div data-aos="fade-left">
                  
                  <p dangerouslySetInnerHTML={{ __html: introContent }}></p>
                  <br />
                </div>
              </div> */}

              
                <div className="col-lg-12 mt-3">
                  <div data-aos="fade-left">
                    {/* or ye line pure content ke liye he samjhe */}
                    <div 
                      className="blog-content"
                      
                    />
                    <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                  </div>
                  <hr />
                </div>
             

            </div>
          </div>
        </div>
      </Wrapper>
      {/* <Footer /> */}
      <Footer/>
    </>
  );
};

export default BlogDetail;

const Wrapper = styled.div`
  button {
    background-color: #fe7604;
  }
  button:hover {
    background-color: #fe7604;
  }
  .img3 {
    margin-top: 1rem;
    margin-left: -2rem;
    @media screen and (max-width: 768px) {
      margin-left: -8rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 30rem;
      margin-left: -1rem;
      margin-top: -3rem;
    }
  }

  h2 {
    font-size: 34px;
    color: #1e1666;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  p {
    color: #5a626d;
    text-align: justify;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  h5 {
    font-size: 20px;
    color: #4034db; //card
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  li{
    margin-bottom: 0.5rem;
  }
  ul{
    list-style: none;
  }
  .frontimg {
    width: 20rem;
    // height: 50%;
    @media screen and (max-width: 768px) {
      height: 15rem;
      width: 100%;
      margin-top: -4rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 20rem;
      width: 100%;
      margin-top: -4rem;
    }
  }
  #more {
    width: 10rem;
    margin: 0.5rem;
    color: white;
  }

  .th {
    font-weight: bold;
  }
  .mleft{
    margin-left: 2rem;
  }
  
  .blog-meta {
    color: #5a626d;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .blog-content {
    color: #5a626d;
    text-align: justify;
    
    h5 {
      font-size: 20px;
      color: #4034db;
      margin-top: 2rem;
    }
    
    ul {
      list-style: none;
      padding-left: 1rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;