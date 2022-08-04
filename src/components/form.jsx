import React, { useState, useMemo } from "react"
import {
  Form,
  FormGroup,
  //  FormText,
  Col,
  //  FormFeedback,
  Label,
  Input,
  CustomInput,
  Container,
  Row
} from "reactstrap"


const ModalRegForm = (props) => {

  const [selectedCountry, setSelectedCountry] = useState()

  const handleOnChange = (e) => {
    props.getPayload({ [e.target.name]: e.target.value })
  }

  const country = useMemo(() => {
    let selected = props.countries.find((country) => country.name === selectedCountry);
    console.log({ selected });
    return selected;
  }, [selectedCountry])


  return (
    <div>
      <Form>
        <Container>
          <Row>
            <Col md={6}>
              <FormGroup className="p-2">
                <Label for="name">Last Name</Label>
                <Col sm={9}>
                  <Input type="text" name="name" id="name" onChange={handleOnChange} placeholder="Write your last name..." />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="name" sm={2}>First Name</Label>
                <Col sm={10}>
                  <Input type="text" name="name" id="name" onChange={handleOnChange} placeholder="Write your first name..." />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="name" sm={2}>Middle Name</Label>
                <Col sm={10}>
                  <Input type="text" name="name" id="name" onChange={handleOnChange} placeholder="Write your middle name..." />
                </Col>
              </FormGroup>

              <FormGroup tag="fieldset" row className="p-2">
                <legend className="col-form-label col-sm-3">Gender</legend>
                <Col sm={9}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="gender" value="male" onChange={handleOnChange} />{' '}
                      Male
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="gender" value="female" onChange={handleOnChange} />{' '}
                      Female
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup tag="fieldset" row className="p-2">
                <legend className="col-form-label col-sm-3">Marital Status</legend>
                <Col sm={9}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="marital_status" value="single" onChange={handleOnChange} />{' '}
                      Single
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="marital_status" value="married" onChange={handleOnChange} />{' '}
                      Married
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="marital_status" value="separated" onChange={handleOnChange} />{' '}
                      Separated
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="marital_status" value="widowed" onChange={handleOnChange} />{' '}
                      Widowed
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="address" sm={3}>Residential Address</Label>
                <Col sm={9}>
                  <Input type="textarea" name="address" id="address" onChange={handleOnChange} placeholder="Type your address..." />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="name" sm={3}>Email</Label>
                <Col sm={9}>
                  <Input type="email" name="email" id="email" onChange={handleOnChange} placeholder="Type your email..." />
                </Col>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup row className="p-2">
                <Label for="date_of_birth" sm={3}>Date of Birth</Label>
                <Col sm={9}>
                  <Input type="date" name="dob" id="dob" onChange={handleOnChange} />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="phone" sm={3}>Phone</Label>
                <Col sm={9}>
                  <Input type="tel" name="phone" id="phone" onChange={handleOnChange} placeholder="Add phone number..." />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="password" sm={3}>Password</Label>
                <Col sm={9}>
                  <Input type="password" name="password" id="password" onChange={handleOnChange} placeholder="type your password..." />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="username" sm={3}>Username</Label>
                <Col sm={9}>
                  <Input type="username" name="username" id="username" onChange={handleOnChange} placeholder="Enter your username..." />
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="occupation" sm={3}> Occupation </Label>
                <Col sm={9}>
                  <Input type="text" name="occupation" id="occupation" onChange={handleOnChange} placeholder="Add occupation..." />
                </Col>
              </FormGroup>


              <FormGroup row className="p-2">
                <Label for="lga" sm={3} >LGA</Label>
                <Col sm={9}>
                  <Input type="text" name="lga" id="lga" onChange={handleOnChange} placeholder="Add LGA..." />
                  {/* <CustomInput type="select" id="lga" name="lga" onChange={handleOnChange}  >
                    <option value="">Select </option>
                    <option>{ }</option>
                    <option>Value 2</option>
                    <option>Value 3</option>
                    <option>Value 4</option>
                    <option>Value 5</option>
                  </CustomInput> */}
                </Col>
              </FormGroup>


              <FormGroup row className="p-2">
                <Label for="country" sm={3} >Couuntry</Label>
                <Col sm={5}>
                  <CustomInput type="select" id="country" name="country" onChange={(e) => {
                    handleOnChange(e);
                    setSelectedCountry(e.target.value)
                  }} >
                    <option value="">Select Country</option>
                    {
                      props.countries.map((country) => <option value={country.name} >{country.name}</option>)
                    }
                  </CustomInput>
                </Col>
              </FormGroup>

              <FormGroup row className="p-2">
                <Label for="state_of_origin" sm={3} >State of Origin</Label>
                <Col sm={9}>
                  <CustomInput type="select" id="soo" name="soo" onChange={handleOnChange} >
                    {console.log("yuo", selectedCountry)}
                    <option value="">Select State</option>
                    {
                      country?.states?.map((selectedState) => <option value={selectedState.name}>{selectedState.name}</option>)
                    }
                  </CustomInput>
                </Col>

              </FormGroup>
            </Col>
          </Row>






          {/* <FormGroup row className = "p-2">
                <Label for="exampleFile" sm={2}>File</Label>
                <Col sm={10}>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </Col>
              </FormGroup>
            
              <FormGroup row className = "p-2">
                <Label for="checkbox2" sm={2}>Checkbox</Label>
                <Col sm={{ size: 10 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="checkbox2" />{' '}
                      Check me out
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
      */}

          {/* <FormGroup check row className = "p-2">
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup> */}
        </Container>

      </Form>

    </div>
  );

}

export default ModalRegForm
