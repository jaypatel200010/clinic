import axios from "axios";
import React, { useState, useEffect } from "react";
function Manage_Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/services`);
    console.log(res.data);
    setData(res.data);
  };
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`);
    fetch();
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Manage Medical Services</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cost(Rs.)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>1</td>
                <td>Service A</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td>$100</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr> */}
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.Name}</td>
                    <td>{value.Description}</td>
                    <td>{value.Cost}</td>
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
              {/* Add more rows for additional medical services as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Services;
