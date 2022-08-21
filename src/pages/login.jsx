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
  const [Id, setId] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateForm = () => {
    return (Id.length > 0) && (password.length > 0);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      [Id.match(/^[\+]?[(]?[0-9]{9,13}[)]?$/) ? "phone" : "email"]: Id,
      password
    }
    createEntry("auth/login", payload, (res, err) => {
      if (!err) {
        generateAccessToken(res.data, (UAT) => {
          dispatch(loginAction(UAT));
        })
      } else {
        err && setError(err.message.includes("404") ? "This account does not exist" : err.message);
        console.log(err.message)
      }
    })

  }


  return (
    <div className='login'>
      <div className='container-fluid'>
        <Row>
        <div className="col-md-6 col-sm-6 p-3 mx-auto d-flex" style={{flexDirection: "column", justifyContent: "center", height: "100vh"}} >
            <div classname='t'>
              <h1> Log In</h1>
            </div>
            <Container className='shadow-lg col-primary-bg form-bg-content py-3'>
              <p style={{color: "red"}}>{error}</p>
              <Form>
                <FormGroup size="lg" className='p-3' controlId="user" row>
                  <Label>User</Label>
                  <Col>
                    <Input
                      autoFocus
                      type="text"
                      value={Id}
                      onChange={(e) => {
                        setError("")
                        setId(e.target.value)
                      }}
                      placeholder="Enter your email or phone address"
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
                      onChange={(e) => {
                        setError("");
                        setPassword(e.target.value)
                      }}
                      placeholder="Enter your password"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup size="md" className='p-3' controlId="password">
                  <Button size="lg"
                    type="submit"
                    outline color='primary'
                    disabled={!validateForm()}
                    onClick={handleSubmit}
                  >
                    Log in
                  </Button>
                </FormGroup>
              </Form>
            </Container>
          </div>
        </Row>
      </div>
    </div>

  );


}


export default LogIn;