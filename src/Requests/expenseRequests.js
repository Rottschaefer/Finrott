import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const path = `${process.env.PATH}/expenses`;

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
