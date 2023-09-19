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
      console.log(response.data);
      output = response.data;
    })
    .catch((error) => {});

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

export const deleteExpense = async (body) => {
  let output;

  // const token = JSON.parse(localStorage.getItem("token"));
  // if (!token) {
  //   // Handle error: token not found
  //   throw new Error("Token not found in local storage.");
  // }

  // const headers = {
  //   Authorization: token,
  // };

  await axios
    .delete(`${path}/${body.id}`)
    .then((response) => {
      console.log(response);

      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const updateExpense = async (body) => {
  let output;

  // const token = JSON.parse(localStorage.getItem("token"));
  // if (!token) {
  //   // Handle error: token not found
  //   throw new Error("Token not found in local storage.");
  // }

  // const headers = {
  //   Authorization: token,
  // };

  await axios
    .put(`${path}/${body.id}`, body)
    .then((response) => {
      console.log(response);

      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
