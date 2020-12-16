import React, { Component }  from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';


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
                        <div className="form">
                    <div className="paper">
                    <Container component="main" maxWidth="xs">
                    <form className="form" noValidate action="http://localhost:3003/submitRegister" method="POST">
                        <TextField
                            autoComplete="name"
                            name="exampleInputName"
                            margin="normal"
                            variant="outlined"
                            required
                            fullWidth
                            id="exampleInputName"
                            label="Name"
                            autoFocus
                            for="exampleInputName"
                            type="text"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="exampleInputEmail3"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            for="exampleInputEmail3"
                            type="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="exampleInputPhoneNumber"
                            label="Phone"
                            type="text"
                            id="exampleInputPassword3"
                            autoComplete="current-phone"
                            for="exampleInputPhoneNumber"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="exampleInputPassword3"
                            label="Password"
                            type="password"
                            id="exampleInputPassword3"
                            autoComplete="current-password"
                            for="exampleInputPassword3"
                        />
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            >
                        Sign Up
                        </Button>
                    </form>
                        <Button
                            type="cancel"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="close" 
                            onClick={handleClose}
                            >
                        Cancel
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                        </Container>
                    </div>
                </div> 
                </div>
            </div>
            </div>
        </div>
                            );}}