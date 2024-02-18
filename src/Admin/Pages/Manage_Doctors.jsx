import axios from "axios";
import React, { useEffect, useState } from "react";

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
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteHandel(value.id)}
                    >
                      Delete
                    </button>
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
