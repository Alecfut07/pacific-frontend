import axios from "axios";
import { host } from "../api/host";
import { ITEM_LAB_VIEW_SET } from "../utils/data";

export const getItemsLab = async () => {
  try {
    const { data } = await axios.get(`${host}${ITEM_LAB_VIEW_SET}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItemLab = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewItemLab = async (
  name,
  price,
  category,
  category_page,
  main_image,
  description,
  quantity_available,
  is_featured,
) => {
  const body = {
    name,
    price,
    category,
    category_page,
    main_image,
    description,
    quantity_available,
    is_featured,
  };

  console.log("body: ", body);

  const axiosConfig = {
    headers: {
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
      //   "x-csrftoken": `${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const { data } = await axios.post(
      `${host}${ITEM_LAB_VIEW_SET}`,
      body,
      axiosConfig,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateItemLab = async (
  url,
  name,
  price,
  category,
  category_page,
  main_image,
  description,
  quantity_available,
  is_featured,
  created_at,
) => {
  const body = {
    name,
    price,
    category,
    category_page,
    main_image,
    description,
    quantity_available,
    is_featured,
    created_at,
  };

  const axiosConfig = {
    headers: {
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
      //   "x-csrftoken": `${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.put(url, body, axiosConfig);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItemLab = async (url) => {
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
