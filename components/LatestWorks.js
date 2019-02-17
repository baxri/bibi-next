import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default class LatestWorks extends Component {
    render() {

        const works = [

            {
                'id': 'unipay',
                'status': true,
                'intranet': false,
                'title': 'UniPAY',
                'images': [
                    '/static/img/work/unipay/1.png',
                    '/static/img/work/unipay/2.png',
                    '/static/img/work/unipay/3.png',
                    '/static/img/work/unipay/4.png',
                    '/static/img/work/unipay/5.png',
                    '/static/img/work/unipay/6.png',
                    '/static/img/work/unipay/7.png',
                    '/static/img/work/unipay/8.png',
                    '/static/img/work/unipay/9.png',
                    '/static/img/work/unipay/10.png',
                    '/static/img/work/unipay/11.png',
                    '/static/img/work/unipay/12.png',
                    '/static/img/work/unipay/13.png',
                    '/static/img/work/unipay/14.png',
                    '/static/img/work/unipay/15.png',
                    '/static/img/work/unipay/16.png',
                    '/static/img/work/unipay/17.png',
                    '/static/img/work/unipay/18.png',
                    '/static/img/work/unipay/19.png',

                ],
                'url': 'https://unipay.com/en',
                'url_name': 'www.unipay.com',
                'category': 'Ecommerce Software',
                'tags': `Laravel, React.js, Next.js, Node.js, Nginx, Mongodb, REST, SOAP, Payment-gateway-integration, Mysql, PHP`,
                'desc': `UniPAY offers universal payment system in Georgia. 
                        We launched this project a few years ago for the Georgian market and now 
                        I am handling more than 500K users and more than 100 transactions per second.
                        I built and optimized this application with PHP and NODEJS microservices that uses MYSQL database, 
                        Front stuff is built with REACT.JS.
                        
                        <br />
                        <br />

                        The system comes also with a mobile applications: 

                        <a href="https://play.google.com/store/apps/details?id=com.unipay.wallet&hl=en" target="_blank">Google Play Store</a>
                        and 
                        <a href="https://itunes.apple.com/us/app/unipay-wallet/id1180567676" target="_blank">App Store</a>
                        

                        <br />
                        <br />
                        <strong>Continue scrolling...</strong>
                        `


            },
            {
                'id': 'unicoin',
                'status': true,
                'intranet': false,
                'title': 'UniCOIN.io',
                'images': [
                    '/static/img/work/unicoin/2.png',
                    '/static/img/work/unicoin/3.png',
                    '/static/img/work/unicoin/4.png',
                    '/static/img/work/unicoin/5.png',
                    '/static/img/work/unicoin/6.png',
                    '/static/img/work/unicoin/7.png',
                    '/static/img/work/unicoin/8.png',
                    '/static/img/work/unicoin/9.png',
                    '/static/img/work/unicoin/10.png',
                    '/static/img/work/unicoin/11.png',
                    '/static/img/work/unicoin/12.png',
                    '/static/img/work/unicoin/13.png',
                    '/static/img/work/unicoin/14.png',
                    '/static/img/work/unicoin/15.png',
                    '/static/img/work/unicoin/16.png',
                    '/static/img/work/unicoin/17.png',
                    '/static/img/work/unicoin/18.png',
                ],
                'url': 'https://www.unicoin.io/',
                'url_name': 'www.unicoin.io',
                'category': 'Ecommerce Software',
                'tags': `REDUX, postgresql, socket.io, react.js, node.js, laravel-framework, php`,
                'desc': `This website is also for the Georgian market. We launched this project just a two months ago and 
                        already have more 30K users. this is a digital cryptocurrency wallet. 
                        you can buy, sell or transfer any kind of cryptocurrencies here, like Bitcoin, 
                        LiteCoin, DogeCoin, Xrp, Etherium etc. The technologies I decided to use on this project are 
                        NODEJS, REACTJS, REDUX, MYSQL it works great using real-time data using WEB SOCKETS.. 
                        
                        
                        <br />
                        <br />
                        <strong>Continue scrolling...</strong>
                        `


            },
            {
                'id': 'railway',
                'status': true,
                'intranet': false,
                'title': 'Railway Tickets',
                'images': [
                    '/static/img/work/matarebeli/1.png',
                    '/static/img/work/matarebeli/2.png',
                    '/static/img/work/matarebeli/3.png',
                    '/static/img/work/matarebeli/4.png',
                    '/static/img/work/matarebeli/5.png',
                    '/static/img/work/matarebeli/6.png',
                    '/static/img/work/matarebeli/7.png',
                ],
                'url': 'http://www.matarebeli.ge/en/home',
                'url_name': 'www.matarebeli.ge',
                'category': 'Web Development',
                'tags': `mysql-programming, react-native, node.js, laravel-framework, php`,
                'desc': `Next successful project is www.matarebeli.ge ...  "matarebeli" 
                        means "Train" in the Georgian so as you guess you can buy some Georgian 
                        railway tickets here. if you ever come to Georgia you probably need to buy
                        railway tickets on my website.
                        I am using PHP, REACT NATIVE, MYSQL to give the life to this application :) 
                                    
                                    
                            The system comes also with a mobile applications: 

                            <a href="https://play.google.com/store/apps/details?id=com.matarebeli.android" target="_blank">Google Play Store</a>
                            and 
                            <a href="https://itunes.apple.com/us/app/matarebeli-georgian-railway/id1232236433" target="_blank">App Store</a>
                            
    
                            <br />
                            <br />
                            <strong>Continue scrolling...</strong>
                            `
            },
            {
                'id': 'domains',
                'status': true,
                'intranet': false,
                'title': '.GE Domains',
                'images': [
                    '/static/img/work/domains/1.png',
                    '/static/img/work/domains/2.png',
                    '/static/img/work/domains/3.png',
                    '/static/img/work/domains/4.png',
                    '/static/img/work/domains/5.png',
                    '/static/img/work/domains/6.png',
                    '/static/img/work/domains/7.png',
                    '/static/img/work/domains/8.png',
                    '/static/img/work/domains/9.png',
                    '/static/img/work/domains/10.png',
                    '/static/img/work/domains/11.png',
                    '/static/img/work/domains/12.png',
                ],
                'url': 'https://ge.domains',
                'url_name': 'ge.domains',
                'category': 'Web Development',
                'tags': `LARAVEL, PHP, MYSQL, REACT, NEXT.JS`,
                'desc': `This web application is also for the Georgian market. 
                        We launched this project just a few months ago and now this is 
                        one best registrator in Georgia with more than 20K domains and users. 
                        You can buy and manage .ge domains, apply some name servers and you have all
                        the tools to make your domain up and running.

                        <br />
                        <br />

                        We decided to use for this application next.js for the front end stuff. 
                            because of we needed to make our application SEO friendly, The easiest solution we 
                            found was next.js with server-side rendering feature. It works great with LARAVEL 
                            API backend and NODEJS microservices.

                        `,
            },
            {
                'id': 'spotify',
                'status': true,
                'intranet': false,
                'title': 'Spotify Premium',
                'images': [
                    '/static/img/work/spotify/1.png',
                    '/static/img/work/spotify/2.png',
                    '/static/img/work/spotify/3.png',
                    '/static/img/work/spotify/4.png',
                    '/static/img/work/spotify/5.png',
                    '/static/img/work/spotify/6.png',
                    '/static/img/work/spotify/7.png',
                    '/static/img/work/spotify/8.png',
                    '/static/img/work/spotify/9.png',
                    '/static/img/work/spotify/10.png',
                ],
                'url': 'http://www.spotifypremium.ge/en',
                'url_name': 'www.spotifypremium.ge',
                'category': 'Web Development',
                'tags': `LARAVEL, PHP, MYSQL, REACT, NEXT.JS`,
                'desc': `This is simple web application, built on top of LARAVEL.
                        <br />
                        <br />
                        How does it work?
                        <br />
                        Purchase 1, 3, 6 month or 1 year Spotify premium subscription from our web-page Spotify.unipay.com

                        Get a personal Spotify Premium account usable anywhere in the world.

                        <br />
                        <br />
                        Get discount when purchasing at least the 3-month subscription.

                        `
            },
            {
                'id': 'cinemax',
                'status': false,
                'intranet': false,
                'title': 'CINEMAX',
                'images': [
                    '/static/img/work/cinemax/1.png',
                    '/static/img/work/cinemax/2.png',
                    '/static/img/work/cinemax/3.png',
                    '/static/img/work/cinemax/4.png',
                    '/static/img/work/cinemax/5.png',
                    '/static/img/work/cinemax/6.png',
                    '/static/img/work/cinemax/7.png',
                    '/static/img/work/cinemax/8.png',
                    '/static/img/work/cinemax/9.png',
                ],
                'url': 'http://www.cinemax.ge/',
                'url_name': 'www.cinemax.ge',
                'category': 'Web Development',
                'tags': `LARAVEL, PHP, MYSQL, VUE`,
                'desc': `This is simple ecommerce web application, built on top of LARAVEL and VUE.JS.
                        
                        <br />
                        <br />
                         This application no more operates on Georgian market, it was a simple eCommerce 
                         solution to buy cinema tickets online, was very UI/UX friendly app but unfortunately,
                         it was not a successful application. So just a few months ago this went down... :(
                        `
            },
            {
                'id': 'bti',
                'status': true,
                'intranet': true,
                'title': 'BTI Translation',
                'images': [
                    '/static/img/work/bti/1.png',
                    '/static/img/work/bti/2.png',
                    '/static/img/work/bti/3.png',
                    '/static/img/work/bti/4.png',
                    '/static/img/work/bti/5.png',
                    '/static/img/work/bti/6.png',
                    '/static/img/work/bti/7.png',
                ],
                'url': 'javascript:void(0)',
                'url_name': 'Intranet APP',
                'category': 'Web Development',
                'tags': `LARAVEL, PHP, MYSQL, VUE`,
                'desc': `This is simple web application, built on top of LARAVEL and VUE.JS.
                        
                        <br />
                        <br />
                        This application runs for France video translation company "BTI", 
                        That operates in media for more than 15 years. This is an intranet 
                        application for company managers to manage translation tasks, manage 
                        video timing and history of translated videos, they are able to test 
                        each other translated videos, make some comments on them, have some 
                        chatting and if everything goes okay they validating videos.

                        <br />
                        <br />

                        This application helps employees to more easily manage their time, 
                        and be more productive.

                        `
            }


        ];

        return (
            <div>
                {/* <section className="job-area section-gap-top ">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Latest Works</h2>
                                    <p>
                                        Here are the most recent succesfull works,
                                        If you want to make business online, I am here to help you :)

                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {works.map((item, key) => (<section className="about-area section-gap-top" data-wow-duration="1s" id={item.id} key={key}>
                    <div className="container" >
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title">
                                    <h2>{item.title}</h2>
                                </div>

                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        {!item.intranet && item.status && <a href={item.url} target="_blank">{item.url_name}</a>}

                                        {item.intranet && <strong>Intranet Application (Access Forbiden)</strong>}
                                        {!item.status && <strong>Unfortunately application is dead</strong>}

                                    </p>
                                    <p>
                                        <strong>{item.category}: </strong> {item.tags}
                                    </p>
                                    <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <Carousel showThumbs={true} showStatus={false} showIndicators={false} emulateTouch>
                                    {item.images.map((image, key) => (<div key={key}>
                                        <img className="img-fluid" src={image} alt="" />
                                    </div>))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>))}


                <style global jsx>{`

                    .carousel .slide {
                        min-width: 100%;
                        margin: 0;
                        position: relative;
                        text-align: center;
                        background: white !important;
                    }

                    .carousel .control-prev.control-arrow:before {
                        border-right: 8px solid #0c0c0c !important;
                        margin-right: 10px;
                    }
                                    
                `}</style>
            </div>
        )
    }
}
