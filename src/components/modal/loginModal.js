import React, { Component }  from 'react';
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
        const { handleClose, desc, show, header, footer  } = this.props
        const showHideClassName = show ? 'display-block' : 'display-none';
        console.log(this.props);
      return (
          <div className={showHideClassName}>
             <div id="myModal" className="modal">

              <div className="modal-content">
                <div className="modal-header">
                  <span className="close" onClick={this.props.handleClose}>×</span>
                  <h2>{header}</h2>
                </div>
                <div className="modal-body">
                    <p>
                      <form action="http://localhost:3003/login" method="POST">
                      <label class="sr-only" for="exampleInputEmail3">Email address</label>
                               <input type="email" class="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email" onChange={this.myChangeHandler}></input>
                                <label class="sr-only" for="exampleInputPassword3">Password</label>
                                <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"></input>
                                <input class="form-check-input" type="checkbox"></input>
                                    <label class="form-check-label"> Remember me
                                    </label>
                                    <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                            <button onClick="submitLogin" value="Submit">Sign in</button>    
                      </form>
                      </p> 
                     </div>
                     <div className="modal-footer"><h3>{footer}</h3>
                     </div>               
                     </div>
 
            </div>
 
        </div>
      );
    }    
}