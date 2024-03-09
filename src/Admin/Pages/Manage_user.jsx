import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Manage_user() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    fetch();
  };

  const statusHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    if (res.data.status == "Block") {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Unblock",
      });
      if (res.status == 200) {
        toast.success("Status Unblock success");
        fetch();
      }
    } else {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Block",
      });
      if (res.status == 200) {
        localStorage.removeItem("userid");
        localStorage.removeItem("uname");
        toast.success("Status Block success");
        fetch();
      }
    }
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Users</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
                {/* <th>Status</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                    <td>{value.password}</td>
                    {/* <td>{value.status}</td> */}
                    <td>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => statusHandel(value.id)}
                      >
                        {value.status}
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteHandel(value.id)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-sm btn-primary">Edit</button>
                    </td>
                  </tr>
                );
              })}
              {/* Add more rows for additional patients as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_user;
