import React from "react";

import Client1 from "../assets/images/client/01.jpg"
import Client2 from "../assets/images/client/02.jpg"
import Client3 from "../assets/images/client/03.jpg"

import Carousel from 'react-bootstrap/Carousel';

export default function ClientsThree(){
    const clientData = [
        {
            image:Client1,
            title:`“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.”`
        },
        {
            image:Client2,
            title:`“Our task must be to free ourselvesbywideningour circle of compassion to embraceall living creatures Integer varius lacus non magna tempor congue natuasrethe whole its beauty.”`
        },
        {
            image:Client3,
            title:`“I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.”`
        },
    ]
    return(
        <div className="row">
            <div className="col-12">
                <div className="testi-carousel">
                <Carousel indicators={false}>
                    {clientData.map((item, index)=>{
                        return(
                        <Carousel.Item  key={index}>
                            <div className="text-center">
                                <i className="mdi mdi-format-quote-open mdi-48px text-primary"></i>
                            </div>
                            <div className="testi-box mx-auto text-center mt-4">
                                <h5 className="fw-normal mt-3">{item.title}</h5>
                            </div>
                            <span className="d-flex justify-content-center align-items-center mt-4">
                                <img src={item.image} alt="" className="avatar avatar-md-md rounded-pill"/>
                            </span>
                        </Carousel.Item>
                        )
                    })}
                </Carousel>
                </div>
            </div>
        </div>
    )
}