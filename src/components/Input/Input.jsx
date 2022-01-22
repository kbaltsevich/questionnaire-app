import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const { getState, setState, stateName, typeInput } = props;
  return (
    <div className={style.container}>
      <span className={style.title}>{getState.title}</span>
      {getState.description ? (
        <p className={style.description}>{getState.description}</p>
      ) : null}
      <input
        className={style.forInput}
        type={typeInput ? typeInput : "text"}
        name={stateName}
        id={stateName}
        placeholder={getState.placeholder}
        value={getState.value}
        onChange={(e) => setState({ ...getState, value: e.target.value })}
      />
    </div>
  );
};

export default Input;
