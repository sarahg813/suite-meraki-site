import { ADD_FORM } from "./types";

const addForm = (form, state) => {
  const newForms = [...state.forms, form];
  return {
    ...state,
    forms: newForms,
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_FORM:
      return addForm(action.payload, state);
    default:
      return state;
  }
};
