import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { userLogin, userLogout } from "../../redux/actions/auth-actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://e-commerce-backend-omega-seven.vercel.app/api/auth/login",
        {
          email: FormData.email,
          password: FormData.password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch(userLogin(token));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(userLogout());
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
            <Button
              className="mt-2 login_boot_button"
              variant="primary"
              onClick={handleLogout}
            >
              Logout
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
