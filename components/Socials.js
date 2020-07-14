import React, { Component } from 'react'

export default class Socials extends Component {

    render() {

        const { align } = this.props;


        return (
            <div className={`ocials d-flex justify-content-${align}`}>
                <a href="https://www.facebook.com/george.bibilashvili" target="_blank" id="download-button" className="btn btn-light">
                    <span className="fa fa-facebook fa-lg"></span>
                </a>
                &nbsp;
        <a href="https://github.com/baxri" target="_blank" id="download-button" className="btn btn-light">
                    <span className="fa fa-github fa-lg"></span>
                </a>
                &nbsp;
        <a href="https://twitter.com/WbibiG" target="_blank" id="download-button" className="btn btn-light">
                    <span className="fa fa-twitter fa-lg"></span>
                </a>
                &nbsp;
        <a href="https://www.linkedin.com/in/giorgi-bibilashvili/" target="_blank" id="download-button" className="btn btn-light">
                    <span className="fa fa-linkedin fa-lg"></span>
                </a>
                &nbsp;
                <a href="/static/cv.pdf" target="_blank" id="download-button" className="btn btn-light">
                    <span className="fa fa-download fa-lg"></span> &nbsp;&nbsp; RESUME
                </a>


                <style jsx>{`

                    .socials{
                        border: 1px solid red;
                    }
                
                `}</style>
            </div>
        )
    }
}
