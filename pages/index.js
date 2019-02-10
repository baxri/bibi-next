import React, { Component } from 'react'
import Link from 'next/link'

import Layout from "../layouts/Layout";
import Socials from "../components/Socials";

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <section className="home-banner-area">
                    <div className="container">
                        <div className="row fullscreen">
                            <div className="banner-content col-lg-6 col-md-12 justify-content-center d-flex flex-direction-column align-items-center ">
                                <div>
                                    <div className="me wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                                        I do it because it's fun and, apparently, I'm pretty good at it
                                </div>
                                    <h1 className="wow fadeInDown" data-wow-duration="1s">GEORGE BIBILASHVILI</h1>
                                    <div className="designation mb-70 wow fadeInDown" data-wow-duration="1s" >
                                        Full Stack
						        <span className="designer"> Web Developer</span>
                                        <p className="skills">Laravel, NodeJS, React, React Native, Redux, GraphQL </p>
                                        <Socials align="start" />
                                    </div>

                                    <Link href="/#i-am-goot-at">
                                        <a href="#i-am-goot-at" className="primary-btn" data-text="I am good at">
                                            <span>I am good at</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="banner-img col-lg-6 col-md-6 align-self-end" >
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
                    /* border: 1px solid red; */
                    padding-top: 15%;
                }

                .banner-content{
                    height: 100vh;
                    /* border: 1px solid red; */
                    padding-top: 50px;
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
