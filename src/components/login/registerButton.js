import React from 'react';
import Modal from '../modal/registerModal';
import {Button} from '@material-ui/core'


class RegisterButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      show: false,
      header: "Register",
      footer: "Welcome to MenteeBook"
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
      <div className="registerButtonField">
        <Button className="registerButton" variant="contained"  color="primary" onClick={this.showModal}>
          Click to Register your account!
        </Button>
        <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} />
      </div>
    );
  }
}

export default RegisterButton;