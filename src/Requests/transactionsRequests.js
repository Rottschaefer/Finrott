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
      output = response.data.transactionsPerCategory;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const updateTransaction = async (config, body, id) => {
  console.log("updating");
  let output;
  await axios
    .put(`${BASE_URL}/transactions/${id}`, body, config)
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const deleteTransaction = async (config, id) => {
  console.log("deleting");
  let output;
  await axios
    .delete(`${BASE_URL}/transactions/${id}`, config)
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const getFixedTransactionsAmount = async (
  config,
  monthPage,
  yearPage
) => {
  console.log("searching");
  let output;
  await axios
    .get(
      `${BASE_URL}/categories/fixed_transactions?month=${monthPage}&year=${yearPage}`,
      config
    )
    .then((response) => {
      output = response.data.total_amount;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const getFixedTransactions = async (config) => {
  console.log("searching");
  let output;
  await axios
    .get(`${BASE_URL}/fixed_transactions`, config)
    .then((response) => {
      console.log(response.data);
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const updateFixedTransaction = async (config, body, id) => {
  console.log("updating");
  let output;
  await axios
    .put(`${BASE_URL}/fixed_transactions/${id}`, body, config)
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const addFixedTransaction = async (config, body) => {
  console.log("creating");
  let output;
  await axios
    .post(`${BASE_URL}/fixed_transactions/`, body, config)
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};

export const deleteFixedTransaction = async (config, id) => {
  console.log("deleting");
  let output;
  await axios
    .delete(`${BASE_URL}/fixed_transactions/${id}`, config)
    .then((response) => {
      output = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  return output;
};
