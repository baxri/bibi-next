import React, { Component } from 'react'
import Socials from "./Socials";

export default class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <section className="contact-area section-gap">
                    <div className="container">
                       

                        <br />
                        <Socials align="center" />

                        <div className="row mt-80">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-box">
                                    <h4>+995 598 602 084</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-box">
                                    <h4>giorgi.bibilashvili89@gmail.com</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-box">
                                    <h4>www.bibi.ge</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <a href="mailto:giorgi.bibilashvili89@gmail.com" className="primary-btn mt-50" data-text="Hire Me">
                                    <span>H</span>
                                    <span>i</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span> </span>
                                    <span>M</span>
                                    <span>e</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
