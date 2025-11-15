import React from "react";

export default function ContactForm({ sectionTitle, sectionTitleUp }) {
  return (
    <div className="cs_contact_form cs_style_2 cs_radius_30">
      <div className="row">
        <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
        <Spacing md="10" lg="10" />
        <div className="col-lg-6">
          <label className="d-flex justify-content-start cs_input_label cs_heading_color">
            Full Name
          </label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Enter Your Name"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className=" d-flex justify-content-start cs_input_label cs_heading_color">
            Email
          </label>
          <input
            type="email"
            className="cs_form_field"
            placeholder="Enter Your Email"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="d-flex justify-content-start cs_input_label cs_heading_color">
            Subject
          </label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Your subject"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="d-flex justify-content-start cs_input_label cs_heading_color">
            Message
          </label>
          <textarea
            cols={30}
            rows={3}
            className="cs_form_field"
            placeholder="Write something..."
            defaultValue={""}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <div className="" />
          <button className="cs_btn cs_style_1">
            <span>Submit</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
