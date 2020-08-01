import React, { useContext } from "react";
import FormContext from "../../context/formContext";

const FormList = () => {
  const context = useContext(FormContext);

  return (
    <div>
      {context.forms.map((form) => (
        <p style={{ color: "white" }}>{form.formName}</p>
      ))}
    </div>
  );
};

export default FormList;
