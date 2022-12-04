import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <InfinitySpin width="200" color="#ff1f59" />
    </div>
  );
};

export default Spinner;
