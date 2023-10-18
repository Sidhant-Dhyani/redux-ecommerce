import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:4000/api/auth/login", {email: FormData.email, password: FormData.password});
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  return (
    <div>
      <h1 className="login_heading">Login Form</h1>
      <div className="row justify-content-center ">
        <div className="col-md-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={FormData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button
              className="mt-2 login_boot_button"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
            <br />
            click to
            <a className="register_link" href="/Register">
              Register
            </a>
            here
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
