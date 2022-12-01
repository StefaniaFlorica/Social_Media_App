import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from "../ImageLayout";
import david from "../../../images/dp3.png";
import lavinia from "../../../images/dp0.png";
import andreea from "../../../images/dp2.png";

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData=()=>{
        let jsonData = [
          {
            image: david,
            text: "David",
          },
          {
            image: lavinia,
            text: "Lavinia",
          },
          {
            image: andreea,
            text: "Andreea",
          },
        ];
        this.setState({data : jsonData});
    }

    componentDidMount() {
        this.getData();
    }
    
    render() { 
        return (
          <div className="rightside_container">
            <div className="rightside_header">Contacts</div>
            <div className="rightside_content">
              <div>
                {this.state.data.map((item) => (
                  <ImageLayout image={item.image} text={item.text} />
                ))}
              </div>
            </div>
          </div>
        );
    }
}
 
export default RightSide;