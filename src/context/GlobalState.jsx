import { useState, useEffect, useCallback } from "react";
import DataContext from "./dataContext";
import PropTypes from "prop-types";

function GlobalState(props) {
  const [usuario, setUsuario] = useState(null);

  const [token, setToken] = useState("");

  // Obtiene el usuario con el que se inicio sesion en un inicio
  const getUsuarioActual = useCallback(async () => {
    const element = document.querySelector("#usuario");
    if (element) {
      const value = element.getAttribute("data-value");
      await setUsuario(value);
    }
  }, []);

  const init = useCallback(async () => {}, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <DataContext.Provider value={{ usuario, token }}>
      {props.children}
    </DataContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.object,
};

export default GlobalState;
