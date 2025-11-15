import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import offer from "../assets/images/brands/offer.png";
import background from "../assets/images/saas-shape.png";
import lapy from "../assets/images/lapy.png";
import square from "../assets/images/square/square-white.png";
import Resepnist from "../assets/images/app/Resepnist.png";
import Doctor from "../assets/images/app/Doctor.png";
import faqs from "../assets/images/faqs.png";
import Navbar from "../componants/navbar/navbar";
import ScrollTop from "../componants/scrollTop";
import MiniFooter from "../componants/footer/minifooter";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import Whatsup from "../componants/Whatsup";
import Call from "../componants/Call";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiWater,
  TfiDropbox,
  MdFilterCenterFocus,
  AiOutlineFire,
  MdSchema,
  PiFlower,
  AiOutlineCheckCircle,
  MdKeyboardArrowRight,
  FiPlay,
} from "../assets/icons/vander";

import { accordionData2 } from "../data/data";
import styled from "styled-components";
import Footer from "../componants/footer/footer";
import { FiPhoneCall} from "react-icons/fi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

export default function MiniDentalguru() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);



  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const featureData = [
    {
      icon: BiWater,
      title: "Support",
      desc: "Mon - Sat , 10 AM To 6 PM",
    },
    {
      icon: TfiDropbox,
      title: "Secured Database",
      desc: "We provide secure databases, ensuring data protection through encryption and controls.",
    },
    {
      icon: MdFilterCenterFocus,
      title: "Multi-Platform Access ",
      desc: "Accessible across various devices including desktops and tablets for flexibility and convenience.",
    },
    {
      icon: AiOutlineFire,
      title: "Cost-Effective",
      desc: "Affordable pricing plans and options that deliver high value without breaking the budget.",
    },
    {
      icon: MdSchema,
      title: "Employee Management",
      desc: "Tools to manage employee roles, schedules, and performance",
    },
    {
      icon: PiFlower,
      title: "User-Friendly Interface",
      desc: " Navigate effortlessly through our software with its intuitive design.",
    },
  ];

  const plan = [

    {
      price: "1999/-",
      finalPrice: "3999/-",
      title: "MONTHLY",
      duration: "30",
      subTitle: [
        <div style={{color:"black"}}>
        Monthly plan with maintenance and features tailored for dental professionals.</div>,
        
 <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Flat 50% Discount on Your Subscription!</div>
                </div>,
                  <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                         <div><FaCircleMinus /></div> <div className="text-start ms-2">3 Month SEO (Search Engine Optimization)</div>
                       </div>,
                                       <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                                       <div><FaCircleMinus /></div> <div className="text-start ms-2">15 Days SMO (Social Media Optimization)</div>
                                     </div>,
                  
                <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                  <div className="mt-3"><FaCircleMinus /></div> <div className="text-start ms-2">2-Page React Website for Appointments (Includes 1 Year of Free Maintenance).</div>
                </div>,  

                <div style={{ color: "FaCircleMinus", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                 <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">1 Premium Video (Exclusive to Lifetime Plan).</div>
                </div>,

               <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                 <div className="mt-3"><FaCircleMinus /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards for Every Referral!</div>
               </div>,
                
/* <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
         <div><FaCircleMinus /></div> <div className="text-start ms-2">15 Days of SMO (Social Media Optimization)</div>
       </div>,
  
<div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
  <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">2-Page React Website for Appointments (Includes 1 Year of Free Maintenance).</div>
</div>,  

<div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
 <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">1 Premium Video (Exclusive to Lifetime Plan).</div>
</div>,

<div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
 <div className="mt-3"><FaCircleMinus /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards for Every Referral!</div>
</div>, */

      ],
      status: true,
      name:"Dentalguru Lite", 
    },

//     {
//       price: "2,249/-",
//       finalPrice: "4,499/-",
//       title: "QUATERLY",
//       duration: "90",
//       subTitle: [
//         <div style={{color:"black"}}>
//         3-month plan offering discounts and additional features for extended service.</div>,

// <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
// <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Flat 50% Discount on Your Subscription!</div>
// </div>,

// <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//          <div><FaCircleMinus /></div> <div className="text-start ms-2">15 Days of SMO (Social Media Optimization)</div>
//        </div>,
  
// <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//   <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">2-Page React Website for Appointments (Includes 1 Year of Free Maintenance).</div>
// </div>,  

// <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//  <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">1 Premium Video (Exclusive to Lifetime Plan).</div>
// </div>,

// <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//  <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards for Every Referral!</div>
// </div>,
//       ],
//       status: true,
//       name:"Dentalguru Lite",
//     },

//     {
//       price: "3,599/-",
//       finalPrice: "7,199/-",
//       title: "HALF YEARLY",
//       duration: "180",
//       subTitle: [
//               <div style={{color:"black"}}>
//               Half-yearly plan with additional perks and a discount for longer duration.</div>,

// <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
// <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Flat 50% Discount on Your Subscription!</div>
// </div>,

// <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//          <div><FaCheckCircle /></div> <div className="text-start ms-2">15 Days of SMO (Social Media Optimization)</div>
//        </div>,
  
// <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//   <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">2-Page React Website for Appointments (Includes 1 Year of Free Maintenance).</div>
// </div>,  

// <div style={{ color: "#8492A6", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//  <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">1 Premium Video (Exclusive to Lifetime Plan).</div>
// </div>,

// <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//  <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards for Every Referral!</div>
// </div>,
//             ],
//       status: true,
//       name:"Dentalguru Lite",
//     },

    {
      price: "11999/-",
      finalPrice: "23999/-",
      title: "YEARLY PLAN",
      duration: "365",
            subTitle: [
              <div style={{color:"black", textAlign:"start"}}>
              Yearly plan with the most comprehensive benefits and exclusive offers.</div>,
      
                <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Flat 50% Discount on Your Subscription!</div>
                </div>,
        
                <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                         <div><FaCheckCircle /></div> <div className="text-start ms-2">3 Month SEO (Search Engine Optimization)</div>
                       </div>,
                                       <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                                       <div><FaCheckCircle /></div> <div className="text-start ms-2">15 Days SMO (Social Media Optimization)</div>
                                     </div>,
                  
                <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                  <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">2-Page React Website for Appointments (Includes 1 Year of Free Maintenance).</div>
                </div>,  

                <div style={{ color: "FaCircleMinus", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                 <div className="mt-2"><FaCircleMinus /></div> <div className="text-start ms-2">1 Premium Video (Exclusive to Lifetime Plan).</div>
                </div>,

               <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
                 <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards for Every Referral!</div>
               </div>,
            ],
      status: true,
      name:"Dentalguru Lite", 
    },

//     {
//       price: "24,999/-",
//       finalPrice: "49,999/-",
//       title: "FOR 5 YEARS",
//       duration: "1825",
//       subTitle: [
//         <div style={{color:"black", textAlign:"start"}}>
//         5-year plan for long-term dental practice needs with a lifetime referral bonus.</div>,

//           <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//           <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Flat 50% Discount on Your Subscription!</div>
//           </div>,

// <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
// <div><FaCheckCircle /></div> <div className="text-start ms-2">6 Month SEO (Search Engine Optimization)</div>
// </div>,
//         <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//         <div><FaCheckCircle /></div> <div className="text-start ms-2">1 Months SMO (Social Media Optimization)</div>
//       </div>,

//             <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//             <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">1 Premium Video to Elevate Your Brand!</div>
//             </div>,  
          
//           <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//                    <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">5-Page React Website for Appointment Booking (Includes 1 Year of Free Maintenance)</div>
//                  </div>,

          
//   <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//   <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">Get 1 Year AMC Absolutely Free! 
//     <br/>AMC of ₹1199/- Applicable from the 2nd Year!</div>
//   </div>,
//   <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//   <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards Forever!</div>
// </div>,
//       ],
//       status: true,
//       name:"Dentalguru Lite",
//     },

//     {
//       price: "39,999/-",
//       finalPrice: "99,999/-",
//       title: "LIFETIME",
//       duration: "5000",
//       subTitle: [
//               <div style={{color:"black", textAlign:"start"}}>
//               Lifetime plan with all-inclusive benefits for an extended period.</div>,

//                 <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//                 <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Flat 50% Discount on Your Subscription!</div>
//                 </div>,              
//                 <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//                          <div><FaCheckCircle /></div> <div className="text-start ms-2">3 Months SMM (Social Media Marketing)</div>
//                        </div>,
//                        <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//                        <div><FaCheckCircle /></div> <div className="text-start ms-2">3 Months SMO (Social Media Optimization)</div>
//                      </div>,
//                                        <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//                                        <div className="mt-1"><FaCheckCircle /></div> <div className="text-start ms-2">1 Premium Video to Elevate Your Brand!</div>
//                                        </div>, 
//                      <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//                      <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">5-Page React Website for Appointment Booking (Includes 1 Year of Free Maintenance)</div>
//                    </div>,
                
//         <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//         <div className="mt-3"><FaCheckCircle /></div> <div className="text-start ms-2">Get 1 Year AMC Absolutely Free!
//           <br/>AMC of ₹1199/- Applicable from the 2nd Year!</div>
//         </div>,
//         <div style={{ color: "#008000", fontSize: "1rem", display:"flex", fontWeight:"200"}}>
//         <div className="mt-2"><FaCheckCircle /></div> <div className="text-start ms-2">Lifetime Referral Bonus – Earn Rewards Forever!</div>
//       </div>,
//             ],         
//       status: true,
//       name:"Dentalguru Lite",
//     },
    
  ];
 

  const proceedToPayment = (selectedPlan) => {
    const { subTitle, ...rest } = selectedPlan;
  
    const plainSubTitle = subTitle.map((item) => {
      if (typeof item === "string") return item; 
      if (item.props?.children) {

        return Array.isArray(item.props.children)
          ? item.props.children.join(" ")
          : item.props.children;
      }
      return "";
    });
  
    // Navigate with only serializable data
    navigate('/payment', {
      state: {
        cart: [{ ...rest, subTitle: plainSubTitle }], 
        total: parseFloat(selectedPlan.price.replace(/,/g, '')), 
      },
    });
  };

  useEffect(() => {
    AOS.init({
      once: false,
    });
  });
  return (
    <>
      <Container>
        <Helmet>
          <title>Best Dental Clinic Management Software in India</title>
          <meta
            name="description"
            content="Explore DentalGuru's premier dental clinic management software tailored for Indian practices and dentists. Manage appointments, records, and patient care seamlessly."
          />
          <link
            rel="canonical"
            href="https://dentalguru.software/Best-Dental-Clinic-Management-Software"
          />
        </Helmet>

        <Navbar />

        <section
          className="bg-home bg-primary d-flex align-items-center"
          id="home"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                <div className="title-heading margin-top-100">
                  <h1 className="heading text-white title-dark mt-5">
                    Best Dental Clinic Management Software
                  </h1>

                  <Link
                    to="#!"
                    onClick={() => setOpen(true)}
                    className="play-btn border border-light mt-4 lightbox"
                  >
                    <FiPlay className="fea icon-ex-md text-white title-dark" />
                  </Link>
                  <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="y9mB8RZxwwQ"
                    onClose={() => setOpen(false)}
                  />
                </div>

                <div className="home-dashboard mb-lg-5">
                  <img src={lapy} alt="" className="img-fluid" />
                </div>

                <img
                  src={square}
                  className="img-fluid rounded-pill position-absolute top-0 start-50 translate-middle-x avatar avatar-md-md zoom-in-out z-index-0"
                  alt=""
                />

                <img
                  src={square}
                  className="img-fluid rounded-pill bg-image-position avatar avatar-md-md mover-2 z-index-0"
                  alt=""
                />
                <img
                  src={square}
                  className="img-fluid rounded-md avatar avatar-md-md bg-image-position-2 spin-anything z-index-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* <HeroOne /> */}

        <section className="sections mt-0  overflow-hidden" id="features">
          <div className="container">
            <div className="row">
              {featureData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="d-flex features feature-primary">
                      <div className="feature-icon rounded text-center">
                        <Icon className="icon  h4 mb-0" />
                      </div>
                      <div className="flex-1 ms-4">
                        <h5 className="mt-0">{item.title}</h5>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <AboutOne /> */}

          {/* Start Resepnist Section */}
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-5">
                <div className="app-feature-shape-left position-relative">
                  <div className="text-center text-md-start">
                    <img src={Resepnist} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
                <div className="section-title">
                  <h2 className="title mb-3">
                    We Design Top-Tier Receptionist Applications For Dental
                    Clinics That Elevate The Standard Of Excellence.
                  </h2>
                  <p className="para-desc text-muted">
                    Introducing our Receptionist Module, a meticulously designed
                    solution to revolutionize your dental clinic's front desk
                    operations. Seamlessly handle appointment bookings, patient
                    registrations, and doctor schedules with unparalleled ease.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <AiOutlineCheckCircle className="align-middle" />
                      </span>
                      Effortless Appointment Booking
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <AiOutlineCheckCircle className="align-middle" />
                      </span>
                      Maintain Patient Profiles
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <AiOutlineCheckCircle className="align-middle" />
                      </span>
                      Generate Bills
                    </li>
                    <li className="mb-1">
                      <span className="text-primary h5 me-2">
                        <AiOutlineCheckCircle className="align-middle" />
                      </span>
                      Manage Inquiries
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link
                      to="/page-contact-one"
                      className="btn btn-primary shimmer-effect"
                    >
                      Book A Demo <MdKeyboardArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Of Resepnist  Section*/}

          {/* Start Doctor Section */}
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
                <div className="section-title">
                  <h2 className="title mb-3">
                    We Pioneer Game-Changing Dental Software, Setting New
                    Standards In Excellence.
                  </h2>
                  <p className="para-desc text-muted">
                    Experience the holistic care approach of our Doctor Module
                    tailored for both adults and children in your Dental
                    Software. Begin with a comprehensive patient examination,
                    seamlessly transitioning to handling security deposits and
                    payments. Whether it's a single dental procedure or multiple
                    treatments, our module caters to diverse needs, suggesting
                    appropriate medications and providing detailed treatment
                    plans. Elevate patient care with our all-inclusive dental
                    solution.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/page-contact-one"
                      className="btn btn-primary shimmer-effect"
                    >
                      Book A Demo <MdKeyboardArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 order-1 order-md-2">
                <div className="app-feature-shape-right position-relative">
                  <div className="text-center text-md-end">
                    <img src={Doctor} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Of Doctor Section*/}
        </section>

        {/* {key Feature for mini dentalGuru } */}
        <section className=" gray-bg ">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h2 className="d-flex justify-content-center ms-2 mt-5">
                  Key Features of DentalGuru Lite
                </h2>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div data-aos="flip-down" data-aos-duration="2000">
                  <div
                    class="card py-3 rounded-pill mt-md-4 mt-4"
                    style={{ backgroundColor: "#2A53C3", color: "#fff" }}
                  >
                    <h4 class="card-text text-center">
                      {/* Multi-Branch Management */}
                      Patient Appointment
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div data-aos="flip-down" data-aos-duration="2000">
                  <div
                    class="card py-3 rounded-pill mt-md-4 mt-4"
                    style={{ backgroundColor: "#2A53C3", color: "#fff" }}
                  >
                    <h4 class="card-text text-center">Smart Prescription</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div data-aos="flip-down" data-aos-duration="2000">
                  <div
                    class="card py-3 rounded-pill mt-md-4 mt-4"
                    style={{ backgroundColor: "#2A53C3", color: "#fff" }}
                  >
                    <h4 class="card-text text-center">Account Management </h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div data-aos="flip-down" data-aos-duration="2000">
                  <div
                    class="card py-3 rounded-pill mt-md-4 mt-4"
                    style={{ backgroundColor: "#2A53C3", color: "#fff" }}
                  >
                    <h4 class="card-text text-center">
                      {/* Staff Management */}
                      Patient Data Management
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div data-aos="flip-up" data-aos-duration="2000">
                  <div
                    class="card py-3 rounded-pill mt-md-4 mt-4"
                    style={{ backgroundColor: "#2A53C3", color: "#fff" }}
                  >
                    <h4 class="card-text text-center">
                      {/* Account Management */}
                      Data Protection
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div data-aos="flip-down" data-aos-duration="2000">
                  <div
                    class="card py-3 rounded-pill mt-md-4 mt-4"
                    style={{ backgroundColor: "#2A53C3", color: "#fff" }}
                  >
                    <h4 class="card-text text-center">Customization</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section " id="pricing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Our Plans</h4> 
                  <p className="text-muted para-desc mx-auto mb-0 h5">
                  We provide everything you need to generate awareness, drive traffic, and connect better.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {plan.map((item, index) => {
                return (
                  <div
                    className="col-lg-6 col-md-6 col-12 mt-4 pt-2 "
                    key={index}
                  >
                    <div className="card pricing price-two rounded text-center border-0 shadow px-4 py-5 bg">
                    {item.title !== "" && (
            <img
              className="offer position-absolute"
              src={offer}
              style={{ width: "70px" }}
            />
          )}
                      <div className="d-flex justify-content-center mb-0">
                        <span className="mb-0 mt-2">₹</span>
                        <span className="price h1 mb-0">{item.price}</span>
                      </div>
                      {/* <div className="d-flex justify-content-center mb-0 oldprice">
                        <span className="mb-0 mt-2">₹</span>
                        <span className="price h1 mb-0 ">
                          {item.finalPrice}
                        </span>
                      </div> */}
                      {item.title !== "" && (
            <div className="d-flex justify-content-center mb-0 oldprice">
              <span className="mb-0 mt-2">₹</span>
              <span className="price h1 mb-0">
                {item.finalPrice}
              </span>
            </div>
          )}
                      <div className="p-2 bg-soft-primary h6 mx-5 rounded-lg">
                        <span className="text-uppercase">{item.title}</span>
                      </div>

                      <ul className="list-unstyled mb-0 mt-4 h5">
                        {item.subTitle.map((el, index) => {
                          return (
                            <li className="text-muted mt-3" key={index}>
                              {el}
                            </li>
                          );
                        })}
                      </ul>

                        <div className="startButton pt-2">
                        <button
                          onClick={() => proceedToPayment(item)}
                          className="btn btn-primary"
                        >
                           Checkout <IoArrowRedoOutline className="fs-5"/>
                        </button>
 
                        {isSmallScreen ? (
                        <Link to="tel:+91-7440992424">
                          <button className="btn btn-info ms-2 dflex">
                            <FiPhoneCall /> Contact Us
                          </button>
                        </Link>
                      ) : (
                        <Link to="/page-contact-one">
                          <button className="btn btn-info ms-2 flex">
                            <FiPhoneCall /> Contact Us
                          </button>
                        </Link>
                      )}
                      </div>
                      </div>
                    </div>
                );
              })}
            </div>

            <div className="col-lg-12">
              <p className="text-center mt-5">* <b>Note :-</b> An additional 18% GST will be applicable on all plans. *</p>
            </div>
          </div>

          <section>
                    <div className="container mt-5">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-6 col-xl-12 mt-5">
                          <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/y9mB8RZxwwQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                      <a href="https://dentalguru-lite-trial.dentalguru.software/"
                         target="_blank"
                         className="btn btn-success shimmer-effect">
                         Try it yourself <MdKeyboardArrowRight />
                      </a>
                      </div>
                    </div>
                  </section>

          <div className="container mt-100 mt-60 mb-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                  <h4 className="title mb-3">Frequently Asked Questions</h4>
                  <p className="text-muted mx-auto para-desc mb-0">
                    Discover the transformative magic of DentalGuru, simple
                    designs that elevate your Dental Hospital. Learn more today!
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 mt-4 pt-2">
                <img src={faqs} className="img-fluid" alt="" />
              </div>

              <div className="col-md-6 mt-4 pt-2">
                <div className="accordion" id="buyingquestion">
                  {accordionData2.map((item, index) => (
                    <div className="accordion-item rounded mt-3" key={index}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`${
                            activeIndex === item.id
                              ? "active accordion-button fw-normal border-0 bg-light rounded shadow"
                              : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"
                          }`}
                          onClick={() =>
                            setActiveIndex(
                              activeIndex === item.id ? null : item.id
                            )
                          }
                        >
                          {item.title}
                        </button>
                      </h2>
                      {activeIndex === item.id && (
                        <div
                          id={`collapse${item.id}`}
                          className="accordion-collapse border-0 collapse show"
                        >
                          <div className="accordion-body text-muted bg-white">
                            <p>{item.desc}</p>
                            {item.features && (
                              <ul>
                                {item.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <MiniFooter /> */}
        <Footer />
        <Call />
        <Whatsup />
        <ScrollTop />
      </Container>
    </>
  );
}

const Container = styled.div`
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .shimmer-effect {
    animation: shimmer 12s linear infinite;
    background: linear-gradient(
      to right,
      #2a52c3 0%,
      #6a89cc 20%,
      #2a52c3 40%,
      #2a52c3 100%
    );
    background-size: 200% 100%;
  }

  .oldprice {
    position: relative;
    display: inline-block;
    color: red;
  }
  .oldprice:: before {
    content: "";
    position: absolute;
    top: 65%;
    left: 20%;
    width: 45%;
    height: 3px; /* Adjust the thickness of the line */
    background: blue; /* Adjust the color of the line */
    transform: rotate(-10deg);
    transform-origin: left center;
    border-radius: 1px;
  }

  .card {
    position: relative; /* Ensure the card is positioned relative for absolute positioning of the image */
  }
  .pricing {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  .startButton {
    margin-bottom: 1.5rem; /* mb-5 equivalent */
  }

  .offer {
    top: 10px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
    width: 100px; /* Adjust as needed */
    height: auto; /* Maintain aspect ratio */
    z-index: 10; /* Ensure it appears on top of other elements */
  }

  .bg {
    background-image: url("../assets/images/brands/offer50.png");
    background-size: cover;
  }
    .flex {
  
    @media screen and (min-width: 767px) and (max-width: 1199px) {
        margin-top: 18px;
    }
}
    .dflex {
    @media screen and (min-width: 200px) and (max-width: 361px) {
    margin-top: 16px;
}
    }
`;


