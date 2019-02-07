import React from "react";
import Router from "next/router";
import Header from "./Header";

const pageStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

Router.event.on("routeChangeComplete", url => {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({ event: "virtualPageView" });
  dataLayer.push({ event: "optimize.activate" });
});

export default class Layout extends React.Component {
  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ event: "virtualPageView" });
    dataLayer.push({ event: "optimize.activate" });
  }
  render() {
    return (
      <div style={pageStyle}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
