import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../assets/images/blog/1.jpg"
import blog2 from "../assets/images/blog/2.jpg"
import blog3 from "../assets/images/blog/3.jpg"

export default function BlogSidebar(){
    const recentPost = [
        {
            image:blog1,
            title:'Consultant Business',
            date:'13th March 2023'
        },
        {
            image:blog2,
            title:'Grow Your Business',
            date:'5th May 2023'
        },
        {
            image:blog3,
            title:'Look On The Glorious Balance',
            date:'19th June 2023'
        },
    ]
    return(
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card bg-white p-4 rounded shadow sticky-bar">
                <div className="widget">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Search</h6>
                    <div id="search2" className="widget-search mt-4 mb-0">
                        <form role="search" method="get" id="searchform2" className="searchform">
                            <div>
                                <input type="text" className="border rounded" name="s" id="s2" placeholder="Search Keywords..."/>
                                <input type="submit" id="searchsubmit2" value="Search"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="widget mt-4 pt-2">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
                    <div className="mt-4">
                        {recentPost.map((item,index) =>{
                            return(
                                <div className="d-flex align-items-center mt-3" key={index}>
                                    <img src={item.image} className="avatar avatar-small rounded" style={{width:'auto'}} alt=""/>
                                    <div className="flex-1 ms-3">
                                        <Link to="/blog-standard-post" className="d-block widget-post-title text-dark">{item.title}</Link>
                                        <span className="text-muted">{item.date}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="widget mt-4 pt-2 text-center">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
                    <div className="tagcloud mt-4">
                        <Link to="#" className="rounded">Business</Link>
                        <Link to="#" className="rounded">Finance</Link>
                        <Link to="#" className="rounded">Marketing</Link>
                        <Link to="#" className="rounded">Fashion</Link>
                        <Link to="#" className="rounded">Bride</Link>
                        <Link to="#" className="rounded">Lifestyle</Link>
                        <Link to="#" className="rounded">Travel</Link>
                        <Link to="#" className="rounded">Beauty</Link>
                        <Link to="#" className="rounded">Video</Link>
                        <Link to="#" className="rounded">Audio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}