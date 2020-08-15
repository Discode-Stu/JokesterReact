import React, { Component } from 'react';


import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Microphone  from './reactMic/reactMic';
import GetJokes from './jokes/getJokes';


class Layout extends Component {

  render() {
    return (
      <div className='layout'>
        {this.props.children}
      
        <Header />
        <Navbar />
        <div>
        <Microphone />
        </div>
        <div>
        <GetJokes />
        </div>
       
    


      </div>
    );
  }
}


export default Layout;

//NOTES
// card mode or list mode for jokes