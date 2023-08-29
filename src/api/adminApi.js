import axios from "axios";
import { BASE_URL } from "../constants";

export const getProductsByType = async (category = "MALE") => {
  return await axios.get(`${BASE_URL}/products?category=${category}`);
};
