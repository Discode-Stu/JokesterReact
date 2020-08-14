import React, { Component } from 'react';



class Header extends Component {
    render() {
        return(
            
                <div className='header'>
                    <img className='header__image' src={ require('./../../../src/images/jesterGirl.png') } />
                    <div className='header__title'>
                        <div className='header__title-jokester'>
                            Jokester
                        </div>
                        <div className='header__title-desription'>
                            Learn and Practice Jokes!
                        </div>
                    </div>
                </div>
 
         
        )
    }
}

export default Header;