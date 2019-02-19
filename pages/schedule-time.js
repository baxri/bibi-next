import React, { Component } from 'react'

import Layout from "../layouts/Layout";
import MyStatus from "../components/MyStatus";

export default class ScheduleTIme extends Component {
    render() {
        return (
            <Layout>
                <section className="about-area section-gap-top" id="schedule-time">
                    <div className="container" data-wow-duration="1s" >
                        <div className="row align-items-center justify-content-between">

                            <div className="col-lg-6 col-md-12 about-right">
                                <div className="section-title">
                                    <br />
                                    <h2>Schedule Time</h2>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p className="status">
                                        <strong>Current Activity</strong>
                                        <br />
                                        <br />
                                        <MyStatus animation={false} />
                                    </p>
                                    <hr />
                                    <p>If you want to build a business online we can have a word,
                                        just choose your time

                                        <br />
                                        <br />


                                        <a className="btn btn-danger btn-lg" href="https://calendly.com/george-bibilashvili/15min">15 MIN</a>
                                        &nbsp;
                                        <a className="btn btn-danger btn-lg" href="https://calendly.com/george-bibilashvili/30min">30 MIN</a>
                                        &nbsp;
                                        <a className="btn btn-danger btn-lg" href="https://calendly.com/george-bibilashvili/60min">60 MIN</a>

                                    </p>

                                    <strong>You are in the right place</strong>
                                </div>
                            </div>

                            <div className="col-lg-5 ">
                                <img className="img-fluid" src="/static/img/schedule-time.png" alt="" />
                            </div>

                        </div>
                    </div>
                </section>


                <style jsx>{`
                
                    .status{
                        color: #e45447;
                    }

                `}</style>
            </Layout>
        )
    }
}
