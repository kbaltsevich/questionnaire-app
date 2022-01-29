import React from "react";

const RemoveButton = (props) => {
  const { id, remove, titleButton } = props;
  return (
    <button
      className="removeButton"
      onClick={(e) => {
        document.querySelector(".activeSection").scrollIntoView({
          block: "end",
          inline: "nearest",
          behavior: "smooth",
        });
        e.preventDefault();
        return remove(id);
      }}
    >
      {titleButton}
    </button>
  );
};

export default RemoveButton;
