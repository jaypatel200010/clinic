import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Manage_Catagories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    Cate_name: "",
    Cate_Img: "",
    Cate_Desc: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.Cate_name == "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.Cate_Img == "") {
      toast.error("Img Field is required");
      result = false;
      return false;
    }
    if (formvalue.Cate_Desc == "") {
      toast.error("Description Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/categories/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          Cate_name: "",
          Cate_Img: "",
          Cate_Desc: "",
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
          <h2>Manage Categories</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cate_name</th>
                <th>Cate_Img</th>
                <th>Cate_Desc</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.Cate_name}</td>
                    <td>
                      <img src={value.Cate_Img} alt="" width="50px" />
                    </td>
                    <td>
                      <p>{value.Cate_Desc}</p>
                    </td>
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
                                          name="Cate_name"
                                          value={formvalue.Cate_name}
                                          onChange={getform}
                                          id="Cate_name"
                                          placeholder="Cate_name"
                                        />
                                        <label htmlFor="name">Cate_name</label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating">
                                        <input
                                          type="url"
                                          className="form-control"
                                          id="Cate_Img"
                                          placeholder="Image url"
                                          accept="url"
                                          required
                                          name="Cate_Img"
                                          value={formvalue.Cate_Img}
                                          onChange={getform}
                                        />
                                        <label htmlFor="Type">Cate_Img</label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="Cate_Desc"
                                          value={formvalue.Cate_Desc}
                                          onChange={getform}
                                          id="Cate_Desc"
                                          placeholder="Cate_Desc"
                                        />
                                        <label htmlFor="name">Cate_Desc</label>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Catagories;
