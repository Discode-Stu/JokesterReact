import React, { Component } from 'react';



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
                    {/* <img className='header__image-audience' src={ require('./../../../src/images/silhouette-audience.png') } /> */}

                </div>
 
         
        )
    }
}

export default Header;