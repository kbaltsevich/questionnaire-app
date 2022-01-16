import React, { useState } from "react";
import Radio from "../Radio/Radio";
import Input from "../Input/Input";

const RelativesWithBreastCancer = (props) => {
  const [getNameRelativesWithBreastCancer, setNameRelativesWithBreastCancer] =
    useState({
      title: "Имя родственника",
      description: "",
      placeholder: "Иван",
      value: "",
    });
  const [
    getDegreeRelativesWithBreastCancer,
    setDegreeRelativesWithBreastCancer,
  ] = useState({
    title: "Степень родства",
    description: "",
    placeholder: "мать, сестра, дочь, тетя, племянница, бабушка",
    value: "",
  });

  const [isRelativesFoM, setRelativesFoM] = useState({
    title: "По какой линии относится вам ваш родственник?",
    description: "",
    buttons: ["Отцовская", "Материнская"],
    value: "",
  });

  const [getAgeRelativesWithBreastCancer, setAgeRelativesWithBreastCancer] =
    useState({
      title: "Возраст постановки диагноза, лет",
      description: "",
      placeholder: "15",
      value: "",
    });

  const [isTripleNegativeSubtypeCancer, setTripleNegativeSubtypeCancer] =
    useState({
      title: "Был ли это рак тройного негативного подтипа?",
      description: "",
      buttons: ["Да", "Нет"],
      value: "",
    });
  const [isBilateralProcess, setBilateralProcess] = useState({
    title: "Был ли двусторонний процесс?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
  return (
    <div>
      <Input
        getState={getNameRelativesWithBreastCancer}
        setState={setNameRelativesWithBreastCancer}
        stateName="getNameRelativesWithBreastCancer"
      />
      <Input
        getState={getDegreeRelativesWithBreastCancer}
        setState={setDegreeRelativesWithBreastCancer}
        stateName="getDegreeRelativesWithBreastCancer"
      />
      <Radio
        getState={isRelativesFoM}
        setState={setRelativesFoM}
        stateName="isRelativesFoM"
      />
      <Input
        getState={getAgeRelativesWithBreastCancer}
        setState={setAgeRelativesWithBreastCancer}
        stateName="getAgeRelativesWithBreastCancer"
        typeInput="number"
      />
      <Radio
        getState={isTripleNegativeSubtypeCancer}
        setState={setTripleNegativeSubtypeCancer}
        stateName="isTripleNegativeSubtypeCancer"
      />
      <Radio
        getState={isBilateralProcess}
        setState={setBilateralProcess}
        stateName="isBilateralProcess"
      />
    </div>
  );
};

export default RelativesWithBreastCancer;
