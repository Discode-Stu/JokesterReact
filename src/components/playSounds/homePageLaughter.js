import React, { Component } from "react";

class Laugh extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="JokesterReact/src/sounds/Male Laugh Short-SoundBible.com-1728242766.mp3"></source>
        </audio>
      </div>
    )
  }
}

export default Laugh;