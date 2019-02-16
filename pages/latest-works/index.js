import React, { Component } from 'react'

import Layout from "../../layouts/Layout";
import LatestWorks from "../../components/LatestWorks";

export default class Index extends Component {
    render() {

        return (
            <Layout>
                <LatestWorks />
            </Layout>
        )
    }
}
