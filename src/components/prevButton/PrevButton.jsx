import React from "react";

const PrevButton = (props) => {
  const { searchClass, activeClass, titleButton, setHidePrevButton } = props;
  return (
    <button
      className="prevButton"
      onClick={(e) => {
        e.preventDefault();
        const arrClasses = document.querySelectorAll(`.${searchClass}`);
        let indexActiveClass = 0;
        arrClasses.forEach((item, index) => {
          if (item.classList.contains(activeClass)) {
            return (indexActiveClass = index);
          }
        });
        indexActiveClass--;
        if (indexActiveClass === 0) {
          setHidePrevButton(true);
        } else {
          setHidePrevButton(false);
        }
        arrClasses.forEach((item) => item.classList.remove(activeClass));
        arrClasses[indexActiveClass].classList.add(activeClass);
        document.querySelector(".App").scrollIntoView({
          inline: "start",
          behavior: "smooth",
        });
      }}
    >
      {titleButton}
    </button>
  );
};

export default PrevButton;
