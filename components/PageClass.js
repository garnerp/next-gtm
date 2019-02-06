import React from "react";
import Header from "./Header";

const pageStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default class Layout extends React.Component {
  componentDidMount() {
    dataLayer.push({ event: "virtualPageView" });
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
