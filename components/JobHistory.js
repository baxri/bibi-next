import React, { Component } from 'react'

export default class JobHistory extends Component {
    render() {

        const { jobs } = this.props;

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
