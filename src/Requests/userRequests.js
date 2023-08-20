import axios from "axios";

const path = "http://localhost:3003/users";

// const body = {
//   name: "Teste02",
//   email: "teste02@gmail.com",
//   password: "12345",
// };

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
      console.log(error.response);
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
