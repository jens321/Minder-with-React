import React, { Component } from 'react'; 
import Button from '../../Button/button';   
import './profileImage.css'; 

class ProfileImage extends Component {
    constructor(props) {
        super(props);

        this.width = 300;
        this.height = 0;
        this.streaming = false; 

        this.state = {
            savedImage: '/images/profile.jpg',
            currentImage: '/images/profile.jpg',
            modalIsOpen: false
        }

        this.handleSave = this.handleSave.bind(this); 
        this.handleDiscardModal = this.handleDiscardModal.bind(this); 
        this.handleEditProfile = this.handleEditProfile.bind(this); 
        this.startup = this.startup.bind(this); 
        this.handleCanPlay = this.handleCanPlay.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
        this.takePicture = this.takePicture.bind(this); 
        this.clearPhoto = this.clearPhoto.bind(this); 
    }

    handleEditProfile(e) {
        e.preventDefault();
        if (this.props.editable) {
            this.setState({ modalIsOpen: true }); 
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
        this.setState({ modalIsOpen: false });  
    }

    handleSave() {
        this.mediaStream.stop(); 
        this.setState({ modalIsOpen: false }); 

        let xhr = new XMLHttpRequest();
        xhr.open('PATCH', `/api/user/${this.props.id}`, true);
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText); 
                this.setState({ savedImage: response.imageUrlPath });
                this.props.updateUser({ imageUrlPath: response.imageUrlPath }); 
            }
        }

        xhr.send(JSON.stringify({ image: this.state.currentImage })); 
    }

    render() {
        return( 
            <div>
                <div className={"custom-modal" + (this.state.modalIsOpen ? "" : " hide")}>
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
                        <Button text="Save changes" className="btn btn-primary" handler={this.handleSave}/>
                        <Button text="Close" className="btn btn-secondary" handler={this.handleDiscardModal}/>
                    </div> 
                </div>       
                <img id="profile-image" src={this.state.savedImage} alt="profile" onClick={this.handleEditProfile} />
            </div> 
        ); 
    }
}

export default ProfileImage; 