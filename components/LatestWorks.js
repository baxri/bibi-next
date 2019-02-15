import React, { Component } from 'react'

export default class LatestWorks extends Component {
    render() {

        const { works } = this.props;

        return (
            <div>
                <section className="job-area section-gap-top ">
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
                </section>


                {works.map((item, key) => (<section className="about-area" id="about-me">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 about-left">
                                <img className="img-fluid" src={item.image} alt="" />
                            </div>
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>
                                        <a href={item.url} target="_blank">{item.url_name}m</a>
                                    </p>
                                    <p>
                                        <strong>{item.category} </strong> {item.tags}
                                    </p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>))}


                <style jsx>{`

                   
                
                `}</style>
            </div>
        )
    }
}
