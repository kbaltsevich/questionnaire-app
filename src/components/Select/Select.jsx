import React, { useState } from "react";
import style from "./Select.module.css";

const Select = (props) => {
  const { getState, setState, stateName } = props;

  const [selectState, setSelectState] = useState(getState);

  return (
    <div className="container">
      <span className="title">{getState.title}</span>
      {getState.description ? (
        <p className="description">{getState.description}</p>
      ) : null}
      <select
        value={selectState.value}
        name={stateName}
        onChange={(e) => {
          setSelectState({ ...selectState, value: e.target.value });
          return setState({ ...getState, value: e.target.value });
        }}
        className="forSelect"
      >
        {selectState.options.map((opt, index) => {
          return (
            <option
              className="forOption"
              key={new Date().getTime() + index}
              value={opt}
            >
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
