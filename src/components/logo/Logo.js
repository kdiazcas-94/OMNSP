import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Logo extends Component {
    render(){
      return (
        <div className='headerLogo'>
            <NavLink to ="/"><img  src={require('./MuttNutzLogoHeaderSmall.png')} alt=""/></NavLink>
        </div>  
      );
    }
}

export default Logo;