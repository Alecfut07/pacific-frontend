import axios from "axios";
const {
  VITE_HOST,
  VITE_ITEM_LAB_VIEW_SET,
  VITE_LAB_PRODUCTS,
  VITE_INDUSTRIAL_PRODUCTS,
  VITE_SECURITY_PRODUCTS,
} = import.meta.env;

// PARA EL APARTADO DE LOS PRODUCTOS PÚBLICOS
export const getLabProducts = async () => {
  try {
    const { data } = await axios.get(
      `${VITE_HOST}${VITE_ITEM_LAB_VIEW_SET}${VITE_LAB_PRODUCTS}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIndustrialProducts = async () => {
  try {
    const { data } = await axios.get(
      `${VITE_HOST}${VITE_ITEM_LAB_VIEW_SET}${VITE_INDUSTRIAL_PRODUCTS}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSecurityProducts = async () => {
  try {
    const { data } = await axios.get(
      `${VITE_HOST}${VITE_ITEM_LAB_VIEW_SET}${VITE_SECURITY_PRODUCTS}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// PARA EL APARTADO DE ADMIN/PRODUCTS
export const getItemsLab = async () => {
  try {
    const { data } = await axios.get(`${VITE_HOST}${VITE_ITEM_LAB_VIEW_SET}`);
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
      `${VITE_HOST}${VITE_ITEM_LAB_VIEW_SET}`,
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

export const updateQuantityAvailableItemLab = async (
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

  delete body.main_image;

  const axiosConfig = {
    headers: {
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
      //   "x-csrftoken": `${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const { data } = await axios.patch(url, body, axiosConfig);
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
