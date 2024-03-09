import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Manage_Doctors() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/doctor");
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/doctor/${id}`);
    console.log(res.data);
    fetch();
  };
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    Specialty: "",
    Hospital: "",
  });
  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/doctor/${id}`);
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

    if (formvalue.contact == "") {
      toast.error("Mobile Field is required");
      result = false;
      return false;
    }
    if (formvalue.Specialty == "") {
      toast.error("speciality Field is required");
      result = false;
      return false;
    }
    if (formvalue.Hospital == "") {
      toast.error("hospital Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/doctor/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          Specialty: "",
          Hospital: "",
          contact: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };
  return (
    <>
      <div className="container mt-5">
        <h2>Manage Doctors</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Hospital</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.Specialty}</td>
                  <td>{value.Hospital}</td>
                  <td>{value.contact}</td>
                  <td>{value.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editdata(value.id)}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteHandel(value.id)}
                    >
                      Delete
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
                                        type="text"
                                        className="form-control"
                                        name="Specialty"
                                        value={formvalue.Specialty}
                                        onChange={getform}
                                        id="Specialty"
                                        placeholder="Specialty"
                                      />
                                      <label htmlFor="name">Specialty</label>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-floating">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="Hospital"
                                        value={formvalue.Hospital}
                                        onChange={getform}
                                        id="Hospital"
                                        placeholder="Hospital"
                                      />
                                      <label htmlFor="name">Hospital</label>
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
                                        name="contact"
                                        value={formvalue.contact}
                                        onChange={getform}
                                        id="contact"
                                        placeholder="contact"
                                      />
                                      <label htmlFor="contact">contact</label>
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
                  </td>
                  <td>Unblock</td>
                </tr>
              );
            })}

            {/* Add more rows for additional doctors as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manage_Doctors;
