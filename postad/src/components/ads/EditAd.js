import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAd } from '../../store/actions/adActions'
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class CreateAd extends Component {

  constructor(props) {
    super(props);
    const ref = firebase.firestore().collection('ads').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const ad = doc.data();
        this.setState({
          key: doc.id,
          title: ad.title,
          content: ad.content,
          avatar: ad.avatar,
          avatarURL: ad.avatarURL,
        });
      } else {
        console.log("No such document!");
      }
    });
 
    }
  state = {
    key: '',
    title: '',
    content: '',
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  }
  
  handleChange = (e) => {
    // const state = this.state
    // state[e.target.name] = e.target.value;
    // this.setState({ad:state});
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createAd(this.state);
    const { title, content, avatar, avatarURL  } = this.state;

    const updateRef = firebase.firestore().collection('ads').doc(this.state.key);
    updateRef.update({
      title,
      content,
      avatar,
      avatarURL
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        content: '',
        avatar: '',
        avatarURL:''
      });
      this.props.history.push("/yourads")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
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
            <input type="text" id='title' value={this.state.title} onChange={this.handleChange} />
            <label htmlFor="title"></label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" value={this.state.content}  onChange={this.handleChange}></textarea>
            <label htmlFor="content"></label>
          </div>
          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
            Select photo
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