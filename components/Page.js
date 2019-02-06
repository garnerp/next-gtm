import React from "react";
import Router from "next/router";
import Header from "./Header";

/* Router.events.on("routeChangeComplete", url => {
  // send GTM virtualPageView
  dataLayer.push({ event: "virtualPageView" });
  dataLayer.push({ event: "optimize.activate" });
}); */

const pageStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Page = props => (
  <div style={pageStyle}>
    <Header />
    {props.children}
  </div>
);

export default Page;
