import React, { Component } from "react";

import Layout from "../layouts/Layout";
import AboutMyself from "../components/About";
import LatestWorks from "../components/LatestWorks";
import Welcome from "../components/Welcome";
import GoodAt from "../components/GoodAt";

import css from "../static/css/empty.css";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Welcome />
        <GoodAt />
        <AboutMyself />
        <LatestWorks />
      </Layout>
    );
  }
}
