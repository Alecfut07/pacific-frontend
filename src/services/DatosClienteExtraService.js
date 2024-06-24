import axios from "axios";
const { VITE_HOST, VITE_DATOS_CLIENTE_EXTRA_LIST } = import.meta.env;

export const createClientExtraData = async (
  description,
  folio,
  accepted,
  additional_info,
  cliente,
) => {
  try {
    const body = {
      description,
      folio,
      accepted,
      additional_info,
      cliente,
    };
    const { data } = await axios.post(
      `${VITE_HOST}${VITE_DATOS_CLIENTE_EXTRA_LIST}`,
      body,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
