import { createContext } from "react";

const DataContext = createContext({
  usuario: "",
  token: "",
});

export default DataContext;
