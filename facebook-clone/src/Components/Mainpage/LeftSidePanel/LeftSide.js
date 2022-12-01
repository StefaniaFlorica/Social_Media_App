import React, { Component } from "react";
import "./LeftSide.css";
import ImageLayout from "../ImageLayout";
import covid from "../../../images/covid.png"; 
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data :[]
    };
  }

  getData=()=>{
    let jsondata = [{
      "image": covid,
      "text": "COVID-19 Information Centre"
    },
    {
      "image": groups,
      "text": "Friends"
    },
    {
      "image": memories,
      "text": "Memories"
    }
  ];
    this.setState({data : jsondata});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {
          this.state.data.map( (item) => (
            <ImageLayout image={item.image} text={item.text}/>
          ))
        }
      </div>
    );
  }
}

export default LeftSide;
