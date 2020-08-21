import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Header extends Component {
    render() {
        return(
            
                <div className='header'>
                    <img className='header__image-jester' src={ require('./../../../src/images/jesterGirl.png') } />
                    <div className='header__title'>
                        <div className='header__title-jokester'>
                            Jokester
                        </div>
                        <div className='header__title-desription'>
                            Learn and Practice Jokes!
                        </div>

                    </div>
                    <div className className='header__disc'>
                        <FontAwesomeIcon className='header__disc__icon' icon="compact-disc" />
                    </div>
                </div>
 
         
        )
    }
}

export default Header;