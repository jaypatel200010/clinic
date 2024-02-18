import axios from "axios";
import React, { useState, useEffect } from "react";
function Manage_Appointments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/appointments`);
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/appointments/${id}`);
    fetch();
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Manage Appointments</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Problem Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.Name}</td>
                  <td>{value.Email}</td>
                  <td>{value.Contact}</td>
                  <td>{value.Doctor}</td>
                  <td>{value.Date}</td>
                  <td>{value.Time}</td>
                  <td>{value.Problem}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteHandel(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* Add more rows for additional appointments as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manage_Appointments;
