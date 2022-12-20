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
    //FAke JSON RESPONSE
    // let jsondata = [
    //     {
    //         "image": "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-1/p148x148/162713656_4172696726074274_4057600099221701280_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=JZF-KE3J5i8AX_bfiWf&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=d777e7f1cac41c18c54d15ddd673033b&oe=608F5148",
    //         "text": "Anindya Sankar Dasgupta"
    //     },
    //     {
    //         "image": "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-1/p148x148/162713656_4172696726074274_4057600099221701280_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=JZF-KE3J5i8AX_bfiWf&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=d777e7f1cac41c18c54d15ddd673033b&oe=608F5148",
    //         "text": "Rakesh Karmakar"
    //     },
    //     {
    //         "image": "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-1/p148x148/162713656_4172696726074274_4057600099221701280_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=JZF-KE3J5i8AX_bfiWf&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=d777e7f1cac41c18c54d15ddd673033b&oe=608F5148",
    //         "text":"John Jeff"
    //     },
    //     {
    //         "image": "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-1/p148x148/162713656_4172696726074274_4057600099221701280_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=JZF-KE3J5i8AX_bfiWf&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=d777e7f1cac41c18c54d15ddd673033b&oe=608F5148",
    //         "text":"Vivek Agarwal"
    //     },
    //     {
    //         "image": "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-1/p148x148/162713656_4172696726074274_4057600099221701280_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=JZF-KE3J5i8AX_bfiWf&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=d777e7f1cac41c18c54d15ddd673033b&oe=608F5148",
    //         "text":"Gaurav Sen"
    //     }
    // ];

    const thisContext = this;
    fetch("http://localhost:8080/api/userService/getAllUsers")
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
      <div className="rightside__container">
        <div className="rightside__header">Contacts</div>
        <div className="rightside__content">
          {this.state.data.map((item) => (
            <ImageLayout
              image={item.userImage}
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
