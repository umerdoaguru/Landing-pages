import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  const [selected, setSelected] = useState(null);

  const handleToggle = (id) => {
    setSelected(selected === id ? null : id);
  };
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-primary text-white text-center py-5 position-relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold animate_animated animate_fadeIn">
            Simplify Your Dental Clinic Management
          </h1>
          <p className="lead animate_animated animate_fadeInUp">
            Streamline operations and enhance patient care with DentalGuru.
          </p>
          <button className="btn btn-light btn-lg mt-3 animate_animated animate_zoomIn">
            Learn More
          </button>
        </div>
      </div>


      <div className="container py-5">
      {/* <section className="row mb-5">
  <div className="col-12">
    <img
      src="/image.png"
      alt="Descriptive text"
      className="img-fluid w-100"
      style={{
        height: "800px",
        objectFit: "cover", 
      }}
    />
  </div>
</section> */}
        <section className="row mb-5">
          <div className="col-lg-8">
            <article>
              <h2 className="fw-bold mb-4">
                Centralized Patient Records Management
              </h2>
              <p>
                One of the biggest challenges dental clinics face is organizing
                and maintaining accurate patient records. Modern software tools
                like DentalGuru allow you to store all patient information,
                including personal details, medical history, and treatment
                plans, in one secure, centralized platform. This eliminates the
                need for physical files and ensures that all critical data is
                easily accessible.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Retrieve patient data instantly during consultations.
                </li>
                <li className="list-group-item">
                  Ensure data security with encrypted storage.
                </li>
                <li className="list-group-item">
                  Minimize errors caused by manual data entry.
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                Effortless Appointment Scheduling
              </h2>
              <p>
                Managing appointments manually can lead to double bookings,
                missed slots, and patient dissatisfaction. The best practice
                management software for dentists, like DentalGuru, offers
                intuitive scheduling features that make it easy to book,
                reschedule, or cancel appointments. These tools often come with
                automated reminders, ensuring that patients never miss their
                visits.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  A visual calendar interface for quick scheduling.
                </li>
                <li className="list-group-item">
                  SMS and email reminders to reduce no-shows.
                </li>
                <li className="list-group-item">
                  Integration with online booking systems for patient
                  convenience.
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                Streamlined Billing and Payments
              </h2>
              <p>
                Billing and payment processes can be time-consuming and prone to
                errors. Dental management software like DentalGuru simplifies
                these tasks by automating invoice generation, tracking payments,
                and maintaining financial records.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Generate professional invoices in seconds.
                </li>
                <li className="list-group-item">
                  Accept multiple payment modes, including digital payments.
                </li>
                <li className="list-group-item">
                  Track outstanding payments and send reminders.
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                Enhanced Communication with Patients
              </h2>
              <p>
                Modern dental software tools like DentalGuru include built-in
                communication features such as email, SMS, and chat systems.
                These allow you to send appointment reminders, follow-up
                messages, and post-treatment care instructions with ease.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Strengthen patient relationships.
                </li>
                <li className="list-group-item">
                  Provide timely updates and care instructions.
                </li>
                <li className="list-group-item">
                  Handle patient queries more efficiently.
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                Powerful Analytics and Reporting
              </h2>
              <p>
                The best dental clinic management software in India, such as
                DentalGuru, offers robust analytics and reporting tools that
                provide insights into patient demographics, appointment trends,
                revenue streams, and more.
              </p>
            </article>
          </div>

          <aside className="col-lg-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h3 className="fw-bold">Why DentalGuru?</h3>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  Centralized Patient Management
                </li>
                <li className="list-group-item">
                  Efficient Appointment Scheduling
                </li>
                <li className="list-group-item">
                  Streamlined Billing and Payments
                </li>
                <li className="list-group-item">
                  Enhanced Communication Tools
                </li>
                <li className="list-group-item">Powerful Reporting Features</li>
              </ul>
            </div>

            <div className="mt-5">
              <h3 className="fw-bold">FAQs</h3>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button onClick={() => handleToggle(1)}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the best dental clinic software for small
                      practices?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    {selected === 1 && (
                 <div className="accordion-body">
                 DentalGuru is an excellent choice for small practices due
                 to its affordability and robust features.
               </div>
                )}            
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button onClick={() => handleToggle(2)}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Can dental management software help reduce no-shows?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    {selected === 2 && (
                 <div className="accordion-body">
                 Yes, automated reminders and online booking systems
                 significantly reduce appointment no-shows.
               </div>
                )}            
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button onClick={() => handleToggle(3)}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Is dental software secure for storing patient data?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    {selected === 3 && (
                 <div className="accordion-body">
                 Most dental software tools, including DentalGuru, use
                 encrypted storage to ensure data security.
               </div>
                )}            
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button onClick={() => handleToggle(4)}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Does dental management software integrate with other
                      tools?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    {selected === 4 && (
                 <div className="accordion-body">
                 Yes, many tools integrate with accounting software, CRM
                 systems, and online booking platforms.
               </div>
                )}            
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button onClick={() => handleToggle(5)}
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How can analytics improve my dental practice?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    {selected === 5 && (
                 <div className="accordion-body">
                 Analytics provide actionable insights into your clinic’s
                 performance, helping you make data-driven decisions.
               </div>
                )}            
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4 border-top bg-dark text-white">
       <p className="mb-0">
                         <Link
                           to="/Admin-Login"
                           style={{ color: "#Adbcbd", textDecoration: "none" }}
                         >
                           © {new Date().getFullYear()} Design & Develop with{" "}
                         </Link>
                         <i className="mdi mdi-heart text-danger"></i> by{" "}
                         <Link
                           to="https://doaguru.com/"
                           target="_blank"
                           className="text-reset"
                         >
                           DOAGuru InfoSystems
                         </Link>
                         .
                       </p>
      </footer>
    </div>
  );
};

export default Blog;

// import React, { useState } from "react";

// const FAQDropdown = () => {
//   const [selected, setSelected] = useState(null);

//   const handleToggle = (id) => {
//     setSelected(selected === id ? null : id);
//   };

//   return (
//     <div>
//       <h3>FAQs</h3>
//       <div className="faq-item">
//         <button onClick={() => handleToggle(1)}>
//           What is the best dental clinic software for small practices?
//         </button>
//         {selected === 1 && (
//           <div className="answer">
//             DentalGuru is an excellent choice for small practices due to its
//             affordability and robust features.
//           </div>
//         )}
//       </div>

//       <div className="faq-item">
//         <button onClick={() => handleToggle(2)}>
//           Can dental management software help reduce no-shows?
//         </button>
//         {selected === 2 && (
//           <div className="answer">
//             Yes, automated reminders and online booking systems significantly
//             reduce appointment no-shows.
//           </div>
//         )}
//       </div>

//       {/* Add more FAQs as needed */}
//     </div>
//   );
// };

// export default FAQDropdown;