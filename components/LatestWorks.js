import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default class LatestWorks extends Component {
    render() {

        const works = [

            {
                'status': true,
                'title': 'UniPAY',
                'images': [
                    '/static/img/work/unipay/6.jpg',
                    '/static/img/work/unipay/1.jpg',
                    '/static/img/work/unipay/2.jpg',
                    '/static/img/work/unipay/3.jpg',
                    '/static/img/work/unipay/4.jpg',
                    
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
                'status': true,
                'title': 'UniCOIN.io',
                'images': [
                    '/static/img/work/unicoin/1.png',
                    '/static/img/work/unicoin/2.png',
                    '/static/img/work/unicoin/3.png',
                    '/static/img/work/unicoin/4.png',
                    '/static/img/work/unicoin/5.png',
                  
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
                'status': true,
                'title': 'Railway Tickets',
                'images': [
                    '/static/works/matarebeli.png',
                    '/static/works/matarebeli.png',
                    '/static/works/matarebeli.png',
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
                'status': true,
                'title': '.GE Domains',
                'images': [
                    '/static/works/domains.png',
                    '/static/works/domains.png',
                    '/static/works/domains.png',
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
                'status': true,
                'title': 'Spotify Premium',
                'images': [
                    '/static/works/spotify.png',
                    '/static/works/spotify.png',
                    '/static/works/spotify.png',
                    '/static/works/spotify.png',
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


                {works.map((item, key) => (<section className="about-area section-gap-top" data-wow-duration="1s" id="about-me" key={key}>
                    <div className="container" >
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title">
                                    <h2>{item.title}</h2>
                                </div>

                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        <a href={item.url} target="_blank">{item.url_name}</a>
                                    </p>
                                    <p>
                                        <strong>{item.category}: </strong> {item.tags}
                                    </p>
                                    <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <Carousel  showThumbs={false} showStatus={false} emulateTouch>
                                    {item.images.map((image, key) => (<div key={key}>
                                        <img className="img-fluid"  src={image} alt="" />
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
                                    
                `}</style>
            </div>
        )
    }
}
