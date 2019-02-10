import React, { Component } from 'react'
import Router from "next/router";
import NProgress from "nprogress";

import Contact from "../components/Contact";
import Header from "../components/Header";
import GoodAt from "../components/GoodAt";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


class Layout extends Component {
    render() {

        const { children } = this.props;

        return (
            <div>

                {/* <div className="preloader-area">
                    <div className="loader-box">
                        <div className="loader"></div>
                    </div>
                </div> */}

                <Header />

                <div className="page">
                    {children}
                </div>

                <GoodAt />
                <Contact />


                <style jsx>{`
                    .page{
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                
                `}</style>
            </div>
        )
    }
}

export default Layout;
