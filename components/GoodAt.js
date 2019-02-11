import React, { Component } from 'react'

export default class GoodAt extends Component {
    render() {
        return (
            <section className="service-area section-gap" id="i-am-goot-at">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>I am good at</h2>
                                <p>I tried a bunch of technologies to build mobile and web
                            applications and make my clients happy but for now, my current stack is:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service wow fadeInUp" data-wow-duration="1s">
                                <span className="lnr lnr-screen"></span>
                                <h4>
                                    <span>Web</span> React/Next.js
            </h4>
                                <p>My favorite stack for building web applications are PHP7+, Laravel, Nodejs, Next.js, Reactjs.</p><br />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                                <span className="lnr lnr-laptop-phone"></span>
                                <h4><span>Mobile</span> React Native
            </h4>
                                <p>For building mobile applications I am using React Native, Redux, GraphQL and Laravel or Nodejs for API.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                <span className="lnr lnr-database"></span>
                                <h4><span>Database</span>Mysql/MongoDB
            </h4>
                                <p>My favorites and mostly used databases are MySQL and MongoDB</p><br /><br />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                <span className="lnr lnr-chart-bars"></span>
                                <h4><span>Server Api</span> Laravel/Nodejs
            </h4>
                                <p>Most of the applications require server-side API, so for the microservices I am using PHP  Laravel framework and Nodejs </p>
                            </div>
                        </div>
                    </div>
                </div>


                <style jsx>{`
                
                    .service-area{
                        /* border: 1px solid red; */
                        /* margin-top: 60px; */
                    }

                `}</style>
            </section>
        )
    }
}
