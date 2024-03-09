import React, { useState, useEffect } from "react";
import axios from "axios";

import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

function View_service() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const { cate_id } = useParams();
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/services?Cate_id=${cate_id}`
    );
    console.log(res.data);
    setData(res.data);
  };

  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* <Header2 title={"Sevice"} /> */}
        <Header2 title={"Sevice"} />
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span />
                Our Services
                <span />
              </p>
              <h1 className="text-center mb-5">What Solutions We Provide</h1>
            </div>
            <div className="row g-4">
              {data.map((value, index, arr) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="service-item bg-light rounded h-100 p-5">
                      <div
                        className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                        style={{ width: 65, height: 65 }}
                      >
                        <img
                          src={value.Image}
                          width="50%"
                          height="50px"
                          alt=""
                        />
                      </div>
                      <h5 className="mb-3">
                        {value.Name}
                        {/* : {value.Cate_id} */}
                      </h5>
                      <h5 className="mb-3"> {value.Cost}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Service End */}

        <Footer />
      </div>
    </>
  );
}

export default View_service;
