import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import SiteDescription from '../siteDescription/siteDescription';


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
                strokeColor="#a64ac9"
                backgroundColor="#ffb48f" />
            {/* <div className="oscilloscope-scrim">
            {!record && <div className="scrim" />}
            </div> */}
            <div className="react-mic-container__buttons">
                
                <button className="react-mic-container__buttons__start"   onClick={this.startRecording} type="button" title="Click to Start Recording">
                    <i class="fas fa-microphone-alt"></i>
                </button>
                
                <button className="react-mic-container__buttons__stop" onClick={this.stopRecording} type="button" title="Click to Stop Recording">
                    <i class="fas fa-stop-circle"></i>
                </button>
                
                <a
                className="react-mic-container__buttons__download"
                href={downloadLinkURL}
                download="recording.webm"
                >
                    <button className="react-mic-container__buttons__download__icon" title="Click to Download Recording">
                      <CloudDownloadIcon 
                      className="icon" 
                      style={{ fontSize: 50 }}
                      />
                    </button>
                </a>
            </div>
                <audio
                    className="react-mic-container__audio"
                    controls="controls"
                    src={blobURL}
                    controlsList="nodownload"
                    title= "Click the Play Button to Listen To Your Joke!"
                >
                    {/* <track kind="captions" /> */}
                </audio>
                <SiteDescription />
            </div>
    );
  }
}

export default Microphone;
