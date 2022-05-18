import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  ReCAPTCHA  from "react-google-recaptcha";

class state extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries : [],
            states : [],
            cities : [],
            selectedCountry : 'Country',
            selectedState : 'State'
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }
   
    componentDidMount() { //https://reactjs.org/docs/react-component.html#componentdidmount
        this.setState({
            countries : [
                { name: 'Philippines', states: [ 
                    {name: 'Central Luzon', cities: ['Angeles City', 'Olongapo', 'San Fernando']},
                    {name: 'NCR', cities: ['Pasay City', 'Makati', 'Marikina']}
                ]},
                { name: 'United States of America', states: [ 
                    {name: 'California', cities: ['Sacramento', 'Los Angeles', 'Bakersfield', 'Carson']},
                    {name: 'Florida', cities: ['Tallahassee', 'Jacksonville']},
                    {name: 'Illinois', cities: ['Springfield', 'Chicago']},
                    {name: 'New Jersey', cities: ['Trenton', 'Newark']}
                ]},
                     
            ]
        });
    }
   
    changeCountry(event) {
        this.setState({selectedCountry: event.target.value});
        this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    }
 
    changeState(event) {
        this.setState({selectedState: event.target.value});
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
    }
     
    render() {
        return (
            <div className="container">
                <div className="row">
                <h2>ReactJS Dependent Dropdown - Country, State and City</h2>
     
                <div className="form-group">
                    <label style={styles.lbl}>Country</label>
                    <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>Country</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="form-group">
                    <label style={styles.lbl}>State</label>
                    <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>State</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                <div className="form-group">
                    <label style={styles.lbl}>City</label>
                    <select className="form-select" placeholder="City">
                        <option>City</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-success" style={styles.btn}>Submit</button>
                </div>
            </div>
        )
    }
}
 
export default state;
 
// Just some styles
const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },  
  btn: {
    width:250,
    marginLeft:15,
    marginTop: 15,
  }
};
