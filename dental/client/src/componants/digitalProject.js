import React,{useState} from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {FaRegComment} from "../assets/icons/vander"
export default function DigitalProject(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const  handleShow = () => setShow(true);
    return(
        <>
            <div className="container mt-100 mt-60" id="contact">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-muted fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have designing project? <br/> Let's talk.</h1>
                            <div className="mt-4 pt-2">
                                <Link to="#" onClick={handleShow} className="btn btn-pills btn-primary"><span className="h5 mb-0 me-1"><FaRegComment/></span> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                    show={show} onHide={handleClose}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                <Modal.Header closeButton>
                    <Modal.Title> 
                        <h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <p id="error-msg" className="mb-0"></p>
                        <div id="simple-msg"></div>
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
                </Modal.Body>
            </Modal>
        </>
    )
}