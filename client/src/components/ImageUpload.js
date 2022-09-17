import React from "react";

const ImageUpload = () => {
  return (
    <div>
      <form>
        <h2>Upload Your Images</h2>
        <div>
          <label>Upload Images</label>
        </div>
        <br />
        <div>
          <input type="file" name="images" accept="image/*" required />
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
