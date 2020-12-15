import React, { Component } from 'react';
import NavigationBar from './navBar/NavigationBar'
import LoginButton from '../login/loginButton'
import RegisterButton from '../login/registerButton'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component {
    render(){
      return (
        <div className='header'>
            <NavigationBar /> 
            <IconButton>
              <SearchIcon />
            </IconButton>  
            <LoginButton />
            <RegisterButton />
        </div>
      );
    }
}

export default Header;

