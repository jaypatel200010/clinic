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
                <th>Cate_Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cost(Rs.)</th>
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.Cate_id}</td>
                    <td>{value.Name}</td>
                    <td>{value.Service_Desc}</td>
                    <td>{value.Cost}</td>
                    <td>
                      <img src={value.Image} alt="" width="50px" />
                    </td>
                    <td>{value.Status}</td>
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
