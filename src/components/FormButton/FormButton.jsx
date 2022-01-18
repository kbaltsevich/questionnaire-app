import React, { useState } from "react";
import style from "./FormButton.module.css";

const FormButton = (props) => {
  const { searchClass, firstTitle, lastTitle, getAllState, activeClass } =
    props;

  const [titleButton, setTitleButton] = useState(firstTitle);

  let arrInputs = [];

  function moveActiveClass(searchClass, activeClass) {
    const arrClasses = document.querySelectorAll(`.${searchClass}`);
    const lengthArrClasses = arrClasses.length;
    let indexActiveClass = 0;
    arrClasses.forEach((item, index) => {
      if (item.classList.contains(activeClass)) {
        return (indexActiveClass = index);
      }
    });
    if (indexActiveClass === lengthArrClasses - 1) {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzlp7gQp9GmRjrcSL_2JUSb0jDwV-aeQi0P3nRTPAQ1u3xj8IFv09zOwBrwT_l5_HVaPQ/exec";
      const form = document.querySelector("form");

      // function getFormData(object) {
      //   const formData = new FormData();
      //   Object.keys(object).forEach((key) => formData.append(key, object[key]));
      //   return formData;
      // }
      const formData = new FormData(form);
      formData.forEach((value, key, parent) => {
        arrInputs.push(key);
      });
      let arrSetInputs = new Set(arrInputs);
      arrInputs = [...arrSetInputs];
      console.log(arrInputs);

      arrInputs.forEach((item) => {
        const itemLength = document.querySelectorAll(
          `.withRelatives input[name='${item}']`
        );
        if (itemLength.length > 0) {
          let arrValues = [];
          itemLength.forEach((element) => {
            console.log(element.getAttribute("type"));
            if (element.getAttribute("type") === "radio" && element.checked) {
              arrValues.push(element.value);
            } else if (element.getAttribute("type") !== "radio") {
              arrValues.push(element.value);
            }
          });
          return formData.set(item, arrValues.join(", "));
        }
      });

      // var object = {};
      // new FormData(form).forEach(function (value, key) {
      //   object[key] = value;
      // });
      // var json = JSON.stringify(object);

      fetch(scriptURL, {
        method: "POST",
        body: formData,
      })
        .then((response) => console.log(response))
        .catch((error) => console.error("Error!", error.message));

      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      return false;
    }
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
