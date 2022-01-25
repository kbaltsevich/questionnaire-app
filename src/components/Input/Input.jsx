import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const { getState, setState, stateName, typeInput, notForValidation } = props;
  return (
    <div className="container">
      <span className="title">{getState.title}</span>
      {getState.description ? (
        <p className="description">{getState.description}</p>
      ) : null}
      <input
        className={
          notForValidation
            ? ["forInput", "not-for-validation"].join(" ")
            : "forInput"
        }
        type={typeInput ? typeInput : "text"}
        name={stateName}
        id={stateName}
        placeholder={getState.placeholder}
        value={getState.value}
        onChange={(e) => setState({ ...getState, value: e.target.value })}
        pattern={typeInput === "date" ? "[0-9]{4}-[0-9]{2}-[0-9]{2}" : null}
        min={getState.minValue ? getState.minValue : null}
        max={getState.maxValue ? getState.maxValue : null}
      />
    </div>
  );
};

export default Input;
