import React, { Component } from "react";
import "./StatusBar.css";
import { Paper } from "@material-ui/core";
import uploadIcon from "../../../../images/upload.png";
import { db } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
  }

  openDialogToUploadStatus = (event) => {
    const thisContext = this;
    let image=event.target.files[0] 

    console.log(image.name);
    if (image == null) return;
    
    this.state.image = event.target.files[0];
    const imageName = image.name + v4();
    console.log(imageName);
    let imageRef = ref(db, `status/${imageName}`);
    uploadBytes(imageRef, this.state.image).then(() => {
      alert("Image Uploaded");
      this.setState(this.state);
      listAll(ref(db, "status/")).then((response) => {
        response.items.forEach((item) => {
          if (item.name == imageName) {
            getDownloadURL(item).then((downloadURL) => {
              let payload = {
                userId: JSON.parse(localStorage.getItem("user")).userId,
                userName: JSON.parse(localStorage.getItem("user")).userName,
                statusImgURL: downloadURL,
              };

              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              };

              fetch(
                "http://localhost:8080/api/statusService/save",
                requestOptions
              )
                .then((response) => response.json())
                .then((data) => {
                  thisContext.props.refresh();
                  thisContext.props.update();
                  alert("saved to db");
                })
                .catch((error) => {});
            });
          }
        });
      });
    });
  
  };

  render() {
    return (
      <div>
        {this.props.uploader === "true" ? (
          <Paper className="statusbar__status">
            <label for="file-upload-status" className="upload__tabs">
              <img
                src={uploadIcon}
                className="upload__icon"
                alt="upload icon"
              />
            </label>
            <input
              type="file"
              id="file-upload-status"
              onChange={this.openDialogToUploadStatus}
            />
          </Paper>
        ) : (
          <Paper className="statusbar__status">
            <img
              src={this.props.object.statusImgURL}
              className="status__image"
              alt="status"
            />
          </Paper>
        )}
      </div>
    );
  }
}

export default Status;
