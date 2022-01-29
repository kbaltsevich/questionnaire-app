import React, { useState } from "react";
import Radio from "../Radio/Radio";
import Input from "../Input/Input";
import RemoveButton from "../removeButton/RemoveButton";

const RelativesWithOtherCancer = (props) => {
  const { getState, setState, getCounter, index, removeSection } = props;
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
      placeholder: "Мама, сестра, дочь, тетя, племянница, бабушка",
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
      {index > 0 ? (
        <div className="container">
          <hr className="line" />
          <p className="description" style={{ paddingTop: 20 + "px" }}>
            (Если родственник добавлен ошибочно, ниже будет кнопка для удаления)
          </p>
        </div>
      ) : null}
      <Input
        getState={getNameRelativesWithOtherCancer}
        setState={(item) => {
          setNameRelativesWithOtherCancer(item);
          return setState({
            ...getState,
            getNameRelativesWithOtherCancer: item,
          });
        }}
        stateName={`${getNameRelativesWithOtherCancer.title}_${getCounter}(Семейный анамнез по другим онкологическим заболеваниям)`}
        wide={true}
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
        stateName={
          getDegreeRelativesWithOtherCancer.title +
          `_${getCounter}(Семейный анамнез по другим онкологическим заболеваниям)`
        }
        wide={true}
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
        stateName={
          isRelativesWithOtherFoM.title +
          `_${getCounter}(Семейный анамнез по другим онкологическим заболеваниям)`
        }
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
        stateName={
          getRelativesDiagnosissOrOrgan.title +
          `_${getCounter}(Семейный анамнез по другим онкологическим заболеваниям)`
        }
        wide={true}
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
        stateName={
          getAgeRelativesWithOtherCancer.title +
          `_${getCounter}(Семейный анамнез по другим онкологическим заболеваниям)`
        }
        typeInput="number"
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

export default RelativesWithOtherCancer;
