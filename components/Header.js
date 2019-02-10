import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'


class Header extends Component {

    render() {

        const { router: { pathname }, children } = this.props;

        return (
            <header id="header">
                <div className="container main-menu">
                    <div className="row align-items-center d-flex">
                        <div id="logo">
                            <Link href="/">
                                <a href="#">
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
                                <li>
                                    <Link href="#contact">
                                        <a href="#contact">Contact</a>
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


                <style jsx >{`

                    .logo-b{
                        color: #e45447;
                    }
                
                `}</style>
            </header>
        )
    }
}


export default withRouter(Header);
