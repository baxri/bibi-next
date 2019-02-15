import React, { Component } from 'react'

import Layout from "../../layouts/Layout";
import LatestWorks from "../../components/LatestWorks";

export default class Index extends Component {
    render() {

        const works = [

            {
                'title': 'UniPAY',
                'image': '/static/works/unipay.png',
                'url': 'https://unipay.com/en',
                'url_name': 'www.unipay.com',
                'category': 'Web Development',
                'tags': `Laravel, React.js, Next.js, Node.js, Nginx, Mongodb, Rest, Soap, Payment-gateway-integration, Mysql, PHP`,
                'desc': `UniPAY offers universal payment system.
                        Whether you are a business owner accepting online payments or simply doing a bit of online shopping,
                        paying for services or sending money UniPAY eWallet is the quickest, safest and most reliable way for it.
                        You can make and accept payments, within seconds online.`


            },
            {
                'title': 'UniCOIN.io',
                'image': '/static/works/unicoin.png',
                'url': 'https://www.unicoin.io/',
                'url_name': 'www.unicoin.io',
                'category': 'Web Development',
                'tags': `redux-saga, postgresql-programming, socket.io, react-js, node.js, laravel-framework, php`,
                'desc': `This is a digital cryptocurrency wallet. you can buy, sell or transfer any kind of cryptocurrencies here, l
                        ike Bitcoin, LiteCoin, DogeCoin, Xrp, Etherium etc. we are using a bunch of great technologies here like REACT.JS,
                        REDUX, PHP, LARAVEL on API side. also, this system uses a bunch of microservices written in NODEJS.`


            },
            {
                'title': 'Railway Tickets',
                'image': '/static/works/matarebeli.png',
                'url': 'http://www.matarebeli.ge/en/home',
                'url_name': 'www.matarebeli.ge',
                'category': 'Web Development',
                'tags': `mysql-programming, react-native, node.js, laravel-framework, php`,
                'desc': `You can buy
                        some Georgian railway tickets here. if you ever come to Georgia you probably need
                        to buy railway tickets on my website. I am using PHP, REACT NATIVE, MYSQL to give the life
                        to this application :)
                        this web site comes also with react native application.
                        Most popular eCommerce project in Georgia.`
            },
            {
                'title': '.GE Domains',
                'image': '/static/works/domains.png',
                'url': 'https://ge.domains',
                'url_name': 'ge.domains/en',
                'category': 'Web Development',
                'tags': `laravel-framework, php, mysql-programming, react-js`,
                'desc': `This is Georgian market web site to buy and manage .ge zone domains. built on top of super technologies.`
            },
            {
                'title': 'Spotify Premium',
                'image': '/static/works/spotify.png',
                'url': 'http://www.spotifypremium.ge/en',
                'url_name': 'www.spotifypremium.ge',
                'category': 'Web Development',
                'tags': `bootstrap, react-js, php, laravel-framework`,
                'desc': `Get a personal Spotify Premium account usable anywhere in the world.`
            }


        ];

        return (
            <Layout>
                <LatestWorks works={works} />
            </Layout>
        )
    }
}
