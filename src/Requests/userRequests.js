import axios from "axios";
import { BASE_URL } from "../constants.js";
const path = `${BASE_URL}/users`;

export const signUp = async (body) => {
  let output;
  await axios
    .post(`${path}`, body)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        output = response;
      }
    })
    .catch((error) => {
      console.log(error.response.data);
      throw new Error(error.response.data);
    });

  return output;
};

export const logIn = async (body) => {
  let output;
  await axios
    .post(`${BASE_URL}/auth/login`, body)
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      output = response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return output;
};

export const logInWithToken = async (config) => {
  let output;
  await axios
    .post(`${BASE_URL}/auth/login`, {}, config)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      output = response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return output;
};

// export const getUsers = async () => {
//   let output;
//   await axios
//     .get(path)
//     .then((response) => {
//       output = response.data;
//     })
//     .catch((error) => {
//       console.log(error.response);
//     });

//   return output;
// };
