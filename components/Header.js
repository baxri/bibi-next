import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'


class Header extends Component {

    render() {

        const { router: { pathname }, children } = this.props;

        return (
            <header id="header">
                <div className="container main-menu">
                    <div className="header-wrapper row align-items-center d-flex justify-content-between justify-content-lg-start">

                        <div id="logo d-flex">
                            <Link href="/">
                                <a href="#">
                                    <h1><span className="logo-b">B</span>IBI</h1>
                                </a>
                            </Link>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-light d-flex">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" >
                                            <a className={pathname === '/' ? 'nav-link active' : 'nav-link'} href="#">Home </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about" >
                                            <a className={pathname === '/about' ? 'nav-link active' : 'nav-link'} href="#">about </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/job-history" >
                                            <a className={pathname === '/job-history' ? 'nav-link active' : 'nav-link'} href="#">job-history</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/latest-works" >
                                            <a className={pathname === '/latest-works' ? 'nav-link active' : 'nav-link'} href="#">latest-works</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        {/* <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="">
                                    <Link href="/" >
                                        <a className={pathname === '/' ? 'active' : ''} href="/">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a href="/about" className={pathname === '/about' ? 'active' : ''}>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/job-history">
                                        <a href="/job-history" className={pathname === '/job-history' ? 'active' : ''}>Job History</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/latest-works">
                                        <a href="/latest-works" className={pathname === '/latest-works' ? 'active' : ''}>Latest Works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact">
                                        <a href="#contact">Contact</a>
                                    </Link>
                                </li>
                    
                            </ul>
                        </nav> */}




                    </div>
                </div>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" >
                                <a className={pathname === '/' ? 'nav-link active' : 'nav-link'} href="#">Home </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" >
                                <a className={pathname === '/about' ? 'nav-link active' : 'nav-link'} href="#">about </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/job-history" >
                                <a className={pathname === '/job-history' ? 'nav-link active' : 'nav-link'} href="#">job-history</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/latest-works" >
                                <a className={pathname === '/latest-works' ? 'nav-link active' : 'nav-link'} href="#">latest-works</a>
                            </Link>
                        </li>
                    </ul>
                </div>


                <style jsx global>{`

                    .logo-b{
                        color: #e45447;
                    }

                    .header-wrapper{
                        // border: 1px solid red;
                    }

                    .navbar{
                        background-color: white !important;
                        margin-left: 70px;
                    }

                    .nav-link{
                        margin-left: 20px;
                        font-family: "Poppins", sans-serif !important;
                        padding: 0px;
                        color: #222222;
                        font-weight: 500;
                        font-size: 16px;
                        text-transform: capitalize;
                        outline: none;
                        
                    }
                
                `}</style>
            </header >
        )
    }
}


export default withRouter(Header);
