import React from "react";
import "./SignUpPage.css";

function SignUpPage() {
  return (
    <div className="signup-page">
      <h1 className="signup-title">Sign Up</h1>
      <div className="signup-form">
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className="form-submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
