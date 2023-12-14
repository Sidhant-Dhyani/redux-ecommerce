import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Header = ({ token }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(null);
  const handleCartClick = () => {
    navigate("/cart");
  };
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const userID = decodedToken.id;
        axios
          .get(
            `http://localhost:4000/userInfo/${userID}`
          )
          .then((response) => {
            setFullName(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error("Token parsing error:", error);
      }
    }
  }, [token]);
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Amazon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <FontAwesomeIcon
            onClick={handleCartClick}
            className="icon"
            icon={faCartShopping}
          />
          <div>
            {token ? (
              <div>
                <a className="token">{fullName}</a>
              </div>
            ) : (
              <a className="Header_login_link" href="/login">
                Login
              </a>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.token.token,
});

export default connect(mapStateToProps)(Header);
