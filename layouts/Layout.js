import React, { Component } from 'react'
import Link from 'next/link'
import Router from "next/router";
import { withRouter } from 'next/router'
import NProgress from "nprogress";

import Contact from "../components/Contact";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


class Layout extends Component {
    render() {

        const { router: { pathname }, children } = this.props;

        return (
            <div>


                {/* <div className="preloader-area">
                    <div className="loader-box">
                        <div className="loader"></div>
                    </div>
                </div> */}

                <header id="header">
                    <div className="container main-menu">
                        <div className="row align-items-center d-flex">
                            <div id="logo">
                                <Link href="/">
                                    <a href="#">

                                        {/* <img src="/static/img/logo.png" alt="" title="" /> */}
                                        <h1><span className="logo-b">B</span>IBI</h1>
                                    </a>
                                </Link>
                            </div>
                            <nav id="nav-menu-container">
                                <ul className="nav-menu">
                                    <li className="">
                                        <Link href="/" >
                                            <a className={pathname === '/' ? 'active' : ''} href="#">Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a href="#" className={pathname === '/about' ? 'active' : ''}>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/job-history">
                                            <a href="#" className={pathname === '/job-history' ? 'active' : ''}>Job History</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/latest-works">
                                            <a href="#" className={pathname === '/latest-works' ? 'active' : ''}>Latest Works</a>
                                        </Link>
                                    </li>


                                    {/* <li className="menu-has-children"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="elements.html">Elements</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="services.html">Service</a></li>
                                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-has-children"><a href="">Blog</a>
                                        <ul>
                                            <li><a href="blog-home.html">Blog Home</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className="page">
                    {children}
                </div>

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
                </section>


                <Contact />


                <style jsx>{`

                    .logo-b{
                        color: #e45447;
                    }

                    .page{
                        
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                
                `}</style>
            </div>
        )
    }
}

export default withRouter(Layout);
