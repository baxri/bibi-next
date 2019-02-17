import React, { Component } from 'react'
import Router, { withRouter } from "next/router";
import NProgress from "nprogress";
import ReactGA from 'react-ga';

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

    componentWillMount() {
        const { router: { pathname } } = this.props;
        ReactGA.initialize('UA-115548985-1', {
            debug: true,
        });
        ReactGA.pageview(pathname);
    }

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

                    @media only screen and (max-width: 991px) {
                       .page{
                           padding-top: 50px;
                       }
                    }
                
                `}</style>




            </div>
        )
    }
}

export default withRouter(Layout);
