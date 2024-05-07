import { useState, useEffect, useCallback } from "react";
import DataContext from "./dataContext";
import PropTypes from "prop-types";

function GlobalContext(props) {
  const [token, setToken] = useState("");

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
