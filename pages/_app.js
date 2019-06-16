import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        const title = `BIBI.ge`;
        const description = `NodeJS, React, NextJS, React Native, Redux, Laravel`;

        return (
            <Container>
                <Head>
                    <title>{title}</title>
                    <meta property='og:description' content={description} />
                    <meta name='description' content={description} />
                </Head>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;