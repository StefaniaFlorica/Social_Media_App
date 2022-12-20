import React, { Component } from "react";
import Status from "./Status";
import "./StatusBar.css";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    const thisContext = this;
    fetch("http://localhost:8080/api/statusService/getAllStatus")
      .then((response) => response.json())
      .then((json) => {
        thisContext.setState({ data: json });
      })
      .catch((error) => {});
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="statusbar__container">
        <Status refresh={this.getData} uploader="true" />
        {this.state.data.map((item) => (
          <Status refresh={this.getData} object={item} />
        ))}
      </div>
    );
  }
}

export default StatusBar;
