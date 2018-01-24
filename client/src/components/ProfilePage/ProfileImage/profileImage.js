import React, { Component } from 'react'; 
import Button from '../../Button/button'; 
import axios from 'axios';  
import './profileImage.css'; 

class ProfileImage extends Component {
    constructor(props) {
        super(props);

        this.width = 400;
        this.height = 0;
        this.streaming = false; 

        this.state = {
            savedImage: '/images/profile.jpg',
            currentImage: '/images/profile.jpg'
        }

        this.handleSave = this.handleSave.bind(this); 
        this.handleDiscardModal = this.handleDiscardModal.bind(this); 
        this.handleEditProfile = this.handleEditProfile.bind(this); 
        this.startup = this.startup.bind(this); 
        this.handleCanPlay = this.handleCanPlay.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
        this.takePicture = this.takePicture.bind(this); 
    }

    handleEditProfile(e) {
        e.preventDefault();
        if (this.props.editable) {
            this.startup(); 
        } 
    }

    startup() {
        let that = this; 
        navigator.mediaDevices.getUserMedia({ video: true, audio: false})
            .then(function(stream) {
                that.video.srcObject = stream;
                that.video.play(); 
                that.mediaStream = stream.getTracks()[0]; 
            })
            .catch(function(err) {
                console.log("An error occurred! " + err); 
            });

        this.clearPhoto(); 
    }

    handleCanPlay(e) {
        if (!this.streaming) {
            this.height = this.video.videoHeight / (this.video.videoWidth/this.width); 

            this.video.setAttribute('width', this.width); 
            this.video.setAttribute('height', this.height); 
            this.canvas.setAttribute('width', this.width);
            this.canvas.setAttribute('height', this.height);

            this.streaming = true; 
        }
    }

    handleClick() {
        this.takePicture();
    }

    takePicture() {
        let context = this.canvas.getContext('2d'); 
        if (this.width && this.height) {
            this.canvas.width = this.width;
            this.canvas.height = this.height; 
            context.drawImage(this.video, 0, 0, this.width, this.height); 

            let data = this.canvas.toDataURL('image/png'); 
            this.setState({ currentImage: data.split(',')[1]})
            this.photo.setAttribute('src', data); 
        } else {
            this.clearPhoto(); 
        }
    }

    clearPhoto() {
        let context = this.canvas.getContext('2d'); 
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, this.canvas.width, this.canvas.height); 

        let data = this.canvas.toDataURL('image/png');
        this.photo.setAttribute('src', data); 
    }

    handleDiscardModal() {
        this.mediaStream.stop();  
    }

    handleSave() {
        this.mediaStream.stop();
        console.log('got here'); 
        let that = this; 
        axios.patch(`/api/user/${this.props.id}`, { image: this.state.currentImage })
            .then(function(response) {
                console.log(response.data.imageUrlPath); 
                that.setState({ savedImage: response.data.imageUrlPath }); 
                that.props.updateUser({ imageUrlPath: response.data.imageUrlPath });
            })
            .catch(function(err) {
                console.log(err); 
            });  
    }

    render() {
        return(
            <div>
                <div className="modal" ref={(input) => { this.modal = input; }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Take your profile picture</h5>
                                <Button text={<span aria-hidden="true">&times;</span>} className="close" dataDismiss="modal" ariaLabel="Close" handler={this.handleDiscardModal} />
                            </div>
                            <div className="modal-body">
                                <div className="camera">
                                    <video id="video" ref={(input) => { this.video = input; }} onCanPlay={this.handleCanPlay}>Video stream not available.</video>
                                    <Button text="Take photo" id="startbutton" ref={(input) => { this.startbutton = input; }} handler={this.handleClick}/>
                                </div> 
                                <canvas id="canvas" ref={(input) => { this.canvas = input; }}>
                                </canvas>
                                <div className="output">
                                    <img id="photo" alt="The screen will appear in this box." ref={(input) => { this.photo = input; }}/>
                                </div> 
                            </div>
                            <div className="modal-footer">
                                <Button text="Save changes" className="btn btn-primary" dataDismiss="modal" handler={this.handleSave}/>
                                <Button text="Close" className="btn btn-secondary" dataDismiss="modal" handler={this.handleDiscardModal}/>
                            </div> 
                        </div>
                    </div> 
                </div> 
                <img id="profile-image" src={this.state.savedImage} alt="profile" onClick={this.handleEditProfile} />
            </div> 
        ); 
    }
}

export default ProfileImage; 