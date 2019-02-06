import React from "react";

import App, { Container } from "next/app";
import Router from "next/router";
import Page from "../components/PageClass";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({ event: "virtualPageView" });
      dataLayer.push({ event: "optimize.activate" });
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}
