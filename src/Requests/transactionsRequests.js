import axios from "axios";
import { BASE_URL } from "../constants";

export const getAmountsPerCategory = async (config, monthPage, yearPage) => {
  console.log("searching");
  let output;
  await axios
    .get(
      `${BASE_URL}/categories/transactions?month=${monthPage}&year=${yearPage}`,
      config
    )
    .then((response) => {
      console.log(response.data.amountsPerCategory);
      output = response.data.amountsPerCategory;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
