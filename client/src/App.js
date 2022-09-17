import React from "react";

const App = () => {
  return (
    <form
      method="POST"
      action="/profile-upload-single"
      enctype="multipart/form-data"
    >
      <div>
        <label>Upload Images</label>
      </div>
      <br />
      <div>
        <input type="file" name="images" required />
        <input type="submit" value="Upload" />
      </div>
    </form>
  );
};

export default App;
