import React from "react";
import { Link } from "react-router-dom";
import {FiPhoneCall, FiMail,FiMapPin} from '../assets/icons/vander'

export default function GetInTuchFour(){
    return(
        <section className="section" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="section-title mb-4">
                        <h4 className="title mb-4">Contact Us</h4>
                        <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="d-flex features feature-primary">
                                <div className="feature-icon rounded  text-center">
                                    <FiPhoneCall className="d-block h3 mb-0 icon"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h6 className="mb-1">Phone</h6>
                                    <Link to="tel:+152534-468-854" className="link">+152 534-468-854</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 mt-4">
                            <div className="d-flex features feature-primary">
                                <div className="feature-icon rounded text-center">
                                    <FiMail className="d-block mb-0 icon"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h6 className="mb-1">Email</h6>
                                    <Link to="mailto:contact@example.com" className="link">contact@example.com</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 mt-4">
                            <div className="d-flex features feature-primary">
                                <div className="feature-icon rounded  text-center">
                                    <FiMapPin className="d-block h3 mb-0 icon"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h6 className="mb-1">Location</h6>
                                    <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="lightbox text-primary" data-type="iframe" data-group="iframe" data-width="1024px" data-height="576px">View on Google map</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="p-4 rounded shadow">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                    </div> 
                                </div>

                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Subject</label>
                                        <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-grid">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}