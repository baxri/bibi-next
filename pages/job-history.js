import React, { Component } from 'react'

import Layout from "../layouts/Layout";
import JobHistory from "../components/JobHistory";

export default class History extends Component {
  render() {

    const jobs = [
      {
        'title': 'Senior Laravel/React Developer',
        'url': 'http://www.webmation.com',
        'company': 'WWW.WEBMATION.COM',
        'desc': 'Developing one of the biggest SAAS platform in New York, with Laravel, NodeJS, React and GraphQL.',
        'dates': '2019 - Present',
      },
      {
        'title': 'Senior Web Developer',
        'url': 'https://unipay.com/en',
        'company': 'WWW.UNIPAY.COM',
        'desc': `UniPAY offers a universal payment system. This is an online wallet but for only Georgian market. I am an API and Database developer, most of all working on business logic 
                how to application should work, Database development and optimization, Writing web services and integrated payment systems.`,
        'dates': '2016 - Present',
      },
      {
        'title': 'Laravel API Developer',
        'url': 'https://www.unicoin.io',
        'company': 'WWW.UNICOIN.IO',
        'desc': `Highly secure CryptoWallet with advanced features that make it easy to store and spend your Bitcoin, Litecoin and DogeCoin. 
                API developer on Laravel, Database Developer (Mysql), Integration blockchain APIS and cryptocurrency stocks.`,
        'dates': '2015- Present',
      },
      {
        'title': 'React Native Developer',
        'url': '#',
        'company': 'COMELSE',
        'desc': `I am developing a Mobile application for Restaurants in France on React Native to make easier managing your employees and customers. 
                  Schedule some clean services and more additional features. This is an internal and confident project you cannot see this app on stores`,        
        'dates': '2018 - Present',
      },
      {
        'title': 'Web Developer',
        'url': '#',
        'company': 'Web Solutions LTD in Georgia',
        'desc': `Writing custom CMS, Modules, plugins on Joomla, Refactoring and code optimization; 
                 development of various tools and web-services, Integration payment systems`,        
        'dates': '2011-2014',
      }
    ]

    return (
      <Layout>
        <JobHistory jobs={jobs} />
      </Layout >
    )
  }
}
