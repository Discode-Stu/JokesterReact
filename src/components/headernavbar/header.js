import React, { Component } from 'react';



class Header extends Component {
    render() {
        return(
            <div className='header'>
                <img className='header__image' src={ require('./../../../src/images/jesterGirl.png') } />
            </div>
        )
    }
}

export default Header;