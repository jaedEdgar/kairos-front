import React from "react";
import {
  Input,
  Check,
  CheckHiden,
  TextArea as TA,
} from "../styles/Form.styles";

export const InputText = Input;

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

export const TextArea = TA;
