import React, { Component } from 'react';
import NavigationBar from '../navBar/NavigationBar'
import Logo from '../logo/Logo'


class Header extends Component {
    render(){
      return (
        <div className='header'>
            <NavigationBar />   
            <Logo /> 
        </div>
      );
    }
}

export default Header;

