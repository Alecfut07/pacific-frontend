import axios from "axios";
const { VITE_HOST, VITE_COTIZACION_LAB_VIEW_SET } = import.meta.env;
// import { host } from "../api/host";
// import { COTIZACION_LAB_VIEW_SET } from "../utils/data";

export const getQuotes = async () => {
  try {
    const { data } = await axios.get(
      `${VITE_HOST}${VITE_COTIZACION_LAB_VIEW_SET}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuote = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewQuote = async (
  folio,
  amount_item,
  price_total_iva,
  accepted,
  additional_info,
  items_lab,
) => {
  const formData = new FormData();
  formData.append("folio", folio);
  formData.append("amount_item", amount_item);
  formData.append("price_total_iva", price_total_iva);
  formData.append("accepted", accepted);
  const additionalInfoJson = JSON.stringify(additional_info);
  formData.append("additional_info", additionalInfoJson);
  const urlsItemsLab = [...items_lab];
  urlsItemsLab.forEach((url) => {
    formData.append("items_lab", url);
  });

  const axiosConfig = {
    headers: {
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
      // "x-csrftoken": `${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const { data } = await axios.post(
      `${VITE_HOST}${VITE_COTIZACION_LAB_VIEW_SET}`,
      formData,
      axiosConfig,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateQuote = async (
  url,
  folio,
  amount_item,
  price_total_iva,
  accepted,
  additional_info,
  items_lab,
) => {
  const formData = new FormData();
  formData.append("folio", folio);
  formData.append("amount_item", amount_item);
  formData.append("price_total_iva", price_total_iva);
  formData.append("accepted", accepted);
  const additionalInfoJson = JSON.stringify(additional_info);
  formData.append("additional_info", additionalInfoJson);
  const urlsItemsLab = [...items_lab];
  urlsItemsLab.forEach((url) => {
    formData.append("items_lab", url);
  });

  const axiosConfig = {
    headers: {
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
      // "x-csrftoken": `${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const { data } = await axios.put(url, formData, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteQuote = async (url) => {
  const axiosConfig = {
    headers: {
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
      //   "x-csrftoken": `${accessToken}`,
    },
  };

  try {
    await axios.delete(url, axiosConfig);
  } catch (error) {
    console.log(error);
  }
};
