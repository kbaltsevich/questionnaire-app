import React from "react";
import style from "./AddButton.module.css";

const AddButton = (props) => {
  const { addValue, setVauelState, titleButton } = props;
  return (
    <button
      className={style.addButton}
      onClick={(e) => {
        e.preventDefault();
        return setVauelState(addValue);
      }}
    >
      {titleButton}
    </button>
  );
};

export default AddButton;
