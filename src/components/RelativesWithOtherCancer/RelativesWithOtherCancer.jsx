import React, { useState } from "react";
import Radio from "../Radio/Radio";
import Input from "../Input/Input";

const RelativesWithOtherCancer = (props) => {
  const { getState, setState, getCounter } = props;
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
    title: "По какой линии относится Вам Ваш родственник?",
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
        stateName={`${getNameRelativesWithOtherCancer.title}_${getCounter}`}
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
        stateName={getDegreeRelativesWithOtherCancer.title + `_${getCounter}`}
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
        stateName={isRelativesWithOtherFoM.title + `_${getCounter}`}
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
        stateName={getRelativesDiagnosissOrOrgan.title + `_${getCounter}`}
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
        stateName={getAgeRelativesWithOtherCancer.title + `_${getCounter}`}
        typeInput="number"
      />
    </div>
  );
};

export default RelativesWithOtherCancer;
