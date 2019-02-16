import React, { Component } from 'react'

import Layout from "../layouts/Layout";
import AboutMyself from "../components/About";
import LatestWorks from "../components/LatestWorks";
import Welcome from "../components/Welcome";

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <Welcome />
                <AboutMyself />
                <LatestWorks />
            </Layout>
        )
    }
}
