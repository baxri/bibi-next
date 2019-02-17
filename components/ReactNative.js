import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default class ReactNative extends Component {
    render() {

        const works = [


            {
                'status': true,
                'intranet': true,
                'intro': true,
                'id': 'react-native-intro',
                'title': 'React Native',
                'images': [
                    '/static/img/react-native/intro/1.png',
                    '/static/img/react-native/intro/2.png',
                    '/static/img/react-native/intro/3.png',
                    '/static/img/react-native/intro/4.png',
                ],
                'url': 'https://www.unicoin.io/',
                'url_name': 'www.unicoin.io',
                'category': 'Ecommerce Software',
                'tags': `REDUX, postgresql, socket.io, react.js, node.js, laravel-framework, php`,
                'desc': `

                        How I came in ReactNative world? I'll tell my story...
                        Just two years ago when I started my work at France web and mobile development
                         company "COMELSE" as a full stack web developer, we got one project from our 
                         client that he was needed an android application for intranet usage. Only for 
                         Android and only for the tablet version. No one from us knew java, objectiveC 
                         or swift,  so After too many researches, we had two choices:

                         <a href="https://ionicframework.com/" target="_blank">Ionic</a>
                        and 
                        <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>.

                      
                        One of the main differences is that using Ionic, you’ll be able to develop hybrid apps.
                        these apps will be rendered in UIWebView for iOS and WebView for Android.

                        <br />
                        
                        Nevertheless, using React Native, you can develop applications with the 
                        standard User Interface blocks. RN uses the native rendering APIs in Java
                         for Android and Objective-C for iOS, consequently, by the way I already was good 
                         at react.js so we dicided to use React Native for our mobile development platform. 
                         <br />
                         <br />
                         <strong>For more information about this app just scroll down...</strong>
                        `
            },
            {
                'status': true,
                'intranet': true,
                'intro': false,
                'id': 'haccp',
                'title': 'HACCP',
                'images': [
                    '/static/img/react-native/haccp/1.png',
                    '/static/img/react-native/haccp/2.png',
                    '/static/img/react-native/haccp/3.png',
                    '/static/img/react-native/haccp/4.png',
                    '/static/img/react-native/haccp/5.png',
                    '/static/img/react-native/haccp/6.png',
                    '/static/img/react-native/haccp/7.png',
                    '/static/img/react-native/haccp/8.png',
                    '/static/img/react-native/haccp/9.png',
                    '/static/img/react-native/haccp/10.png',
                    '/static/img/react-native/haccp/11.png',
                    '/static/img/react-native/haccp/12.png',
                    '/static/img/react-native/haccp/13.png',
                    '/static/img/react-native/haccp/14.png',
                    '/static/img/react-native/haccp/15.png',
                    '/static/img/react-native/haccp/16.png',
                    '/static/img/react-native/haccp/17.png',
                    '/static/img/react-native/haccp/18.png',
                    '/static/img/react-native/haccp/19.png',
                    '/static/img/react-native/haccp/20.png',
                    '/static/img/react-native/haccp/21.png',
                    '/static/img/react-native/haccp/22.png',

                ],
                'url': 'https://www.unicoin.io/',
                'url_name': 'www.unicoin.io',
                'category': 'intranet Software',
                'tags': `React Native, Realm Database, Laravel API, react.js, nodejs`,
                'desc': `
                        HACCP is internal software for a food service revision in France to control 
                        their products and scedule some lean services, take some photos and etc.
                        
                        <br />
                        <br />

                        The client needed a fully offline application without any internet connection. 
                        Any administrators and employees register localy on the device. So I decided to 
                        use some stable database that works great locally and I found 
                        <a href="https://realm.io/products/realm-database/" target="_blank">REALM</a>
                        . Any information 
                        is collected in the realm database and when the device is connected to the internet user 
                        is able to back up all the data to the server. The application also has a feature to check 
                        in admin panel any backup and download and restore it on the device.

                        <br />
                        <br />
                        Another challenge here was I was needed some solution to read realm database 
                        files on the server. So the only way I found I make node->realm connector 
                        and using REST API I got the information to the Laravel admin panel. 

                        <br />
                        <br />
                        Git repository for the node realm connector:

                        <br />
                        <a href="https://github.com/baxri/node-realm-connector" target="_blank">NODE REALM CONNECTOR</a>

                        `
            },
            {
                'status': false,
                'intranet': false,
                'intro': false,
                'id': 'gitrak',
                'title': 'GiTRAK',
                'images': [
                    '/static/img/react-native/gitrak/1.png',
                    '/static/img/react-native/gitrak/2.png',
                    '/static/img/react-native/gitrak/3.png',
                    '/static/img/react-native/gitrak/4.png',
                    '/static/img/react-native/gitrak/5.png',
                    '/static/img/react-native/gitrak/6.png',
                    '/static/img/react-native/gitrak/7.png',
                    '/static/img/react-native/gitrak/8.png',
                    '/static/img/react-native/gitrak/9.png',
                    '/static/img/react-native/gitrak/10.png',
                    '/static/img/react-native/gitrak/11.png',
                    '/static/img/react-native/gitrak/12.png',
                    '/static/img/react-native/gitrak/13.png',
                    '/static/img/react-native/gitrak/14.png',
                    '/static/img/react-native/gitrak/15.png',
                    '/static/img/react-native/gitrak/16.png',
                ],
                'url': 'https://www.unicoin.io/',
                'url_name': 'www.unicoin.io',
                'category': 'Medical Software',
                'tags': `React Native, React.js, Firebase, Redux`,
                'desc': `
                GiTRACK is an IOS application for a doctor and patient online communication. 
                It is built on top of React Native, Firebase and Redux.

                <br />
                <br />
                
                The patient can register from the app and manage his daily diet, check for 
                some suggestions and notify a doctor
                if has some problems, schedule a call with a doctor.


                        
                       
                        `
            },


        ];

        return (
            <div>
                {works.map((item, key) => (<section className="about-area section-gap-top" data-wow-duration="1s" id={item.id} key={key}>
                    <div className="container" >
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title">
                                    <h2>{item.title}</h2>
                                </div>

                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    {!item.intro && <div>
                                        <p>
                                            {!item.intranet && item.status && <a href={item.url} target="_blank">{item.url_name}</a>}

                                            {item.intranet && <strong>Intranet Application (Access Forbiden)</strong>}
                                            {!item.status && <strong>Application is not on App store</strong>}

                                        </p>
                                        <p>
                                            <strong>{item.category}: </strong> {item.tags}
                                        </p>
                                    </div>}
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
