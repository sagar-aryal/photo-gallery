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
          <input type="file" name="images" required />
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
