import React, { Component } from 'react';
import NavigationBar from '../navBar/NavigationBar'
import LoginButton from '../login/loginButton'


class Header extends Component {
    render(){
      return (
        <div className='header'>
            <NavigationBar />   
            <LoginButton />
        </div>
      );
    }
}

export default Header;

