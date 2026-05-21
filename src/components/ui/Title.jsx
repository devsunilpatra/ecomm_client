import React from "react";

const Title = ({ normal_txt, bold_txt }) => {
  return (
    <h2 className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {normal_txt}
        <span className="text-gray-800 font-medium"> {bold_txt}</span>
      </p>
      <p className="w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700"></p>
    </h2>
  );
};

export default Title;
