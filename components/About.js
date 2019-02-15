import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="about-area section-gap" id="about-me">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            {/* <div className="col-lg-6 about-left">
                                <img className="img-fluid" src="/static/img/about-img.jpg" alt="" />
                            </div> */}
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title">
                                    <h2>about myselt</h2>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        For the past 8 years, I've been building server-side applications (API),
                                        client-side webs, developing application databases, for businesses.
                                        I've done this as an employee, and a freelancer. I've also worked on some super-secret projects and big brands.
                                        I'd tell you, but then I'd have to kill you...,
                                        My favorite stacks are NGINX, PHP7+, MYSQL, LARAVEL,
                                        NODEJS REACTJS, REACTNATIVE.
                                       </p>
                                    <p>
                                        I do it because it's fun and, apparently, I'm pretty good at it.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
