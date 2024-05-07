import { createContext } from "react";

const DataContext = createContext({
  token: "",
  setToken: () => {},
});

export default DataContext;
