import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAd } from '../../store/actions/adActions'
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class CreateAd extends Component {
  state = {
    title: '',
    content: '',
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: "",
    contactno:""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createAd(this.state);
  }

handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
handleProgress = progress => this.setState({ progress });
handleUploadError = error => {
  this.setState({ isUploading: false });
  console.error(error);
};

handleUploadSuccess = filename => {
  this.setState({ avatar: filename, progress: 100, isUploading: false });
  firebase
    .storage()
    .ref("images")
    .child(filename)
    .getDownloadURL()
    .then(url => this.setState({ avatarURL: url }));
};

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Ad</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} required/>
            <label htmlFor="title">Ad Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required></textarea>
            <label htmlFor="content">AdContent</label>
          </div>
          <div className="input-field">
            <input type="text" id='contactno' onChange={this.handleChange} required/>
            <label htmlFor="title">Contact Number</label>
          </div>

          
          { this.state.progress==100? <div class="col-md-4">
          <img class="responsive-img" src={this.state.avatarURL}></img>
          </div>:""}
          <br/>
          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
            Upload a photo
          
          {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
            <FileUploader
              hidden
              accept="image/*"
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            </label>
          


          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAd: (ad) => dispatch(createAd(ad))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd)