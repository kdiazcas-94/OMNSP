import React, { Component }  from 'react';
export default class RegisterModal extends Component {
 
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
                    <h1> Signup form </h1> 
                      <form action ="/register" method="POST">
                      <input class="box" type="text" name="name" id="name" 
                    placeholder="Name"  required />
                      <label class="sr-only" for="exampleInputEmail3">Email address</label>
                              <input type="email" class="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"></input>
                                <label class="sr-only" for="exampleInputPassword3">Password</label>
                                <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"></input>
                               
                                <input class="box" type="text" name="phone" id="phone"  
                    placeholder="Phone Number " required/>
                                    <label class="form-check-label"> Remember me
                                    </label>
                                    <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                    <input type="submit" id="submitDetails"  
                    name="submitDetails" value="Submit" />  
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