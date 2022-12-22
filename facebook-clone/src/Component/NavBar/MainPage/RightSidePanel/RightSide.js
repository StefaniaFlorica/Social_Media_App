import React, { Component } from "react";
import "./RightSide.css";
import ImageLayout from "../ImageLayout";

class RightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {

    const thisContext = this;
    fetch("http://localhost:8080/api/userService/getAllUsers")
      .then((response) => response.json())
      .then((json) => {
        thisContext.setState({ data: json });
        //console.log(json);
      })
      .catch((error) => {});
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="rightside__container">
        <div className="rightside__header">Contacts</div>
        <div className="rightside__content">
          {this.state.data.map((item) => (
            <ImageLayout
              image={item.userImageURL}
              status={item.active}
              text={item.userName}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RightSide;
