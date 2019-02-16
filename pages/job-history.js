import React, { Component } from 'react'

import Layout from "../layouts/Layout";
import JobHistory from "../components/JobHistory";

export default class History extends Component {
  render() {

    return (
      <Layout>
        <JobHistory />
      </Layout >
    )
  }
}
