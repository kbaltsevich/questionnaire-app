import React from "react";

const CheckBokses = (props) => {
  const { getState, setState, stateName } = props;

  return (
    <div className="container">
      <span className="title">{getState.title}</span>
      {getState.description ? (
        <p className="description">{getState.description}</p>
      ) : null}
      <div className="checksContainer">
        {getState.checks.map((check, index) => {
          return (
            <label className="checksLabel" key={index}>
              <input
                className="forChecks"
                type="checkbox"
                value={check}
                name={stateName}
                onChange={(e) => {
                  let arrChecks = [];
                  document
                    .querySelectorAll(`input[name='${stateName}']`)
                    .forEach((input) => {
                      if (input.checked) {
                        arrChecks.push(input.value);
                      }
                    });
                  document
                    .querySelectorAll(`input[name='${stateName}']`)
                    .forEach((input) => {
                      input.parentElement
                        .querySelector("span")
                        .classList.remove("noValid");
                    });
                  console.log(arrChecks.join("; "));
                  return setState({ ...getState, value: arrChecks.join("; ") });
                }}
              />
              <span className="checksSpan">{check}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBokses;
