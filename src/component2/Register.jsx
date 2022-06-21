import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./register.css";

export default function Register(props) {
  return (
    <div>
      <Header isActiveRegister={props.isActiveRegister} />
      <div className="wrap" style={{height:"60vh"}}>
        <input type="checkbox" id="form_switch" style={{display: "none"}} />
        <div className="flipcard">
          <div className="flipcard-inner">
            <div className="flipcard-front">
              <form className="login-form" action="">
                <div className="form-header">
                  <h3>Login Form</h3>
                  <p>Login to access your dashboard</p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="email"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <button className="form-button" type="submit">
                    Login
                  </button>
                </div>
                <div className="form-footer">
                  Don't have an account?{" "}
                  <label className="label-highlight" for="form_switch">
                    {" "}
                    Sign Up{" "}
                  </label>
                </div>
              </form>
            </div>
            <div className="flipcard-back">
              <form className="login-form" action="">
                <div className="form-header">
                  <h3>Signup Form</h3>
                  <p>Register for a new account</p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="email"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="form-button form-button-register"
                    type="submit"
                  >
                    Signup
                  </button>
                </div>
                <div className="form-footer">
                  Already have an account?{" "}
                  <label className="label-highlight" for="form_switch">
                    {" "}
                    Login
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
