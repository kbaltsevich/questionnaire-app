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
      // arrInputs = arrInputs.map((item) => {
      //   return `${item}`.replace(/_\d*/, "");
      // });
      let arrSetInputs = new Set(arrInputs);
      arrInputs = [...arrSetInputs];

      arrInputs.forEach((item) => {
        const itemLength = document.querySelectorAll(
          `.withRelatives input[name='${item}']`
        );
        if (itemLength.length > 0) {
          let arrValues = [];
          itemLength.forEach((element) => {
            if (element.getAttribute("type") === "radio" && element.checked) {
              arrValues.push(element.value);
            } else if (element.getAttribute("type") !== "radio") {
              arrValues.push(element.value);
            }
          });
          return formData.set(item, arrValues.join("; "));
        }
      });

      // var object = {};
      // new FormData(form).forEach(function (value, key) {
      //   object[key] = value;
      // });
      // var json = JSON.stringify(object);

      let testArr = [];
      formData.forEach((value, key, parent) => {
        testArr.push([key, value]);
      });
      testArr = testArr.map((item) => [item[0].replace(/_\d*/, ""), item[1]]);

      let finalObject = {};

      testArr.forEach((item) => {
        if (typeof finalObject[item[0]] === "undefined") {
          finalObject[item[0]] = item[1];
        } else {
          finalObject[item[0]] = `${finalObject[item[0]]}; ${item[1]}`;
        }
      });

      Object.keys(finalObject).forEach((key) =>
        formData.set(key, finalObject[key])
      );

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

    let arrInputsNamesInSelects = [];
    arrClasses[indexActiveClass].querySelectorAll("input").forEach((item) => {
      arrInputsNamesInSelects.push(item.getAttribute("name"));
    });

    arrInputsNamesInSelects = new Set(arrInputsNamesInSelects);

    arrInputsNamesInSelects.forEach((item) => {
      const inputName = document.querySelectorAll(`input[name="${item}"]`);
      if (inputName.length > 0) {
        if (inputName[0].getAttribute("type") === "radio") {
          return console.log(
            document.querySelectorAll(`input[name='${item}']:checked`)
          );
        }
      }
    });

    indexActiveClass++;
    arrClasses.forEach((item) => item.classList.remove(activeClass));
    arrClasses[indexActiveClass].classList.add(activeClass);
    arrClasses[indexActiveClass].scrollIntoView({
      inline: "start",
      behavior: "smooth",
    });
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
