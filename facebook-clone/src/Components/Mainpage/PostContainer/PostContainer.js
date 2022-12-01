import React, { Component } from 'react';
import Post from './Post';
import "./PostContainer.css";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    getData=()=> { // calling the rest from backend
        let json = [
          {
            post_ID: 1,
            user_id: 12345678,
            user_img: "url....",
            user_name: "Enache Mihai",
            description: "Loved this wallpaper...",
            post_img: "url of the image",
            like: "25",
          },
          {
            post_ID: 2,
            user_id: 12345678,
            user_img: "",
            user_name: "Lavinia",
            description: "Dummy description",
            post_img: "",
            like: "125",
          },
        ];

        this.setState({data : json});
    }

    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer;