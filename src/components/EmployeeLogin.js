import React, { useState, useEffect } from "react";
import "../CSS/styles.css";
import image from "../images/Photo/bgimage1.jpg";
import Footer from "./Footer";
import { Link, NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";


function EmployeeLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [database, setEmployee] = useState([]);

  useEffect(() => {
    async function fetchEmployeeList() {
      try {
        const requestUrl = 'https://panacea-backend.herokuapp.com/employee';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setEmployee(responseJSON);
      } catch {

      }
    }
    fetchEmployeeList();
  }, []);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.EmployeeEmail === uname.value);

    // Compare user info
    if (userData) {
      if (userData.EmployeePassword !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email ID </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <div style={{
        backgroundImage: `url(${image})`,
        height: "900px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }}>
        <p style={{
          fontFamily: 'serif',
          fontWeight: 'bold',
          color: 'maroon',
          padding: '7%',
          paddingBottom:'0%'
        }}>
          “User experience is everything. It always has been, but it’s undervalued and underinvested in. 
          If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. 
          Live and breathe it. Get your whole company on board.”</p> <p style={{
            fontWeight: 'bold',
            paddingLeft:'50%',
            fontFamily: 'serif'
          }}> Evan Williams, Co-Founder, Twitter</p>
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            <h6 style={{ color: "red" }}>Admin Access only</h6>
            {isSubmitted ? <Button variant="success"><NavLink as={Link} to={"/login/logged"} style={{ color: "white", textDecoration: "none" }}>Correct Credentials Click Again For Login In</NavLink></Button> : renderForm}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EmployeeLogin;
