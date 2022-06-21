import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Shop(props) {
  return (
    <div>
      <Header isActiveShop={props.isActiveShop} />
      <div className="container">
        <form>
          <div className="row">
            <label for="name">Shop Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="row">
            <label for="add">Shop Address</label>
            <input type="text" id="add" className="form-control" />
          </div>
          <div className="row" style={{ margin: "30px 0" }}>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select state</option>
              <option value="1">Delhi</option>
              <option value="2">Pune</option>
              <option value="3">Mumbai</option>
              <option value="3">Bangaluru</option>
            </select>
          </div>
          <div className="row" style={{ margin: "30px 0" }}>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select district</option>
              <option value="1">Bihar</option>
              <option value="2">Dehradun</option>
              <option value="3">Lucknow</option>
            </select>
          </div>
          <div className="row">
            <label for="pin">Pincode</label>
            <input type="text" id="pin" className="form-control" />
          </div>
          <div className="row">
            <label for="land">Landmark</label>
            <input type="text" id="land" className="form-control" />
          </div>
          <div className="row" style={{ display: "block", margin: "30px 0" }}>
            <label>Delivery provided</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>
          </div>
          <div className="row">
          <input className="btn btn-primary" type="submit" value="Add store" /><br />     
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
