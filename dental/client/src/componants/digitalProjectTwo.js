import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/business/about01.jpg"

import {FaRegComment} from "../assets/icons/vander"

export default function DigitalProjectTwo(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
            <>
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-primary fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have digital project? <br/> Let's talk.</h1>
                            <div className="mt-4 pt-2">
                                <Link to="#" onClick={handleShow} className="btn btn-pills btn-primary"><span className="h5 mb-0 me-1"><FaRegComment/></span> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
            <Modal.Body>
                <div className="container-fluid px-0">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-6 col-md-5">
                            <img src={aboutImg} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-md-7">
                            <form className="ms-md-3 ms-0 mt-md-0 mt-3">
                                <p id="error-msg" className="mb-0"></p>
                                <div id="simple-msg"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control rounded-0" placeholder="Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control rounded-0" placeholder="Email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Subject</label>
                                            <input name="subject" id="subject" className="form-control rounded-0" placeholder="subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control rounded-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary rounded-0">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
            </>
    )
}