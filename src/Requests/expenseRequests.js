import axios from "axios";
import { BASE_URL } from "../constants.js";

const path = `${BASE_URL}/expenses`;

export const getExpenses = async () => {
  let output;

  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    // Handle error: token not found
    throw new Error("Token not found in local storage.");
  }

  const headers = {
    Authorization: token,
  };

  await axios
    .get(path, { headers: headers })
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      // console.log(error.response);
    });

  return output;
};

export const addExpense = async (body) => {
  let output;

  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    // Handle error: token not found
    throw new Error("Token not found in local storage.");
  }

  const headers = {
    Authorization: token,
  };

  await axios
    .post(path, body, { headers: headers })
    .then((response) => {
      console.log(response);

      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
