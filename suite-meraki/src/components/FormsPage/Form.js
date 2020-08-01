import React, { useState, useContext } from "react";
import FormContext from "../../context/formContext";

const Form = (props) => {
  const [form, setForm] = useState({ formName: "" });
  const context = useContext(FormContext);

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newForm = {
      formName: form.formName.trim(),
    };

    context.addForm(newForm);
    setForm({ formName: "" });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="formName"
          value={form.formName}
          onChange={onChange}
        />
      </form>
      <button type="submit">add form</button>
    </div>
  );
};

export default Form;
