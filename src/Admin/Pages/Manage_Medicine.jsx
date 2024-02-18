import axios from "axios";
import React, { useState, useEffect } from "react";
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

              {/* Add more rows for additional medicines as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Medicine;
