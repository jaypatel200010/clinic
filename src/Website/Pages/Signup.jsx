import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Signup() {
  return (
    <div>
      <Header2 title={"signup"} />
      <div className="container mt-5">
        <h2>Signup</h2>
        <form>
          <div className="form-group">
            <label htmlFor="clinicName">Clinic Name:</label>
            <input
              type="text"
              className="form-control"
              id="clinicName"
              placeholder="Enter clinic name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
