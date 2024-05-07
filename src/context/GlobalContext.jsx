import { useState, useEffect, useCallback } from "react";
import DataContext from "./dataContext";
import PropTypes from "prop-types";

function GlobalContext(props) {
  const [token, setToken] = useState("");

  const getToken = useCallback(async () => {
    const element = document.querySelector("#token");
    if (element) {
      const value = element.getAttribute("data-value");
      if (value !== "None") {
        await setToken(value);
      }
    }
  });

  const init = useCallback(async () => {
    await getToken();
  }, [getToken]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <DataContext.Provider value={{ token, setToken }}>
      {props.children}
    </DataContext.Provider>
  );
}

GlobalContext.propTypes = {
  children: PropTypes.object,
};

export default GlobalContext;
