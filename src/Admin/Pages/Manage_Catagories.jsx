import axios from "axios";
import React, { useState, useEffect } from "react";

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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_Catagories;
