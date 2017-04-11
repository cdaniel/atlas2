/*jshint esversion: 6 */

import React, {
    PropTypes as T
} from 'react';
import ReactDOM from 'react-dom';
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
    ButtonToolbar,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import AuthService from './AuthService';


export class Login extends React.Component {

  getAuthParams() {
    return {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    };
  }

  login(e) {
    e.preventDefault();
    const { email, password } = this.getAuthParams();
    this.props.auth.login(email, password);
  }

  signup() {
    const { email, password } = this.getAuthParams();
    this.props.auth.signup(email, password);
  }

  loginWithGoogle() {
    this.props.auth.loginWithGoogle();
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col sm={6} smOffset={3} lg={4} lgOffset={4}>
          <h2>Login</h2>
          <Form onSubmit={this.login.bind(this)}>
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" ref="email" placeholder="yours@example.com" required />
            </FormGroup>

            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" ref="password" placeholder="Password" required />
            </FormGroup>

            <ButtonToolbar>
              <Button type="submit" bsStyle="primary">Log In</Button>
              <Button onClick={this.signup.bind(this)}>Sign Up</Button>
              <Button bsStyle="link" onClick={this.loginWithGoogle.bind(this)}>
                Login with Google
              </Button>
            </ButtonToolbar>
          </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Login;
