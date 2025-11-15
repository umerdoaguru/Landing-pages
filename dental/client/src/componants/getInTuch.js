import React from "react";
import contact from "../assets/images/contact.svg"

export default function GetInTuch(){
    return(
        <section className="section" id="contact">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                    <div className="card shadow rounded border-0">
                        <div className="card-body py-5">
                            <h4 className="card-title">Get In Touch !</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="custom-form mt-5">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                            </div> 
                                        </div>
        
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-normal">Subject</label>
                                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
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

                <div className="col-lg-6 col-md-6 order-1 order-md-2">
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <img src={contact} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
