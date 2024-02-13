import React from "react";

function Admin_Login() {
  return (
    <>
      <div>
        <div className="content-wrapper pt-5">
          <div className="container">
            <div className="row pad-botm">
              <div className="col-md-12">
                <h4 className="header-line">Admin Login</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-info">
                  <form action="/action_page.php">
                    <div className="mb-3 mt-3">
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pwd" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_Login;
