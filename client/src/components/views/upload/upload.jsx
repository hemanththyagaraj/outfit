import React from "react";
import Reader from "../../../_helpers/reader";
import "./upload.css";

const Upload = (props) => {
  const { size = "small", label = "", onChange, defaultPic = '', showImage = true,...rest  } = props;

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new Reader(file);
    const result = await reader.convertToDataUrl();
    onChange(file, result)
  };

  return (
    <div className="profilepic__container">
      {
        showImage && <div
          className="profile__picture"
          style={{ backgroundImage: `url(${defaultPic})` }}
        />
      }
      <label
        htmlFor="file__upload"
        className={`
          file__upload-label
          ${size}
          `}
      >
        {label}
      </label>
      <input type="file" id="file__upload" {...rest} onChange={handleUpload} />
    </div>
  );
};

export default Upload;
