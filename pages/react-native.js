import React, { Component } from 'react'

import ReactNativeComponent from "../components/ReactNative";
import Layout from "../layouts/Layout";

export default class ReactNative extends Component {
    render() {
        return (
            <Layout>
                <ReactNativeComponent />
            </Layout>
        )
    }
}
