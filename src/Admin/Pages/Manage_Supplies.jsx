import axios from "axios";
import React, { useState, useEffect } from "react";

function Manage_Supplies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/supplies`);
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/supplies/${id}`);
    fetch();
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Medical Supplies</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Quantity</th>
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
                    <td>{value.Category}</td>
                    <td>{value.Description}</td>
                    <td>{value.Quantity}</td>
                    <td>{value.Price}</td>
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

              {/* Add more rows for additional medical supplies as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Supplies;
