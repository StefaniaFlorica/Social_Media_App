import React, { Component, useState } from "react";
import "./UploadSection.css";
import { Paper, Avatar } from "@material-ui/core";
import live from "../../../../images/video.png";
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";
import Dialog from "@material-ui/core/Dialog";
import { db } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { getImage } from "../../../../GetImage";
import { v4 } from "uuid";

class UploadSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      uploadImage: null,
      description: null,
      image: null
    };
   //  const [imageUpload, setImageUpload] = useState(null);
  }
  handleClose = () => {
    this.setState({ open: false });
  };

  openDialog = (event) => {
    this.setState({ open: true });
    this.setState({ uploadImage: URL.createObjectURL(event.target.files[0]) });
    this.setState({ image: event.target.files[0] });
  };

  uploadImage = () => {
    if (this == null) return;
    const imageName = this.state.image.name + v4();
    const imageRef = ref(db, `images/${imageName}`);
    uploadBytes(imageRef, this.uploadImage).then(() => {
      alert("Image Uploaded");
    });
  };

  // uploadToFireBase = () => {
  // const thisContext = this;
  // if (this.state.image === null) return;
  // const imageName = this.state.image.name + v4();
  // const imageRef = ref(db, `images/${imageName}`);
  // uploadBytes(imageRef, this.state.image).then(() => {
  //   alert("Image Uploaded");
  // });

  // const imageListRef = ref(db, "images/");
  // listAll(imageListRef).then((response) => {
  //   response.items.forEach((item) => {
  //     console.log(item.name);
  // console.log(imageName);
  // if (item.name == imageName)
  // {
  //     getDownloadURL(item).then((downloadURL) => {
  //       let payload = {
  //         userID: JSON.parse(localStorage.getItem("user")).userID,
  //         userName: JSON.parse(localStorage.getItem("user")).userName,
  //         description: this.state.description,
  //         imageURL: downloadURL,
  //       };

  //       const requestOptions = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(payload),
  //       };

  //       fetch(
  //         "http://localhost:8080/api/postService/save",
  //         requestOptions
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           this.setState({ open: false });
  //           this.props.update();
  //           alert("Posted!");
  //         })
  //         .catch((error) => {});
  //     });
  // }
  //     });
  //   });
  // };

  render() {
    return (
      <div>
        <Dialog
          aria-labelledby="simple-dialog-title"
          className="upload__dialogbox"
          open={this.state.open}
        >
          <div className="upload__header">
            <div className="upload__text">Create Post</div>
            <div className="upload__close">
              <span onClick={this.handleClose}>X</span>
            </div>
          </div>
          <input
            type="text"
            onChange={(event) =>
              (this.state.description = event.currentTarget.value)
            }
            className="upload__textbox"
            placeholder="What's on your mind"
          />
          <img src={this.state.uploadImage} className="upload__preview" />
          <input
            type="file"
            // value="Post"
            onChange={(event) => {
              this.uploadImage = event.target.files[0];
            }}
            className="upload__button"
          />
        </Dialog>

        <Paper className="upload__container">
          <div className="upload__top">
            <div>
              <Avatar
                src={getImage(
                  JSON.parse(localStorage.getItem("user")).userImage
                )}
                className="upload_img"
              />
            </div>
            <div>
              <input
                className="upload__box"
                placeholder="What's on your mind ?"
                type="text"
              />
            </div>
          </div>
          <div className="upload__bottom">
            <div className="upload__tabs">
              <img src={live} width="30px" />
              <div className="upload__text">Live Video</div>
            </div>
            <div className="upload__tabs">
              <label for="file-upload" className="upload__tabs">
                <img src={image} width="30px" />
                <div className="upload__text">Photo/Video</div>
              </label>
              <input type="file" id="file-upload" onChange={this.openDialog} />
            </div>
            <div className="upload__tabs">
              <img src={feeling} width="30px" />
              <div className="upload__text">Feeling/Activity</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default UploadSection;
