import "./App.css";
import React, { useState } from "react";
import FormButton from "./components/FormButton/FormButton";
import Input from "./components/Input/Input";
import Radio from "./components/Radio/Radio";
function App() {
  const [gender, setGender] = useState({
    title: "Ваш пол",
    description: "",
    buttons: ["Женский", "Мужской"],
    value: "",
  });
  const [fullName, setFullName] = useState({
    title: "Как Вас зовут?",
    description: "(Желательно полное имя и отчество)",
    placeholder: "Иванов Иван Иванович!",
    value: "",
  });
  const [isJews, setIsJews] = useState({
    title: "Есть ли у вас в роду евреи ашкеназского происхождения?",
    description: "",
    buttons: ["Да", "Нет", "Не знаю"],
    value: "",
  });
  const [dataBirthday, setDataBirthday] = useState({
    title: "Дата рождения",
    description: "",
    placeholder: "28.06.1998",
    value: "",
  });
  const [getWeight, setWeight] = useState({
    title: "Ваш вес, кг",
    description: "",
    placeholder: "69",
    value: "",
  });
  const [getHeight, setHeight] = useState({
    title: "Ваш рост, см",
    description: "",
    placeholder: "69",
    value: "",
  });
  const [getNationality, setNationality] = useState({
    title: "Национальность",
    description: "",
    placeholder: "русский",
    value: "",
  });
  const [getAgeStartMenstruation, setAgeStartMenstruation] = useState({
    title: "Возраст начала менструации, лет",
    description: "",
    placeholder: "15",
    value: "",
  });
  const [getNumberPregants, setNumberPregants] = useState({
    title: "Число беременностей",
    description: "(Введите 0, если беременностей не было)",
    placeholder: "2",
    value: "",
  });
  const [getAgeFirstchildbirth, setAgeFirstchildbirth] = useState({
    title: "Возраст первых родов, лет",
    description: "",
    placeholder: "23",
    value: "",
  });
  const [getLactation, setLactation] = useState({
    title: "Кормление грудью, лет",
    description:
      "(Введите суммарное количество лет кормления грудью за все беременности. Если вы кормили менее 1 года, то пропустите это поле.)",
    placeholder: "2",
    value: "",
  });

  return (
    <form className="App" onSubmit={(e) => e.preventDefault()}>
      <div className="section activeSection">
        <h1>
          <span>Исследование</span> для оценки наследственных онкорисков
        </h1>
        <p>
          Пожалуйста, ответьте на вопросы о семейном анамнезе, чтобы получить
          персонализированные рекомендации по скринингу и профилактике
          онкологических заболеваний.
        </p>
        <p>
          Опросник не большой и содержит 20-30 вопросов. Это поможет дать вам
          более детальные рекомендации по итогам теста.
        </p>
      </div>
      <div className="section">
        <Input
          getState={fullName}
          setState={setFullName}
          stateName="fullName"
        />
        <Radio getState={gender} setState={setGender} stateName="gender" />
        <Input
          getState={dataBirthday}
          setState={setDataBirthday}
          stateName="dataBirthday"
          typeInput="date"
        />
        <Input
          getState={getWeight}
          setState={setWeight}
          stateName="weight"
          typeInput="number"
        />
        <Input
          getState={getWeight}
          setState={setWeight}
          stateName="weight"
          typeInput="number"
        />
        <Input
          getState={getHeight}
          setState={setHeight}
          stateName="height"
          typeInput="number"
        />
        <Input
          getState={getNationality}
          setState={setNationality}
          stateName="Nationality"
        />
        <Radio getState={isJews} setState={setIsJews} stateName="isJews" />
      </div>
      {gender.value === "Женский" ? (
        <div className="section">
          <h2>Репродуктивная система</h2>
          <Input
            getState={getAgeStartMenstruation}
            setState={setAgeStartMenstruation}
            stateName="ageStartMenstruation"
            typeInput="number"
          />
          <Input
            getState={getNumberPregants}
            setState={setNumberPregants}
            stateName="numberPregants"
            typeInput="number"
          />
          {getNumberPregants.value !== "" && +getNumberPregants.value !== 0 ? (
            <div>
              <Input
                getState={getAgeFirstchildbirth}
                setState={setAgeFirstchildbirth}
                stateName="ageFirstchildbirth"
                typeInput="number"
              />
              <Input
                getState={getLactation}
                setState={setLactation}
                stateName="lactation"
                typeInput="number"
              />
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="section"></div>
      <FormButton
        searchClass="section"
        activeClass="activeSection"
        firstTitle="Продолжить"
        lastTitle="Закончить опрос"
        getAllState
      />
    </form>
  );
}

export default App;
