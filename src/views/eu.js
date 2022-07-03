import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./footer";
export class EU extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
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
              <h1>EU Registration</h1>
              <Form className="form-horizontal">
                <Form.Group className="mb-1" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    Name 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="text" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-1" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    Phone Number 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="number" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-1" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    Email 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="email" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-1" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    Address 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="text" placeholder="Street Address" />

                    <Form.Control
                      type="text"
                      placeholder="Street Address Line 2"
                    />

                    <Form.Control type="text" placeholder="City" />

                    <Form.Control type="text" placeholder="State/Province" />

                    <Form.Control type="text" placeholder="Postal/Zip Code" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-1" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    Registered Business 
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    name="prachi"
                    style={{ marginLeft: "30px" }}
                    label="yes"
                  />
                  <Form.Check
                    type="radio"
                    name="prachi"
                    style={{ marginLeft: "30px" }}
                    label="No"
                  />
                </Form.Group>

                <Form.Group className="mb-1" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    GST Number 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="number" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    TAN Number 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="number" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" style={{ display: "flex" }}>
                  <Form.Label className="control-label col-sm-2">
                    Registered business Address 
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control type="text" />
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
  }
}

export default EU;
