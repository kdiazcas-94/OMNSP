import React, { Component }  from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from '@material-ui/core'
import Container from '@material-ui/core/Container';

export default class LoginModal extends Component {

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
      console.log('User signed in!');
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
                      <form className="form-layer" action="http://localhost:3003/login" method="POST">
                      <label 
                        className="sr-only" 
                        for="exampleInputEmail3">
                        Email address
                      </label>
                        <input 
                          type="email" 
                          className="formSize" 
                          id="exampleInputEmail3" 
                          placeholder="Enter email" 
                          onChange={this.myChangeHandler} />
                      <hr />
                      <label 
                        className="sr-only" 
                        for="exampleInputPassword3">
                          Password
                        </label>
                        <input 
                          type="password" 
                          className="formSize" 
                          id="exampleInputPassword3" 
                          placeholder="Password" />
                      <hr />
                      <Container>
                      <input 
                        className="form-check-input" 
                        type="checkbox" />
                      <label 
                          className="form-check-label"> Remember me</label>
                      </Container>
                      <hr />
                        <Button 
                          variant="contained" 
                          type="button" 
                          className="btn btn-secondary btn-sm ml-auto" 
                          data-dismiss="modal">
                          Cancel
                        </Button>
                        <Button 
                          variant="contained" 
                          type="submit" 
                          className="btn btn-secondary btn-sm ml-auto" 
                          value="Submit">
                          Submit
                        </Button>
                      </form>
                     </div>             
                     </div>
 
            </div>
 
        </div>
      );
    }    
}
//<input type="submit" id="submitDetails" name="submitDetails" value="Submit" />  