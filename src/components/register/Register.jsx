import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { userLogin } from "../../redux/actions/auth-actions";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...FormData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FormData.password === FormData.confirmPassword) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/register",
          {
            fullName: FormData.fullName,
            password: FormData.password,
            email: FormData.email,
          }
        );
        const { token } = response.data;
        localStorage.setItem("token", token);
        dispatch(userLogin(token));
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <h1 className="register_heading">Register Form</h1>
      <div className="row justify-content-center ">
        <div className="col-md-3">
          <Form className="row justify-content-center " onSubmit={handleSubmit}>
            <Form.Group controlId="fullname">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={FormData.fullName}
                onChange={handleChange}
                placeholder="Enter Full name"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                placeholder="Enter your emaiL"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={FormData.password}
                onChange={handleChange}
                placeholder="Choose a password"
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={FormData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button
              className="mt-2 register_boot_button"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
