import axios from "axios";
import { BASE_URL } from "../constants";

export const getProductsByType = async (category = "MALE") => {
  return await axios.get(`${BASE_URL}/products?category=${category}`);
};

export const uploadImage = async (image) => {
  return await axios.post(`${BASE_URL}/s3_file/upload`, image, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
