import React, { Component } from 'react'

export default class JobHistory extends Component {
    render() {

        const jobs = [
            {
                'title': 'Senior Laravel/React Developer',
                'url': 'http://www.webmation.com',
                'company': 'WWW.WEBMATION.COM',
                'desc': 'Developing one of the biggest SAAS platform in New York, with Laravel, NodeJS, React and GraphQL.',
                'dates': '2019 - Present',
            },
            {
                'title': 'Senior Web Developer',
                'url': 'https://unipay.com/en',
                'company': 'WWW.UNIPAY.COM',
                'desc': `UniPAY offers a universal payment system. This is an online wallet but for only Georgian market. I am an API and Database developer, most of all working on business logic 
                      how to application should work, Database development and optimization, Writing web services and integrated payment systems.`,
                'dates': '2016 - Present',
            },
            {
                'title': 'Laravel API Developer',
                'url': 'https://www.unicoin.io',
                'company': 'WWW.UNICOIN.IO',
                'desc': `Highly secure CryptoWallet with advanced features that make it easy to store and spend your Bitcoin, Litecoin and DogeCoin. 
                      API developer on Laravel, Database Developer (Mysql), Integration blockchain APIS and cryptocurrency stocks.`,
                'dates': '2015- Present',
            },
            {
                'title': 'React Native Developer',
                'url': '#',
                'company': 'COMELSE',
                'desc': `I am developing a Mobile application for Restaurants in France on React Native to make easier managing your employees and customers. 
                        Schedule some clean services and more additional features. This is an internal and confident project you cannot see this app on stores`,
                'dates': '2018 - Present',
            },
            {
                'title': 'Web Developer',
                'url': '#',
                'company': 'Web Solutions LTD in Georgia',
                'desc': `Writing custom CMS, Modules, plugins on Joomla, Refactoring and code optimization; 
                       development of various tools and web-services, Integration payment systems`,
                'dates': '2011-2014',
            }
        ]


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
                        {jobs.map((item, key) => (
                            <div className="col-lg-6 " key={key}>
                                <a href={item.url} target="_blank">
                                    <div className="single-job job-card">
                                        <div className="top-sec d-flex flex-column ">
                                            <div className="top-left">
                                                <h4>{item.title}</h4>
                                                <p>{item.company}</p>
                                            </div>
                                            <div className="bottom-sec  d-flex " data-wow-duration="2s">{item.desc}</div>
                                        </div>
                                        <div className="d-flex ">
                                            <p>{item.dates}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
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
                        height: 430px;
                    }

                    .job-card{
                        border: 1px solid lightgray;
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    `}</style>
            </section>



        )
    }
}
