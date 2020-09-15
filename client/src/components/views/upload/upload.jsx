import React from "react";
import "./upload.css";

const Upload = (props) => {
  const { size = "small", label = "", onChange, ...rest } = props;

  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <>
      <label
        htmlFor="file__upload"
        className={`
          file__upload-label
          ${size}
          `}
      >
        {label}
      </label>
      <input type="file" id="file__upload" {...rest} onChange={handleChange} />
    </>
  );
};

export default Upload;
