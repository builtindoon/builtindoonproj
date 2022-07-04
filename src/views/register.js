import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./footer";

const Registration = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ padding: "30px 10px" }}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>User Registration</h1>
            <Form className="form-horizontal" >
              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label className="control-label col-sm-2">
                  Name 
                </Form.Label>
                <div className="col-sm-10">
                <Form.Control type="text" placeholder="First Name" />

                <Form.Control type="text" placeholder="Last Name" />
                </div>
              </Form.Group>

              <Form.Group className="mb-1"  style={{ display: "flex" }}>
                <Form.Label  className="control-label col-sm-2">Phone Number </Form.Label>
                <div className="col-sm-10">
                <Form.Control type="number" placeholder="Please enter valid phone number" />
                </div>
              </Form.Group>

              <Form.Group className="mb-1" style={{ display: "flex" }}>
                <Form.Label  className="control-label col-sm-2">Email</Form.Label>
                <div className="col-sm-10">
                <Form.Control type="email" placeholder="example@example.com" />
                </div>
              </Form.Group>

              <Form.Group className="mb-1" style={{display: "flex"}}>
                <Form.Label  className="control-label col-sm-2">Address</Form.Label>
                <div className="col-sm-10">
                <Form.Control type="text" placeholder="Street Address " />

                <Form.Control type="text" placeholder="Street Address Line 2 " />

                <Form.Control type="text" placeholder="City " />

                <Form.Control type="text" placeholder="Stste/Province" />

                <Form.Control type="text" placeholder="Postal/Zip code" />
                </div>
              </Form.Group>
              <Button variant="none" type="submit">
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Register
              </Button>
            </Form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
