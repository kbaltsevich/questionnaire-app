import React, { useState } from "react";
import Radio from "../Radio/Radio";
import Input from "../Input/Input";

const RelativesWithOtherCancer = (props) => {
  const { getState, setState } = props;
  const [getNameRelativesWithOtherCancer, setNameRelativesWithOtherCancer] =
    useState({
      title: "Имя родственника",
      description: "",
      placeholder: "Иван",
      value: "",
    });
  const [getDegreeRelativesWithOtherCancer, setDegreeRelativesWithOtherCancer] =
    useState({
      title: "Степень родства",
      description: "",
      placeholder: "мать, сестра, дочь, тетя, племянница, бабушка",
      value: "",
    });

  const [isRelativesWithOtherFoM, setRelativesWithOtherFoM] = useState({
    title: "По какой линии относится вам ваш родственник?",
    description: "",
    buttons: ["Отцовская", "Материнская"],
    value: "",
  });

  const [getRelativesDiagnosissOrOrgan, setRelativesDiagnosissOrOrgan] =
    useState({
      title: "Диагноз или пораженный орган",
      description: "",
      placeholder: "Диагноз не помню, но поражена была печень",
      value: "",
    });
  const [getAgeRelativesWithOtherCancer, setAgeRelativesWithOtherCancer] =
    useState({
      title: "Возраст постановки диагноза, лет",
      description: "",
      placeholder: "15",
      value: "",
    });
  return (
    <div className="withRelatives">
      <Input
        getState={getNameRelativesWithOtherCancer}
        setState={(item) => {
          setNameRelativesWithOtherCancer(item);
          return setState({
            ...getState,
            getNameRelativesWithOtherCancer: item,
          });
        }}
        stateName={getNameRelativesWithOtherCancer.title}
      />
      <Input
        getState={getDegreeRelativesWithOtherCancer}
        setState={(item) => {
          setDegreeRelativesWithOtherCancer(item);
          return setState({
            ...getState,
            getDegreeRelativesWithOtherCancer: item,
          });
        }}
        stateName={getDegreeRelativesWithOtherCancer.title}
      />
      <Radio
        getState={isRelativesWithOtherFoM}
        setState={(item) => {
          setRelativesWithOtherFoM(item);
          return setState({
            ...getState,
            isRelativesWithOtherFoM: item,
          });
        }}
        stateName={isRelativesWithOtherFoM.title}
      />
      <Input
        getState={getRelativesDiagnosissOrOrgan}
        setState={(item) => {
          setRelativesDiagnosissOrOrgan(item);
          return setState({
            ...getState,
            getRelativesDiagnosissOrOrgan: item,
          });
        }}
        stateName={getRelativesDiagnosissOrOrgan.title}
      />
      <Input
        getState={getAgeRelativesWithOtherCancer}
        setState={(item) => {
          setAgeRelativesWithOtherCancer(item);
          return setState({
            ...getState,
            getAgeRelativesWithOtherCancer: item,
          });
        }}
        stateName={getAgeRelativesWithOtherCancer.title}
        typeInput="number"
      />
    </div>
  );
};

export default RelativesWithOtherCancer;
