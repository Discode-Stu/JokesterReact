import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


 
class Microphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadLinkURL: null,
            record: false,
            blobURL: null
            
    }
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onSave = (blobObject) => {
    this.setState({ downloadLinkURL: blobObject.blobURL })
  }
 
  onStop = (blobObject) => {
    this.setState({ blobURL: blobObject.blobURL })
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  startRecording = () => {
    this.setState({ record: true });
  }

  
 
//   onDownload = () => {
//     this.setState({ renderSound: blobObject.blobURL })
//   }

 

 
  render() {
    
    const {
        blobURL,
        downloadLinkURL,
        record

    } = this.state
    return (
       
            <div className="react-mic-container">
                <ReactMic
                    className="react-mic-container__sound-wave"
                    record={this.state.record}
                    onStop={this.onStop}
                    onData={this.onData}
                    onSave={this.onSave}
                    onDownload={this.onDownload}
                    strokeColor="#fccd04"
                    backgroundColor="#17e9e0" />
                {/* <div className="oscilloscope-scrim">
                {!record && <div className="scrim" />}
                </div> */}
                <div className="react-mic-container__buttons">
                    
                    <button className="react-mic-container__buttons__start"   onClick={this.startRecording} type="button">
                        <i class="fas fa-microphone-alt"></i>
                    </button>
                    
                    <button className="react-mic-container__buttons__stop" onClick={this.stopRecording} type="button">
                        <i class="fas fa-stop-circle"></i>
                    </button>
                    
                    <a
                    className="react-mic-container__buttons__download"
                    href={downloadLinkURL}
                    download="recording.webm"
                    >
                        <CloudDownloadIcon 
                        className="react-mic-container__buttons__download-icon"
                        style={{ fontSize: 50 }}
                        
                        
                        />
                    </a>
                </div>
            
                <audio
                    className="react-mic-container__audio"
                    controls="controls"
                    src={blobURL}
                    controlsList="nodownload"
                >
                    <track kind="captions" />
                </audio>
            </div>



    );
  }
}

export default Microphone;

                
                {/*                 
                <a href={downloadLinkURL}>
                    {downloadLinkURL}
                </a> */}