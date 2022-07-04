import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormCheck, FormLabel } from "react-bootstrap";
import Header from "./Header";
import Footer from "./footer";
function handleOnChange(value) {}
class Addlocalshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleShopName = this.handleShopName.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleShopName(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ padding: "30px 10px" }}>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>Add local shop </h1>

              <Form className="form-horizontal" >
                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                  <Form.Label className="control-label col-sm-2">Shop Name</Form.Label>
                  <div className="col-sm-10">
                  <Form.Control type="text" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                  <Form.Label className="control-label col-sm-2">Shop Address</Form.Label>
                  <div className="col-sm-10">
                  <Form.Control type="text" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                  <Form.Label className="control-label col-sm-2">State</Form.Label>
                  <div className="col-sm-10">
                  <Form.Select defaultValue="State...">
                    <option>State...</option>
                    <option value="1">Delhi</option>
                    <option value="2">Pune</option>
                    <option value="3">Mumbai</option>
                    <option value="4">Bangaluru</option>
                  </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                  <Form.Label className="control-label col-sm-2">District</Form.Label>
                  <div className="col-sm-10">
                  <Form.Select defaultValue="State...">
                    <option>District...</option>
                    <option value="1">Bihar</option>
                    <option value="2">Dehradun</option>
                    <option value="3">Lucknow</option>
                  </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                  <Form.Label className="control-label col-sm-2">Pincode</Form.Label>
                  <div className="col-sm-10">
                  <Form.Control type="text" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                  <Form.Label className="control-label col-sm-2">Landmark</Form.Label>
                  <div className="col-sm-10">
                  <Form.Control type="text" />
                  </div>
                </Form.Group>

                <>
                <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">Delivery Provided:</Form.Label>
                    <div className="col-sm-10">
                    <Form.Check
                      type="radio"
                      name="group1"
                      id={`default-radio`}
                      label={`Yes`}
                    />
                    <Form.Check
                      type="radio"
                      name="group1"
                      id={`default-radio`}
                      label={`No`}
                    />
                    </div>
                  </Form.Group>
                </>
                <Form.Label className="control-label col-sm-2">Items to be added</Form.Label>
                <br></br>

                <Button variant="none" type="submit">
                  Add Store
                </Button>
                <Button variant="success" type="submit">
                  Cancel
                </Button>
              </Form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Addlocalshop;