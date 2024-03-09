import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_Catagories() {
  const redirect = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      fetch();
    } else {
      redirect("/admin-login");
    }
  }, []);
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/admin/${localStorage.getItem("adminid")}`
    );
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    Cate_name: "",
    Cate_Img: "",
    Cate_Desc: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/categories`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        Cate_name: "",
        Cate_Img: "",
        Cate_Desc: "",
      });
      alert("Categories submited success");
      return false;
    }
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2>Add Category</h2>
          <form action="" method="post" onSubmit={submithandel}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter category name"
                required
                name="Cate_name"
                value={formvalue.Cate_name}
                onChange={getform}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="url"
                className="form-control"
                id="image"
                placeholder="Image url"
                accept="url"
                required
                name="Cate_Img"
                value={formvalue.Cate_Img}
                onChange={getform}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Description:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Description"
                required
                name="Cate_Desc"
                value={formvalue.Cate_Desc}
                onChange={getform}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit.
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add_Catagories;
