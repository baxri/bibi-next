import React, { Component } from 'react'

import Layout from "../layouts/Layout";

export default class Index extends Component {
  render() {
    return (
      <Layout>
       
       <section className="home-banner-area">
		<div className="container">
			<div className="row fullscreen d-flex align-items-center">
				<div className="banner-content col-lg-6 col-md-12 justify-content-center ">
					<div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">It's me</div>
					<h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">George BIBIlashvili</h1>
					<div className="designation mb-70 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
						Full Stack
						<span className="designer"> Web Developer</span>
						<p className="developer">Geek/Ninja</p>
					</div>
					<a href="#" className="primary-btn" data-text="Hire Me">
						<span>H</span>
						<span>i</span>
						<span>r</span>
						<span>e</span>
						<span> </span>
						<span>M</span>
						<span>e</span>
					</a>
				</div>
				<div className="banner-img col-lg-6 col-md-6 align-self-end">
					<img className="img-fluid" src="/static/img/banner-img.png" alt="" />
				</div>
			</div>
		</div>
	</section>

      </Layout>
    )
  }
}
