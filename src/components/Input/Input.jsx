import React, { useState } from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const {
    getState,
    setState,
    stateName,
    typeInput,
    notForValidation,
    isDate,
    onlyText,
  } = props;
  const [typeState, setTypeState] = useState(typeInput);

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
        type={typeState ? typeState : "text"}
        name={stateName}
        id={stateName}
        placeholder={getState.placeholder}
        value={getState.value}
        onChange={(e) => {
          document
            .querySelectorAll(`input[name='${stateName}']`)
            .forEach((input) => {
              input.classList.remove("noValid");
            });
          return setState({ ...getState, value: e.target.value });
        }}
        min={getState.minValue ? getState.minValue : null}
        max={getState.maxValue ? getState.maxValue : null}
        onClick={(e) => (isDate ? e.preventDefault() : null)}
        pattern={typeInput === "text" ? "^^[A-Za-zА-Яа-яЁё\\s]+$" : null}
        onFocus={isDate ? () => setTypeState("date") : null}
        onBlur={() => {
          if (isDate && !getState.value) {
            return () => setTypeState("text");
          }
          if (typeState === "number") {
            if (getState.minValue || getState.maxValue) {
              if (+getState.minValue > +getState.value) {
                setState({ ...getState, value: getState.minValue });
              }
              if (+getState.maxValue < +getState.value) {
                return setState({ ...getState, value: getState.maxValue });
              }
            }
          }
          if (isDate && getState.value) {
            if (getState.minValue || getState.maxValue) {
              if (
                new Date(getState.minValue).getTime() >
                new Date(getState.value).getTime()
              ) {
                setState({ ...getState, value: getState.minValue });
              }
            }
          }
          if (onlyText) {
            const textValue = getState.value;
            const textWithoutNumbers = textValue.replace(/[0-9]/g, "");
            setState({ ...getState, value: textWithoutNumbers });
          }
        }}
      />
    </div>
  );
};

export default Input;
