import React from "react";
import { Input, Check, CheckHiden } from "./Form.styles";

export const InputText = (props) => {
  return <Input {...props} />;
};

export const Checkbox = ({ id, value, isChecked, onCheck }) => {
  return (
    <label htmlFor={id}>
      <CheckHiden
        id={id}
        value={value}
        defaultChecked={isChecked}
        onChange={() => onCheck(id, !isChecked)}
      />
      <Check isChecked={isChecked} />
    </label>
  );
};
