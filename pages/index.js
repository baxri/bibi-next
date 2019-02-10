import React, { Component } from 'react'

import Layout from "../layouts/Layout";

export default class Index extends Component {
    render() {
        return (
            <Layout>

                <section className="home-banner-area">
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center pt-100">
                            <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
                                <div className="me wow " data-wow-duration="1s" data-wow-delay="1.2s">It's me</div>
                                <h1 className="wow " data-wow-duration="1s" data-wow-delay="1.7s">GEORGE BIBILASHVILI</h1>
                                <div className="designation mb-70 wow " data-wow-duration="1s" data-wow-delay="2.1s">
                                    Full Stack
						        <span className="designer"> Web Developer</span>
                                    <p className="skills">Laravel, NodeJS, React, React Native, Redux, GraphQL </p>

                                </div>
                                <a href="#i-am-goot-at" className="primary-btn" data-text="I am good at">
                                    <span>I am good at</span>
                                </a>
                            </div>
                            <div className="banner-img col-lg-6 col-md-6 align-self-end">
                                {/* <img className="img-fluid" src="/static/img/banner-img.png" alt="" /> */}
                                <img className="img-fluid avatar" src="/static/img/me.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>



                <style jsx>{`

                .fullscreen{
                    height: 100vh;
                }

                .banner-img{
                    height: 100vh;
                    padding-top: 15%;
                }

                .banner-content{
                    height: 100vh;
                    padding-top: 15%;
                }

                .avatar{
                    border-radius: 200px;
                    bottom: 50px;
                    margin-right: 180px;
                    border: 7px solid white;
                    max-width: 225px;
                }

                .skills{
                    font-size: 12pt;
                }
            
            `}</style>
            </Layout>
        )
    }
}
