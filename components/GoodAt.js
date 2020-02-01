import React, { Component } from "react";

export default class GoodAt extends Component {
  render() {
    return (
      <section className="service-area section-gap" id="recognitions">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Feedbacks from clients</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="feedback-card col-lg-4 col-md-6">
              <div className=" wow fadeInUp" data-wow-duration="1s">
                <h4>
                  <span>Chico</span> Charlesworth
                </h4>
                <p>React Native / React / Ruby On Rails / Redux</p>
                <a
                  href="https://www.linkedin.com/in/chicocharlesworth/"
                  target="_blank"
                >
                  Linkedin 🤖👽💪🤗😜
                </a>
                <p>
                  George did a fantastic job and I really enjoyed working with
                  him. He delivered good quality code and communicated clearly
                  throughout the project. He collaborated well with the team and
                  quickly got up to speed with the project. He demonstrated that
                  he was skilled in working with React and React Native to a
                  high standard and he completed the tasks assigned to him
                  promptly. Recommended!
                </p>
                <br />
              </div>
            </div>

            <div className="feedback-card col-lg-4 col-md-6">
              <div className="wow fadeInUp" data-wow-duration="1s">
                <h4>
                  <span>Samuel</span> Visscher
                </h4>
                <p>React Native / Expo / Redux</p>
                <a
                  href="https://www.linkedin.com/in/samuelvisscher/"
                  target="_blank"
                >
                  Linkedin 😍😇👌👈🙌
                </a>
                <p>
                  Giorgi did a great job helping us with a React Native project,
                  both for Android as well as iOS. He was knowledgable, fast in
                  his work, quick to answer questions, open for feedback and all
                  together a great accelerator to the project. Would gladly work
                  with again.
                </p>
                <br />
              </div>
            </div>

            <div className="feedback-card col-lg-4 col-md-6">
              <div className="wow fadeInUp" data-wow-duration="1s">
                <h4>
                  <span>Julien</span> Renouard
                </h4>
                <p>React / React Native / Laravel </p>
                <a
                  href="https://www.linkedin.com/in/julien-renouard/"
                  target="_blank"
                >
                  Linkedin 🤗👏💪👍👍
                </a>
                <p>
                  Stellar performance, George is probably in the top 1% coders
                  in the world. He is also a very nice and funny person,
                  understands clients problem and is able to come with solutions
                  on his own. No need to micro-manage him and that's a very rare
                  quality for a freelancer. Too bad we don't have enough work
                  for him at the moment, but we will be hiring him back as soon
                  as possible.
                </p>
                <br />
              </div>
            </div>

            <div className="feedback-card col-lg-4 col-md-6">
              <div className="wow fadeInUp" data-wow-duration="1s">
                <h4>
                  <span>Hersh</span> Sandhoo
                </h4>
                <p>React / React Native / Laravel </p>
                <a
                  href="https://www.linkedin.com/in/hershsandhoo/"
                  target="_blank"
                >
                  Linkedin 😎😎😎😎
                </a>
                <p>
                  George is very responsive and works hard. He is a great
                  programmer who has a complete skill set to code responsive
                  websites and mobile apps. Our project used a laravel framework
                  with react/react-native. George is always quick to give ideas
                  and make recommendations to help improve the project.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .service-area {
            /* border: 1px solid red; */
            /* margin-top: 60px; */
          }
        `}</style>
      </section>
    );
  }
}
