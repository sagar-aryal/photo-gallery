import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../redux/features/imageSlice";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Multer accepts form-data
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    dispatch(uploadImage(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Upload Your Images</h2>
        <div>
          <label>Upload Images</label>
        </div>
        <br />
        <div>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={handleChange}
          />
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
