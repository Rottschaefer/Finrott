import axios from "axios";
import { BASE_URL } from "../constants";

export const getAmountsPerCategory = async (config) => {
  let output;
  await axios
    .get(`${BASE_URL}/categories/transactions`, config)
    .then((response) => {
      //   console.log(response.data.amountsPerCategory);
      output = response.data.amountsPerCategory;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
