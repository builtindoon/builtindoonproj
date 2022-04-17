import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function App() {
  const initialValues={name:"",firstname:"",lastname:"",phonen:"",email:"",addres:"",city:""};
  const[formValues,setFormValues]=useState(initialValues);

  const handleChange=(e)=> {
    const {name,value}=e.target;
    setFormValues({ ...formValues,[name]: value });
    console.log(formValues);

  };
  const handleSubmit=(e) => {
    e.preventDefault();
  };
  return (

    <div className="container">
      <h1>User Registration</h1>
    <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" />
    <Form.Text className="text-muted">
      First Name
    </Form.Text>

    <Form.Control type="text" />
    <Form.Text className="text-muted">
      Last Name
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" />
    <Form.Text className="text-muted">
     Please enter valid phone number
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" />
    <Form.Text className="text-muted">
     example@example.com
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" />
    <Form.Text className="text-muted">
     Street Address
    </Form.Text>

    <Form.Control type="text" />
    <Form.Text className="text-muted">
     Street Address Line 2
    </Form.Text>

    <Form.Control type="text" />
    <Form.Text className="text-muted">
     City
    </Form.Text>

    <Form.Control type="text" />
    <Form.Text className="text-muted">
     State/Province
    </Form.Text>

    <Form.Control type="text" />
    <Form.Text className="text-muted">
     Postal/Zip Code
    </Form.Text>

    <Form.Control type="text" />
    <Form.Text className="text-muted">
     Postal/Zip Code
    </Form.Text>
  </Form.Group>
  
  <Button variant="none" type="submit">
    Cancel
  </Button>
  <Button variant="success" type="submit">
    Register
  </Button>
</Form>
</div>

  );
}

export default App;