import React, { useState } from "react";
import Radio from "../Radio/Radio";
import Input from "../Input/Input";
import RemoveButton from "../removeButton/RemoveButton";

const RelativesWithBreastCancer = (props) => {
  const { getState, setState, getCounter, index, removeSection } = props;
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
    placeholder: "Мама, сестра, дочь, тетя, племянница, бабушка",
    value: "",
  });

  const [isRelativesFoM, setRelativesFoM] = useState({
    title: "По какой линии относится родственник? ",
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
      {index > 0 ? (
        <div className="container">
          <hr className="line" />
          <p className="description" style={{ paddingTop: 20 + "px" }}>
            (Если родственник добавлен ошибочно, ниже будет кнопка для удаления)
          </p>
        </div>
      ) : null}
      <Input
        getState={getNameRelativesWithBreastCancer}
        setState={(item) => {
          setNameRelativesWithBreastCancer(item);
          return setState({
            ...getState,
            getNameRelativesWithBreastCancer: item,
          });
        }}
        stateName={`${getNameRelativesWithBreastCancer.title}_${getCounter}(Семейный анамнез по раку молочной железы)`}
        wide={true}
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
        stateName={`${getDegreeRelativesWithBreastCancer.title}_${getCounter}(Семейный анамнез по раку молочной железы)`}
        wide={true}
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
        stateName={
          isRelativesFoM.title +
          `_${getCounter}(Семейный анамнез по раку молочной железы)`
        }
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
        stateName={`${getAgeRelativesWithBreastCancer.title}_${getCounter}(Семейный анамнез по раку молочной железы)`}
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
        stateName={`${isTripleNegativeSubtypeCancer.title}_${getCounter}(Семейный анамнез по раку молочной железы)`}
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
        stateName={`${isBilateralProcess.title}_${getCounter}(Семейный анамнез по раку молочной железы)`}
      />
      {index > 0 ? (
        <RemoveButton
          id={getState}
          remove={removeSection}
          titleButton="Удалить члена семьи"
        />
      ) : null}
    </div>
  );
};

export default RelativesWithBreastCancer;
