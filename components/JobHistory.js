import React, { Component } from 'react'

export default class JobHistory extends Component {
    render() {
        return (
            <section className="job-area section-gap-top section-gap-bottom-90">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Job History</h2>
                                <p>Here are the most recent Job positions, I hope it makes a little sense :)</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <a href="http://www.webmation.com" target="_blank">
                                <div className="single-job">
                                    <div className="top-sec d-flex justify-content-between">
                                        <div className="top-left">
                                            <h4>Senior Laravel/React Developer</h4>
                                            <p>WWW.WEBMATION.COM</p>
                                        </div>
                                        <div className="top-right">
                                            <a href="#" className="primary-btn dates" data-text="2019 - Present">
                                                <span>2019 - Present</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s">
                                        Developing one of the biggest SAAS platform in New York, with Laravel, NodeJS, React and GraphQL.
						      </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-6">
                            <a href="https://unipay.com/en" target="_blank">
                                <div className="single-job">
                                    <div className="top-sec d-flex justify-content-between">
                                        <div className="top-left">
                                            <h4>Senior Web Developer</h4>
                                            <p>WWW.UNIPAY.COM</p>
                                        </div>
                                        <div className="top-right">
                                            <a href="#" className="primary-btn dates" data-text="2016 - Present">
                                                <span>2016 - Present</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                        UniPAY offers a universal payment system. This is an online wallet but for only Georgian market.
                                        I am an API and Database developer, most of all working on business logic how to application should work,
                                        Database development and optimization, Writing web services and integrated payment systems.
						      </div>
                                </div>
                            </a>
                        </div>


                        <div className="col-lg-6">
                            <a href="https://www.unicoin.io" target="_blank">
                                <div className="single-job">
                                    <div className="top-sec d-flex justify-content-between">
                                        <div className="top-left">
                                            <h4>Laravel API Developer</h4>
                                            <p>WWW.UNICOIN.IO</p>
                                        </div>
                                        <div className="top-right">
                                            <a href="#" className="primary-btn dates" data-text="2015 - Present">
                                                <span>2015- Present</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                        Highly secure CryptoWallet with advanced features that make it easy to store and spend your Bitcoin, Litecoin and DogeCoin.
                                        API developer on Laravel, Database Developer (Mysql), Integration blockchain APIS and cryptocurrency stocks.
						      </div>
                                </div>
                            </a>
                        </div>


                        <div className="col-lg-6">
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Senior React Native Developer</h4>
                                        <p>COMELSE</p>
                                    </div>
                                    <div className="top-right dates">
                                        <a href="#" className="primary-btn" data-text=" 2018 - Present">
                                            <span>
                                                2018 - Present
                        </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    I am developing a Mobile application for Restaurants in France on React Native to make easier
                                    managing your employees and customers. Schedule some clean services and more additional features.
                                    This is an internal and confident project you cannot see this app on stores.
						      </div>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="single-job">
                                <div className="top-sec d-flex justify-content-between">
                                    <div className="top-left">
                                        <h4>Junior Web Developer</h4>
                                        <p>Web Solutions LTD in Georgia</p>
                                    </div>
                                    <div className="top-right dates">
                                        <a href="#" className="primary-btn" data-text="2011-2014">
                                            <span>
                                                2011-2014
                        </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                    Writing custom CMS, Modules, plugins on Joomla, Refactoring and code optimization; development of various tools and web-services, Integration payment systems
						      </div>
                            </div>
                        </div>



                    </div>
                </div>

                <style jsx>{`

                    div,p{
                    color: gray;
                    }

                    .dates{
                    max-height: 50px;
                    width: 150px;
                    }

                    .single-job{
                    height: 300px;
                    }

                    `}</style>
            </section>



        )
    }
}
