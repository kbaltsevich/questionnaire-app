import React, { useState } from "react";
import Radio from "../Radio/Radio";
import Input from "../Input/Input";

const RelativesWithBreastCancer = (props) => {
  const { getState, setState, getCounter } = props;
  const [getNameRelativesWithBreastCancer, setNameRelativesWithBreastCancer] =
    useState({
      title: "Имя родственника ",
      description: "",
      placeholder: "Иван",
      value: "",
    });
  const [
    getDegreeRelativesWithBreastCancer,
    setDegreeRelativesWithBreastCancer,
  ] = useState({
    title: "Степень родства ",
    description: "",
    placeholder: "мать, сестра, дочь, тетя, племянница, бабушка",
    value: "",
  });

  const [isRelativesFoM, setRelativesFoM] = useState({
    title: "По какой линии относится Вам Ваш родственник? ",
    description: "",
    buttons: ["Отцовская", "Материнская"],
    value: "",
  });

  const [getAgeRelativesWithBreastCancer, setAgeRelativesWithBreastCancer] =
    useState({
      title: "Возраст постановки диагноза, лет ",
      description: "",
      placeholder: "15",
      value: "",
    });

  const [isTripleNegativeSubtypeCancer, setTripleNegativeSubtypeCancer] =
    useState({
      title: "Был ли это рак тройного негативного подтипа? ",
      description: "",
      buttons: ["Да", "Нет"],
      value: "",
    });
  const [isBilateralProcess, setBilateralProcess] = useState({
    title: "Был ли двусторонний процесс? ",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
  return (
    <div className="withRelatives">
      <Input
        getState={getNameRelativesWithBreastCancer}
        setState={(item) => {
          setNameRelativesWithBreastCancer(item);
          return setState({
            ...getState,
            getNameRelativesWithBreastCancer: item,
          });
        }}
        stateName={`${getNameRelativesWithBreastCancer.title}_${getCounter}`}
      />
      <Input
        getState={getDegreeRelativesWithBreastCancer}
        setState={(item) => {
          setDegreeRelativesWithBreastCancer(item);
          return setState({
            ...getState,
            getDegreeRelativesWithBreastCancer: item,
          });
        }}
        stateName={`${getDegreeRelativesWithBreastCancer.title}_${getCounter}`}
      />
      <Radio
        getState={isRelativesFoM}
        setState={(item) => {
          setRelativesFoM(item);
          return setState({
            ...getState,
            isRelativesFoM: item,
          });
        }}
        stateName={isRelativesFoM.title + `_${getCounter}`}
      />
      <Input
        getState={getAgeRelativesWithBreastCancer}
        setState={(item) => {
          setAgeRelativesWithBreastCancer(item);
          return setState({
            ...getState,
            getAgeRelativesWithBreastCancer: item,
          });
        }}
        stateName={`${getAgeRelativesWithBreastCancer.title}_${getCounter}`}
        typeInput="number"
      />
      <Radio
        getState={isTripleNegativeSubtypeCancer}
        setState={(item) => {
          setTripleNegativeSubtypeCancer(item);
          return setState({
            ...getState,
            isTripleNegativeSubtypeCancer: item,
          });
        }}
        stateName={`${isTripleNegativeSubtypeCancer.title}_${getCounter}`}
      />
      <Radio
        getState={isBilateralProcess}
        setState={(item) => {
          setBilateralProcess(item);
          return setState({
            ...getState,
            isBilateralProcess: item,
          });
        }}
        stateName={`${isBilateralProcess.title}_${getCounter}`}
      />
    </div>
  );
};

export default RelativesWithBreastCancer;
