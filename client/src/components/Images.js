import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/features/imageSlice";

import ImageItems from "./ImageItems";

const Images = () => {
  const { images, loading, error } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  console.log(images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div>
      <h1>List of all Images</h1>
      {loading && <h2>Loading...</h2>}
      {!error &&
        images.images?.map((image) => (
          <ImageItems key={image._id} {...image} />
        ))}
    </div>
  );
};

export default Images;
