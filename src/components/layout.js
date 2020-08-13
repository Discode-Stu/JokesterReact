import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Microphone  from './reactMic/reactMic';


class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        
        {this.props.children}
        <Header />
        <Navbar />
        <Microphone />
        
      </div>
    );
  }
}


export default Layout;