import React, { useState } from "react";
import style from "./FormButton.module.css";

const FormButton = (props) => {
  const { searchClass, firstTitle, lastTitle, getAllState, activeClass } =
    props;

  const [titleButton, setTitleButton] = useState(firstTitle);

  function moveActiveClass(searchClass, activeClass) {
    const arrClasses = document.querySelectorAll(`.${searchClass}`);
    const lengthArrClasses = arrClasses.length;
    let indexActiveClass = 0;
    arrClasses.forEach((item, index) => {
      if (item.classList.contains(activeClass)) {
        return (indexActiveClass = index);
      }
    });
    indexActiveClass++;
    arrClasses.forEach((item) => item.classList.remove(activeClass));
    arrClasses[indexActiveClass].classList.add(activeClass);
    if (indexActiveClass === lengthArrClasses - 1) {
      setTitleButton(lastTitle);
    }
  }

  return (
    <button
      className={style.buttonStyle}
      onClick={(e) => {
        e.preventDefault();
        return moveActiveClass(searchClass, activeClass);
      }}
    >
      {titleButton}
    </button>
  );
};

export default FormButton;
