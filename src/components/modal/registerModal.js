import React, { Component }  from 'react';
export default class RegisterModal extends Component {
 
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event){
        this.setState({value: event.target.value});
      }
      handleSubmit(event){
        alert('A name was submitted' + this.state.value);
        event.preventDefault();
        console.log('User registered to DB!');
      }


    render() {
        const { handleClose, show, header, footer  } = this.props
        const showHideClassName = show ? 'display-block' : 'display-none';
        console.log(this.props);
      return (
          <div className={showHideClassName}>
             <div id="myModal" className="modal">

              <div className="modal-content">
                <div className="modal-header">
                  <span className="close" onClick={handleClose}>×</span>
                  <h2>{header}</h2>
                </div>
                <div className="modal-body">
                      <form action="http://localhost:3003/submitRegister" method="POST">
                      <label className="sr-only" for="exampleInputName">Name</label>
                        <input className="box" type="text" name="name" id="name"  placeholder="Name"  required />
                        <hr />
                      <label className="sr-only" for="exampleInputEmail3">Email address</label>
                        <input type="email" name="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"></input>
                        <hr />
                      <label className="sr-only" for="exampleInputPassword3">Password</label>
                        <input type="password" name="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"></input>
                        <hr />
                      <label className="sr-only" for="exampleInputPhoneNumber">Phone Number</label>
                      <input className="box" type="text" name="phone" id="phone"   placeholder="Phone Number " required/>
                      <hr />
                      <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                      <input type="submit" id="submitDetails" name="submitDetails" value="Submit" />
                      </form>
                     </div>
                     <div className="modal-footer"><h3>{footer}</h3>
                     </div>               
                     </div>
 
            </div>
 
        </div>
      );
    }    
}