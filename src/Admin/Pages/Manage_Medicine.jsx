import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Manage_Medicine() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/medicine`);
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/medicine/${id}`);
    fetch();
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    Name: "",
    Type: "",
    Description: "",
    Manufacturer: "",
    Price: "",
  });
  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/medicine/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.Name == "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.Type == "") {
      toast.error("Type Field is required");
      result = false;
      return false;
    }
    if (formvalue.Description == "") {
      toast.error("Description Field is required");
      result = false;
      return false;
    }
    if (formvalue.Manufacturer == "") {
      toast.error("Manufacturer Field is required");
      result = false;
      return false;
    }
    if (formvalue.Price == "") {
      toast.error("Price Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/medicine/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          Name: "",
          Type: "",
          Description: "",
          Manufacturer: "",
          Price: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };
  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Medicines</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Manufacturer</th>
                <th>Price(Rs.)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.Name}</td>
                    <td>{value.Type}</td>
                    <td>{value.Description}</td>
                    <td>{value.Manufacturer}</td>
                    <td>{value.Price}</td>
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
                                          name="Name"
                                          value={formvalue.Name}
                                          onChange={getform}
                                          id="Name"
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
                                          name="Type"
                                          value={formvalue.Type}
                                          onChange={getform}
                                          id="Type"
                                          placeholder="Type"
                                        />
                                        <label htmlFor="Type">Type</label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="Description"
                                          value={formvalue.Description}
                                          onChange={getform}
                                          id="Description"
                                          placeholder="Description"
                                        />
                                        <label htmlFor="name">
                                          Description
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="Manufacturer"
                                          value={formvalue.Manufacturer}
                                          onChange={getform}
                                          id="Manufacturer"
                                          placeholder="Manufacturer"
                                        />
                                        <label htmlFor="Manufacturer">
                                          Manufacturer
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="Price"
                                          value={formvalue.Price}
                                          onChange={getform}
                                          id="Price"
                                          placeholder="Price"
                                        />
                                        <label htmlFor="Price">Price</label>
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
                  </tr>
                );
              })}

              {/* Add more rows for additional medicines as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Medicine;
