import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header2 from "../Components/Header2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const redirect = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      fetch();
    } else {
      redirect("/");
    }
  }, []);

  // fetch data from api
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/${localStorage.getItem("userid")}`
    );
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    img: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is required");
      result = false;
      return false;
    }

    if (formvalue.mobile == "") {
      toast.error("Mobile Field is required");
      result = false;
      return false;
    }
    if (formvalue.img == "") {
      toast.error("Image Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/user/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          mobile: "",
          img: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };
  return (
    <div className="container-xxl bg-white p-0">
      <Header2 title={"Profile"} />

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span />
              My Profile
              <span />
            </p>
            <h1 className="text-center mb-5">
              Edit Profile and Manage Profile
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="offset-lg-4 col-lg-4 col-md-6 offset-md-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item bg-light rounded">
                <div className="text-center border-bottom p-4">
                  <img
                    className="img-fluid rounded-circle mb-4"
                    src={data.img}
                    alt
                  />
                  <h5>{data.name}</h5>
                  <span>Email : {data.email}</span>
                  <br />
                  <br />
                  <span>ID : {data.id}</span>
                  <br />
                  <br />
                  <span>Mobile : {data.mobile}</span>
                  <br />
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={() => editdata(data.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Edit Profile
                  </button>

                  <div className="modal" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Edit Profile</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                          <div className="container">
                            <form action="" method="post">
                              <div className="row g-3">
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="name"
                                      value={formvalue.name}
                                      onChange={getform}
                                      id="name"
                                      placeholder="Your Name"
                                    />
                                    <label htmlFor="name">Your Name</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      value={formvalue.email}
                                      onChange={getform}
                                      id="email"
                                      placeholder="Your Email"
                                    />
                                    <label htmlFor="email">Your Email</label>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-floating">
                                    <input
                                      type="number"
                                      className="form-control"
                                      name="mobile"
                                      value={formvalue.mobile}
                                      onChange={getform}
                                      id="email"
                                      placeholder="Your Email"
                                    />
                                    <label htmlFor="email">Your Mobile</label>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-floating">
                                    <input
                                      type="url"
                                      className="form-control"
                                      name="img"
                                      value={formvalue.img}
                                      onChange={getform}
                                      id="email"
                                      placeholder="Your Email"
                                    />
                                    <label htmlFor="email">Your Image</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <button
                                    onClick={submithandel}
                                    data-bs-dismiss="modal"
                                    className="btn btn-primary w-100 py-3"
                                    type="submit"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      <Footer />
    </div>
  );
}

export default Profile;
