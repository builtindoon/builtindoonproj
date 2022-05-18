import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Addlocalshop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleShopName = this.handleShopName.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleShopName(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <form onShopName={this.handleShopName}>
          <label>
            ShopName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="shopname" value="Shopname" />
          <lable>
            ShopAddress:
            <input type="text" value={this.state.value} onChange={this.handleChange} />     </lable>
            <input type="shopaddress" value="Shopaddress" />
            <label>State</label>
            <select>
               <option value="delhi">Delhi</option>
               <option value="pune">Pune</option>
               <option value="noida">Noida</option>
            </select>
            <label>District</label>
            <select>
               <option value="dehradun">dehradun</option>
               <option value="varanasi">Varanasi</option>
               <option value="lucknow">Lucknow</option>
            </select>
            <label>
            Pincode:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="pincode" value="Pincode" />
          <label>
          Landmark:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="landmark" value="Landmark" />
          <label>
          Phone Number:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="number" value="Number" />
         <label>
        <p>Delivery Provided</p>
        <input type="radio" /> Yes</label>
        <label>
        <input type="radio" />No</label>
        <a href="/ addlocalshop">Addlocalshop</a>

         </form>
         
      );
    }
  }

  export default Addlocalshop;