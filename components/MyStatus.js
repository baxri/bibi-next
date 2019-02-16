import React, { Component } from 'react'

export default class MyStatus extends Component {

    constructor(props) {
        super(props)

        this.state = {
            zone: 'GEORGIA',
            offset: '+4',

            morningCoffeeHours: [4],
            alreadyWorkedFiveHours: [9, 10],
            OnMyWayHours: [11],
            coffeHours: [13],
            familyHours: [19, 20, 21],
            sleepHours: [22, 23, 24, '00', 1, 2, 3, 4],

            time: null,
            status: 'active',
        }
    }

    componentWillMount() {
        this.calcTime(this.state.zone, this.state.offset);
    }

    formatAMPM(date) {

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;

    }

    calcTime(city, offset) {

        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (3600000 * offset));

        let hour = nd.getHours();

        if (this.state.sleepHours.includes(hour)) {
            this.setState({ status: 'sleeping' });
        }

        if (this.state.familyHours.includes(hour)) {
            this.setState({ status: 'family' });
        }

        if (this.state.coffeHours.includes(hour)) {
            this.setState({ status: 'coffee-break' });
        }

        if (this.state.morningCoffeeHours.includes(hour)) {
            this.setState({ status: 'morning-coffee' });
        }

        if (this.state.alreadyWorkedFiveHours.includes(hour)) {
            this.setState({ status: 'already-worked-five-hours' });
        }

        if (this.state.OnMyWayHours.includes(hour)) {
            this.setState({ status: 'on-my-way-to-office' });
        }

        this.setState({ time: city + " " + this.formatAMPM(nd).toUpperCase() });

    }

    render() {

        const { time, status } = this.state;

        return (
            <div>

                <div className={"me wow fadeInLeft mb-3 " + status} data-wow-duration="1s" data-wow-delay="1s">
                    {this.state.time} -  &nbsp;

                    {status == 'morning-coffee' && "I'm getting morning coffee right now and starting my working session ;)"}
                    {status == 'already-worked-five-hours' && "I already worked 5 hours today from 4:00 AM looking forward I have a 16 hour working session today :)"}
                    {status == 'on-my-way-to-office' && "I'm on my way to office will active in a few minutes ;)"}
                    {status == 'active' && "I have an active right now I am available until 7:00 PM then I have a family and bed time:)"}
                    {status == 'sleeping' && "Shhh! I'm Sleeping right now, please be quiet, I wake up 4:00 AM :)"}
                    {status == 'family' && "Family time right now, then I should sleep and will be available from 4:00 AM ;)"}
                    {status == 'coffee-break' && "I have coffee break at my office will be available in less than hour ;)"}

                </div>

                <style jsx>{`

                    .my-status{
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background-color: #80fb4e;
                        border-radius: 20px;
                        padding: 15px;
                        color: white;

                        -webkit-box-shadow: -9px -8px 16px -1px rgba(0,0,0,0.14);
                        -moz-box-shadow: -9px -8px 16px -1px rgba(0,0,0,0.14);
                        box-shadow: -9px -8px 16px -1px rgba(0,0,0,0.14);
                    }

                    /* .sleeping{
                        background-color: red;
                    }

                    .family{
                        background-color: #00dcff;
                    } */
                
                `}</style>
            </div>
        )
    }
}
