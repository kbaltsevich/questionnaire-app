import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const { getState, setState, stateName } = props;
  return (
    <div>
      <span className={style.title}>{getState.title}</span>
      {getState.description ? (
        <p className={style.description}>{getState.description}</p>
      ) : null}
      <input
        className={style.forInput}
        type="text"
        name={stateName}
        id={stateName}
        placeholder={getState.placeholder}
        onChange={(e) => setState({ ...getState, value: e.target.value })}
      />
    </div>
  );
};

export default Input;
