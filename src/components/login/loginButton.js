import React from 'react';
import Modal from '../modal/loginModal';
import {Button} from '@material-ui/core'

class LoginButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      show: false,
      header: "Login",
      footer: "Welcome Back"
     };
  }
 
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="loginButtonField">
        <Button className="loginButton" variant="contained" color="primary" onClick={this.showModal} >     
          Click to Login
        </Button>
        <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} />
        
      </div>
    );
  }
}

export default LoginButton;