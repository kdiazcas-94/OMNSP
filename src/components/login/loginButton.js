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
  /*myChangeHandler = (event) => {
    this.setState({emailaddress: event.target.value});
  }
  submitLogin()
    {
      fetch("localhost:3003/path/to/api", {
        body: "email=test@example.com&password=pw",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
    })
    .then((response) => {
     if(this.state.emailaddress){
       headers = <h1>Hello {this.state.emailaddress}</h1>;
     }
     else
     {

     }
    })
    .catch(err => {
      // handle error
    })
    }
    */
 
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