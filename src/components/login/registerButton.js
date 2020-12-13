import React from 'react';
import Modal from '../modal/registerModal';



class RegisterButton extends React.Component {
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
          Click to Register your account!
        </button>
        <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} desc={this.state.desc} />
      </div>
    );
  }
}

export default RegisterButton;