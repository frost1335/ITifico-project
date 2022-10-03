import React from "react";
import "./Input.scss";

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched;
};

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = ["input__group"];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push("invalid");
  }

  if (props.touched) {
    cls.push("focused");
  }

  if (props.valid && props.touched) {
    cls.push("success");
  }

  return (
    <div className={cls.join(" ")}>
      <input
        id={htmlFor}
        type={inputType}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <span className="input__icon">{props.icon}</span>
      {isInvalid(props) ? (
        <span className="input__message">
          {props.errorMessage || "Введите верное значение"}
        </span>
      ) : props.touched && props.valid ? (
        <span className="input__message">
          {props.successMessage || "Value is right"}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
