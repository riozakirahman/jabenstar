import React from "react";

import "../../styles/join.css";
const Join = () => {
  return (
    <div className="join mt-5 mb-5 d-flex justify-content-around align-items-center flex-wrap">
      <div className="join-us d-flex flex-column justify-content-center align-items-center">
        <h2 className="join-us__title mb-4">Ayo Gabung Jabenstar !</h2>
        <p className="join-us__paragraph mb-4 text-center">
          Kami terbuka untuk generasi muda jatibening estate
        </p>
        <a className="join-us__anchor p-2 ps-3 pe-3 bg-danger rounded text-decoration-none text-light">
          Join Us
        </a>
      </div>
      <div className="join__image" src=""></div>
    </div>
  );
};

export default Join;
