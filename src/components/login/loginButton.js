import React from 'react';
import Modal from '../modal/loginModal';



class LoginButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      show: false,
      header: "I am Header",
      footer: "I am Footer",
      desc: "This is a Body"
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
      <div>
        <button type="button" onClick={this.showModal}>
          Click to Login
        </button>
        <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} desc={this.state.desc} />
      </div>
    );
  }
}

export default LoginButton;