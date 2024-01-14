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

export const getTransactionsPerCategory = async (
  config,
  monthPage,
  yearPage,
  categoryId
) => {
  console.log("searching");
  console.log(categoryId);
  let output;
  await axios
    .get(
      `${BASE_URL}/categories/transactions/${categoryId}?month=${monthPage}&year=${yearPage}`,
      config
    )
    .then((response) => {
      console.log(response.data);
      output = response.data.transactionsPerCategory;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const addTransaction = async (config, body) => {
  console.log("creating");
  let output;
  await axios
    .post(`${BASE_URL}/transactions/`, body, config)
    .then((response) => {
      console.log(response.data);
      output = response.data.transactionsPerCategory;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
