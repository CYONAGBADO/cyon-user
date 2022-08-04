import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import CYON from "../imges/CYON.png";
import { createEntry } from '../services/dataGenerator';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/auth';
import { generateAccessToken } from '../services/userAccessControl';
// import useWindowSize from './utils/windowSize.';


const LogIn = () => {
  const [show, toggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const validateForm = () => {
    return (email.length > 0) && (password.length > 0);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      email,
      password
    }
    createEntry("auth/login-admin", payload, (res, err) => {
      if (!err) {
        console.log(res);
        generateAccessToken(res.data, (UAT) => {
          dispatch(loginAction(UAT));
        })
      } else {
        console.log(err)
      }
    })

  }


  return (
    <div className='login'>
      <div className='container-fluid'>
        <Row>
          <div className="col-md-12 col-sm-6 p-3 mx-auto mt-5">
            <div classname='t'>
              <h1> Log In</h1>
            </div>
            <Container className='shadow-lg col-primary-bg form-bg-content py-3'>
              <Form>
                <FormGroup size="lg" className='p-3' controlId="user" row>
                  <Label>User</Label>
                  <Col>
                    <Input
                      autoFocus
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </Col>

                </FormGroup>

                <FormGroup size="md" className='p-3' controlId="password" row>
                  <Label>Password</Label>
                  <Col>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </Col>
                </FormGroup>

                <Button size="lg"
                  type="submit"
                  outline color='primary'
                  disabled={!validateForm()}
                  onClick={handleSubmit}
                >
                  Log in
                </Button>
              </Form>
            </Container>
          </div>
        </Row>
      </div>
    </div>

  );


}


export default LogIn;