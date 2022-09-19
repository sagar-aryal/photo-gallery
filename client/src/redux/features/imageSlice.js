import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  images: [],
  loading: false,
  error: false,
};

// base url
const baseURL = "http://localhost:8080/api/v1";

// async function for creating an image
export const uploadImage = createAsyncThunk(
  "image/postImage",
  async (formData) => {
    try {
      const response = await axios.post(`${baseURL}/image-upload`, formData);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

// async function for for getting all images
export const fetchImages = createAsyncThunk("image/getImages", async () => {
  try {
    const response = await axios.get(`${baseURL}/images`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

// image slice
const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchImages.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.loading = false;
      state.images = action.payload;
    },
    [fetchImages.rejected]: (state, action) => {
      state.error = true;
    },
    [uploadImage.pending]: (state, action) => {
      state.loading = true;
    },
    [uploadImage.fulfilled]: (state, action) => {
      state.loading = false;
      state.images.push({ ...action.payload });
    },
    [uploadImage.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const { postImage, getImages } = imageSlice.actions;
export default imageSlice.reducer;
