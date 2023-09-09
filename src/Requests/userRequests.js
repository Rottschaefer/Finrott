import axios from "axios";
import { BASE_URL } from "../constants.js";

const path = `${BASE_URL}/users`;

export const signUp = async (body) => {
  let output;
  await axios
    .post(`${path}/signup`, body)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        output = response;
      }
    })
    .catch((error) => {
      console.log("Signup error:", error.response);
      throw new Error(error);
    });

  return output;
};

export const getUsers = async () => {
  let output;
  await axios
    .get(path)
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
