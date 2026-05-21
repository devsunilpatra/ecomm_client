import React from "react";
// import { useForm } from 'react-hook-form'

const InputField = ({ label, error, className = "", ...props }) => {
  // const {register} = useForm()

  return (
    <div className="w-full">
      {label && <label className="block mb-1">{label}</label>}
      <input
        {...props}
        className={`w-full px-3 py-2 border border-grey-800 ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
