import React from "react";
import Footer from "./footer";
import Header from "./Header";

export default function SignUp(props) {
  return (
    <div>
      <Header aS={props.aS} />
      <div className="container" style={{ padding: "30px 0" }}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form>
              <h3>Login</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Submit
              </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="cancel" className="btn btn-primary">
                Cancel
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
              <p className="forgot-password text-right">
                <a href="/register">Register</a>
              </p>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
