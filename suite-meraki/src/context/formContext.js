import React, { createContext } from "react";

const formContext = createContext({
  forms: [],
  addForm: (form) => {},
});

export default formContext;
