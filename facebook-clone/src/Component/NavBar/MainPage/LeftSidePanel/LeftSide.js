import React, { Component } from "react";
import "./LeftSide.css";
import ImageLayout from "../ImageLayout";
import covid from "../../../../images/covid.png";
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import messengerKids from "../../../../images/messengerkids.png";
import ads from "../../../../images/ads.png";
import adsmanager from "../../../../images/admanager.png";
import blood from "../../../../images/blood.png";
import business from "../../../../images/business.png";

class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    //FAke JSON RESPONSE
    let jsondata = [
      {
        image: JSON.parse(localStorage.getItem("user")).userImage,
        text: JSON.parse(localStorage.getItem("user")).userName,
      },
      {
        image: covid,
        text: "COVID-19 Information Centre",
      },
      {
        image: groups,
        text: "Friends",
      },
      {
        image: memories,
        text: "Memories",
      },
      {
        image: messengerKids,
        text: "Messenger Kids",
      },
      {
        image: ads,
        text: "Ad Center",
      },
      {
        image: adsmanager,
        text: "Ads Manager",
      },
      {
        image: blood,
        text: "Blood Donations",
      },
      {
        image: business,
        text: "Business Manager",
      },
    ];
    this.setState({ data: jsondata });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <ImageLayout image={item.image} text={item.text} />
        ))}
      </div>
    );
  }
}

export default LeftSide;
