import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import AOS from "aos";
import HomeNavbar from "../componants/navbar/HomeNavbar";
import BlogCard from '../componants/Blogcard';
import background from "../assets/images/bg/08.jpg";
import { Parallax } from "react-parallax";
import Footer from "../componants/footer/footer";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init();

    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://dentalguru.software/api/blogs/allBlogs');
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError('Failed to load blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  const handleFooterLink = () => {
    window.scrollTo(0, 0);
  };

  if (loading) return (
    <>
      {/* <Finalnav /> */}
      <Wrapper>
        <div className="container py-5 text-center">
          <h3 className="loader">Loading blogs...</h3>
        </div>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );

  if (error) return (
    <>
      {/* <Finalnav /> */}
      <Wrapper>
        <div className="container py-5 text-center">
          <h3 className="error">{error}</h3>
          <button
            type="button"
            className="btn mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );

  

  return (
    <>
      {/* <Finalnav /> */}
      {/* <Breadcrumb /> */}
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
        <Helmet>
          <title>
            Best Dental Practice Management Software for Clinics & Hospitals
          </title>
          <meta
            name="description"
            content="Get started with DentalGuru, your all-in-one solution for boosting patient engagement, attracting more appointments, and enhancing connections within your dental practice."
          />
          <link rel="canonical" href="https://dentalguru.software/blogs" />
        </Helmet>

        {/* <div
          className="container-fluid"
          id="cont7"
          style={{
            backgroundImage: `url(${blogbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="row" id="row67">
            <div className="col-lg-6 col-md-12" style={{ marginTop: "8rem" }}>
              <h1 className="ws text-white" style={{ marginBottom: "1rem" }}>
                Unlocking Digital Success with our Digital Marketing Blogs!
              </h1>
              <p className="pdd text-white mt-4">
                Discover insights and trends at DOAGuru InfoSystems. Elevate your digital strategies with our expert content.
              </p>
              <button
                type="button"
                className="btn mt-4"
                style={{ color: "white" }}
              >
                <Link
                  to="/contact_us"
                  onClick={handleFooterLink}
                  className="text-white text-decoration-none"
                >
                  Get Started
                </Link>
              </button>
            </div>
            <div className="col-lg-6 col-md-12" id="heroimg">
              <img src={bloghero} className="img3 d-block" alt="hero" />
            </div>
          </div>
        </div> */}

        <div className="container">
            {/* <div className='mt-5 pt-5'></div> */}
          <h2 className="text-center mt-4">List of Blogs</h2>
          <div
            className="underline mx-auto"
            style={{
              height: 3,
              width: "4rem",
              backgroundColor: "#34495E",
              marginTop: 10,
              marginBottom: 10,
            }}
          ></div>

          <div className="row mt-5 cardBox">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogCard
                  key={blog.id || index}
                  title={blog.title}
                  description={blog.excerpt || "Open the article to read the full content."}
                  link={`/blogs/${blog.slug}`}
                  image={blog.image_url ? `https://dentalguru.software${blog.image_url}` : "https://dentalguru.software/uploads/1743677335230-704855352.jpg"}
                  date={new Date(blog.published_date).toLocaleDateString() || blog.date}
                  handleFooterLink={handleFooterLink}
                />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No New blogs found</h4>
                <p>Check back later for new content!</p>
              </div>
            )}
          </div>

        </div>
        
        {/* <Footer /> */}
      </Wrapper>
      <Footer />
    </>
  );
};

export default BlogList;

const Wrapper = styled.div`
  .loader, .error {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #5a626d;
  }

  .error {
    color: #fe7604;
  }

  #cont7 {
    height: 25rem;

    @media screen and (max-width: 768px) {
      height: 45rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 48rem;
    }
  }
  
  #row67 {
    margin-left: 8rem;

    @media screen and (max-width: 768px) {
      margin-left: 0rem;
    }
  }
  
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
      margin-left: -9rem;
      margin-top: -4rem;
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
    color: #4034db;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .card {
    border: none;
    margin: 1rem;

    img {
      border-radius: 10px;
      transition: 0.4s ease-in-out;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.09);
    }

    .card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }

  #fullscreen1 {
    height: 14.7rem;
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 14rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
      height: 14.5rem;
    }
  }

  #fullscreen {
    height: 14.8rem;
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 11rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
      height: 12rem;
    }
  }

  #fullscreen2 {
    height: 16.1rem;
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 14rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
      height: 16.2rem;
    }
  }

  #fullscreen3 {
    height: 15rem;
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 11rem;
    }
    @media screen and (min-width: 1020px) and (max-width: 1600px) {
      height: 12rem;
    }
  }

  .card-text {
    padding: 5px;
  }
  
  .frontimg {
    width: 100%;
    height: 40rem;
    @media screen and (max-width: 768px) {
      height: 15rem;
      width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 20rem;
      width: 100%;
    }
  }
  
  #more {
    width: 10rem;
    margin: 0.5rem;
    color: white;
  }
`;