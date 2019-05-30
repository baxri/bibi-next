import React, { Component } from 'react'
import Link from 'next/link';

import Socials from "./Socials";
import MyStatus from "./MyStatus";

export default class Welcome extends Component {
    
    
    render() {
        return (
            <div>
                <section className="home-banner-area">
                    <div className="container">
                        <div className="row fullscreen">
                            <div className="banner-content col-lg-6 col-md-12 justify-content-center d-flex flex-direction-column align-items-center ">
                                <div>
                                    <div className="wow fadeInDown"> <MyStatus /></div>
                                    <h1 className="wow fadeInDown" data-wow-duration="1s">GEORGE <span className="bibi">BIBI</span>LASHVILI</h1>
                                    <div className="designation mb-70 wow fadeInDown" data-wow-duration="1s" >
                                        Full Stack
						        <span className="designer"> Web Developer</span>
                                        <p className="skills">Laravel, NodeJS, React, NextJS React Native, Redux </p>
                                        <Socials align="start" />
                                    </div>
                                    <Link href="/latest-works">
                                        <a href="latest-works" className="primary-btn" data-text="Latest Works">
                                            <span>Latest Works</span>
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
                    padding-top: 15%;
                }

                .banner-content{
                     height: 100vh; 
                }

                .avatar{
                    border-radius: 200px;
                    bottom: 50px;
                    margin-right: 180px;
                    border: 7px solid white;
                    max-width: 250px;
                }

                .skills{
                    font-size: 12pt;
                }

                .bibi{
                    color: #e45447;
                }

                @media only screen and (max-width: 768px) {
                    .banner-content h1{
                        font-size: 20pt;
                        margin-top: 0px;
                    }

                    .banner-content p{
                        line-height: 20px;
                    }
                }
            
            `}</style>
            </div>
        )
    }
}
