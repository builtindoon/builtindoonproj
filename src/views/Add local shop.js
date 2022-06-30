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
          <h1>Add local shop </h1>

          <Form>
            <Form.Group className="mb-1">
              <Form.Label>Shop Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Shop Address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="State...">
                <option>State...</option>
                <option value="1">Delhi</option>
                <option value="2">Pune</option>
                <option value="3">Mumbai</option>
                <option value="4">Bangaluru</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>District</Form.Label>
              <Form.Select defaultValue="State...">
                <option>District...</option>
                <option value="1">Bihar</option>
                <option value="2">Dehradun</option>
                <option value="3">Lucknow</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Landmark</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <>
              <Form.Group>
                <Form.Label>Delivery Provided:</Form.Label>
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
              </Form.Group>
            </>
            <Form.Label>Items to be added</Form.Label>
            <br></br>

            <Button variant="none" type="submit">
              Add Store
            </Button>
            <Button variant="success" type="submit">
              Cancel
            </Button>
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Addlocalshop;
