import React from "react";
import style from "./Radio.module.css";
const Radio = (props) => {
  const { getState, setState, stateName } = props;

  return (
    <div className={style.container}>
      <span className={style.title}>{getState.title}</span>
      {getState.description ? (
        <p className={style.description}>{getState.description}</p>
      ) : null}
      <div className={style.buttons_container}>
        {getState.buttons.map((item, index) => {
          return (
            <label key={index} className={style.forLabel}>
              <input
                type="radio"
                name={stateName}
                id={`${stateName}_${index}`}
                value={item}
                onChange={(e) => {
                  setState({ ...getState, value: e.target.value });
                }}
              />
              <span>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
