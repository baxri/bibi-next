import React, { Component } from 'react'

export default class About extends Component {

    render() {

        const abouts = [
            {
                id: 'get-started',
                title: `Get Started`,
                image: `/static/img/about-img.jpg`,
                desc: ` Hey, I am George Bibilashvili, full stack web developer from Georgia, For the past 8 years, I've been building server-side applications (API),
                        client-side webs, developing application databases, for businesses.
                        I've done this as an employee, and a freelancer. I've also worked on some super-secret projects and big brands.
                        I'd tell you, but then I'd have to kill you :D

                        <br />
                        <br />
                        Skills I am good at:
                        <br />
                        <strong>Laravel, NodeJS, React, NextJS, React Native, Vue, Redux, MySQL, MongoDB</strong>

                        `,
                desc2: `During these years I launched many interesting projects in the Georgian market mostly in eCommerce and 
                        cryptocurrency world. 
                        If you want to build a business online we can have a word, just schedule time with me.`,

                desc3: `I do it because it's fun and, apparently, I'm pretty good at it.`,

                note: `If you are intersted how my day looks like, just continue scrolling ...`,
                direction: 'right-to-left'
            },
            {
                id: 'schedule',
                title: `4:00 AM ?`,
                image: `/static/img/get-started.jpg`,
                desc: `Yes... 4:00 AM, exactly at this time... my day starts before the day starts... every morning, the same 
                        <a href="https://www.youtube.com/watch?v=iNpXCzaWW1s" target="_blank">sound</a> 
                        wakes me up...`,
                desc2: ` 
                        The alarm clock has a terrible sound, I wake up and go to my morning coffee, 
                        it's all going out at 4:00 AM. Then I go with the coffee at my computer and preparing to start my morning working session.
                        <br />
                        <br />
                        Why 4:00 AM?
                        <br />
                        This is the best part of day when I can find the most productive labor. Nobody is around me
                        at this time, nobody interrupts me, I have done so much work from 4:00 AM to 11:00 
                        AM that a lot of people cant during the day time. from 11:30 AM I am going to the 
                        office where I am dealing with emails, have another coding session, have some meetings 
                        and a bunch of other interesting stuff. At 7:00 PM I am at home with my family and 9:00 
                        PM is bedtime.`,
                note: `Family time, just continue scrolling ...`,
                direction: 'left-to-right'
            },
            {
                id: 'family',
                title: `Family Time`,
                image: `/static/img/nita.jpg`,
                desc: `Nowadays it is the most difficult to combine family and job. You always fight with yourself to find a 
                            great balance between family and job.`,

                desc2: `I have a wonderful wife and a wonderful 4 years daughter. I feel really really happy in 
                        my life.  Because I am very busy in my daily routine I have just few hours to spent with my family 
                        from 7:00 PM to 9:00 PM, But these few hours are very interesting and productive for me and my girl...
                        I turn of my smartphone and spent all of my time with her, 
                        we are playing together some fun games... The only words that can makes me stop working are: "Dad can 
                        you play with me?",  These magic works make very sense...`,
                note: `Play with me, we can make the world better place.`,
                direction: 'right-to-left'
            }
        ]

        return (
            <div>
                {abouts.map((about, key) => (<section className="about-area section-gap-top" id={about.id} key={key}>
                    <div className="container wow fadeInUp" data-wow-duration="1s" >
                        <div className="row align-items-center justify-content-between">

                            {/* {about.direction == 'left-to-right' && (<div className="col-lg-5 ">
                                <img className="img-fluid" src={about.image} alt="" />
                            </div>)} */}

                            <div className="col-lg-6 col-md-12 about-right">
                                <div className="section-title">
                                    <br />
                                    <h2>{about.title}</h2>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p dangerouslySetInnerHTML={{ __html: about.desc }}></p>
                                    {about.desc2 && <p dangerouslySetInnerHTML={{ __html: about.desc2 }}></p>}
                                    {about.desc3 && <p dangerouslySetInnerHTML={{ __html: about.desc3 }}></p>}
                                    <strong>{about.note}</strong>
                                </div>
                            </div>

                            {/* {about.direction == 'right-to-left' && (<div className="col-lg-5 ">
                                <img className="img-fluid" src={about.image} alt="" />
                            </div>)} */}

                            <div className="col-lg-5 ">
                                <img className="img-fluid" src={about.image} alt="" />
                            </div>

                        </div>
                    </div>
                </section>))}
            </div>
        )
    }
}
