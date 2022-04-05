import React from "react";
import error from "../../image/404.jpg";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%", height: "600px" }} src={error} alt="" />
    </div>
  );
};

export default NotFound;
