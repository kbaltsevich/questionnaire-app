import "./App.css";
import React, { useState } from "react";
import FormButton from "./components/FormButton/FormButton";
import Input from "./components/Input/Input";
import Radio from "./components/Radio/Radio";
import RelativesWithBreastCancer from "./components/RelativesWithBreastCancer/RelativesWithBreastCancer";
import RelativesWithOtherCancer from "./components/RelativesWithOtherCancer/RelativesWithOtherCancer";
import AddButton from "./components/addButton/AddButton";
import PrevButton from "./components/prevButton/PrevButton";
import CheckBokses from "./components/CheckBokses/ChekBokses";
function App() {
  const [buttonName, setButtonName] = useState("Продолжить");
  const [gender, setGender] = useState({
    title: "Ваш пол",
    description: "",
    buttons: ["Женский", "Мужской"],
    value: "",
  });
  const [fullName, setFullName] = useState({
    title: "Как Вас зовут?",
    description: "(Желательно полное имя и отчество)",
    placeholder: "Иванов Иван Иванович",
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
    minValue: "1900-01-01",
    maxValue: `${new Date().getFullYear()}-${
      new Date().getMonth() + 1 < 10
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1
    }-${new Date().getDate()}`,
    value: "",
  });
  const [getWeight, setWeight] = useState({
    title: "Ваш вес, кг",
    description: "",
    placeholder: "69",
    value: "",
    maxValue: 300,
    minValue: 30,
  });
  const [getHeight, setHeight] = useState({
    title: "Ваш рост, см",
    description: "",
    placeholder: "169",
    value: "",
    maxValue: 250,
    minValue: 60,
  });
  const [getNationality, setNationality] = useState({
    title: "Национальность",
    description:
      "(Можете не отвечать на этот вопрос, но он влияет на результат теста)",
    placeholder: "русский",
    value: "",
  });
  const [getAgeStartMenstruation, setAgeStartMenstruation] = useState({
    title: "Возраст начала менструации, лет",
    description: "",
    placeholder: "15",
    minValue: 10,
    maxValue: 60,
    value: "",
  });
  const [getNumberPregants, setNumberPregants] = useState({
    title: "Были ли у вас беременности?",
    description: "",
    buttons: ["Да", "Нет"],
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
  const [isHormonalContraceptives, setHormonalContraceptives] = useState({
    title: "Использовали ли вы гормональные контрацептивы?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
  const [getDaysHormonalContraceptives, setDaysHormonalContraceptives] =
    useState({
      title:
        "Общая продолжительность использования гормональных контрацептивов, дней",
      description: "",
      minValue: 1,
      placeholder: "24",
      value: "",
    });

  const [isCcancerDiagnosis, setCcancerDiagnosis] = useState({
    title: "Есть ли у вас онкологический диагноз?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
  const [getNameCancerDiagnosis, setNameCancerDiagnosis] = useState({
    title: "Название диагноза",
    description: "",
    placeholder: "Рак толстой кишки",
    value: "",
  });
  const [getAgeCancerDiagnosis, setAgeCancerDiagnosis] = useState({
    title: "Возраст постановки диагноза, лет",
    description: "",
    placeholder: "15",
    minValue: 1,
    value: "",
  });

  const [isСhemotherapy, setСhemotherapy] = useState({
    title: "Было ли проведено лечение с помощью химиотерапии?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [isHormoneTherapy, setHormoneTherapy] = useState({
    title: "Было ли проведено лечение с помощью гормональной терапии?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [isRadiationTherapy, setRadiationTherapy] = useState({
    title: "Было ли проведено лечение с помощью лучевой терапии?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
  const [isConcomitantDiagnosis, setConcomitantDiagnosis] = useState({
    title: "Есть ли у вас сопутствующий диагноз?",
    description:
      "(Прочие хронические и онкологические заболевания, отличающиеся от того, что вы указали выше)",
    buttons: ["Да", "Нет"],
    value: "",
  });
  const [getConcomitantDiagnosis, setConcomitantDiagnosisInput] = useState({
    title: "Название диагноза",
    description: "",
    placeholder: "Сахарный диабет, стенокардия",
    value: "",
  });
  const [isGeneticTesting, setGeneticTesting] = useState({
    title: "Делали ли вы генетическое тестирование?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
  const [getGeneticTestingResult, setGeneticTestingResult] = useState({
    title: "Какой был результат?",
    description: "",
    placeholder: "Мутация в BRCA1 или ничего",
    value: "",
  });

  const [isBiopsy, setBiopsy] = useState({
    title: "Выполнялись ли диагностические биопсии молочных желез?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [getNumbersBiopsy, setNumbersBiopsy] = useState({
    title: "Сколько раз?",
    description: "",
    buttons: ["Один", "Больше двух"],
    value: "",
  });

  const [getBiopsyOrganAndResult, setBiopsyOrganAndResult] = useState({
    title: "Какой был результат биопсии?",
    description: "",
    placeholder: "Фиброаденома/киста",
    value: "",
  });

  const [isBiopsyHyperplasia, setBiopsyHyperplasia] = useState({
    title: "Выявлялась ли при биопсии атипичная гиперплазия?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [isPreventiveSurgery, setPreventiveSurgery] = useState({
    title: "Выполнялись ли профилактические хирургические вмешательства",
    description: "(Удаление молочных желез, яичников с трубами)",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [getPreventiveSurgery, setPreventiveSurgerySelect] = useState({
    title: "Что было сделано?",
    description: "(Удаление молочных желез, яичников с трубами)",
    checks: [
      "Удаление молочных желез",
      "Удаление яичника",
      "Удаление части кишечника",
      "Удаление предстательной железы",
    ],
    value: "Удаление молочных желез",
  });

  const [isColonPolyps, setColonPolyps] = useState({
    title: "Выявлялись ли у вас полипы толстой кишки?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [getColonPolypsResult, setColonPolypsResult] = useState({
    title: "Сколько их было обнаружено?",
    description: "",
    placeholder: "1",
    minValue: 1,
    value: "",
  });

  const [isRelativesWithOtherCancer, setIsRelativesWithOtherCancer] = useState({
    title:
      "Были ли у вас родственники у которых были выявлены любые другие онкологические заболевания?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [getRelativesWithOtherCancer, setRelativesWithOtherCancer] = useState([
    {
      id: new Date().getTime(),
    },
  ]);

  const [isRelativesWithBreastCancer, setIsRelativesWithBreastCancer] =
    useState({
      title:
        "Были ли у вас родственники у которых был выявлен рак молочной железы?",
      description: "",
      buttons: ["Да", "Нет"],
      value: "",
    });

  const [getRelativesWithBreastCancer, setRelativesWithBreastCancer] = useState(
    [
      {
        id: new Date().getTime(),
      },
    ]
  );

  const [hidePrevButton, setHidePrevButton] = useState(true);

  return (
    <form className="App" onSubmit={(e) => e.preventDefault()}>
      <div className="section activeSection">
        <h1>
          <span>Тестирование</span> для оценки наследственных онкорисков
        </h1>
        <p>
          Пожалуйста, ответьте на вопросы о семейном анамнезе, чтобы получить
          персональную оценку риска наследственных онкологических заболеваний
        </p>
        <p>
          Опросник небольшой и содержит 20-30 вопросов. Это поможет дать вам
          более детальные рекомендации по итогам теста.
        </p>
      </div>
      <div className="section">
        <h2>Короткая информация о себе</h2>
        <Input
          getState={fullName}
          setState={setFullName}
          stateName={fullName.title}
        />
        <Radio
          getState={gender}
          setState={setGender}
          stateName={gender.title}
        />
        <Input
          getState={dataBirthday}
          setState={setDataBirthday}
          stateName={dataBirthday.title}
          isDate={true}
          isNoMinWidth={true}
        />
        <Input
          getState={getWeight}
          setState={setWeight}
          stateName={getWeight.title}
          typeInput="number"
        />
        <Input
          getState={getHeight}
          setState={setHeight}
          stateName={getHeight.title}
          typeInput="number"
        />
        <Input
          getState={getNationality}
          setState={setNationality}
          stateName={getNationality.title}
          notForValidation={true}
          onlyText={true}
        />
        <Radio
          getState={isJews}
          setState={setIsJews}
          stateName={isJews.title}
        />
      </div>
      {gender.value === "Женский" ? (
        <div className="section">
          <h2>Репродуктивная система</h2>
          <Input
            getState={getAgeStartMenstruation}
            setState={setAgeStartMenstruation}
            stateName={getAgeStartMenstruation.title}
            typeInput="number"
          />
          <Radio
            getState={getNumberPregants}
            setState={setNumberPregants}
            stateName={getNumberPregants.title}
          />
          {getNumberPregants.value === "Да" ? (
            <div>
              <Input
                getState={getAgeFirstchildbirth}
                setState={setAgeFirstchildbirth}
                stateName={getAgeFirstchildbirth.title}
                typeInput="number"
              />
              <Input
                getState={getLactation}
                setState={setLactation}
                stateName={getLactation.title}
                typeInput="number"
                notForValidation={true}
              />
            </div>
          ) : null}
          <Radio
            getState={isHormonalContraceptives}
            setState={setHormonalContraceptives}
            stateName={isHormonalContraceptives.title}
          />
          {isHormonalContraceptives.value === "Да" ? (
            <Input
              getState={getDaysHormonalContraceptives}
              setState={setDaysHormonalContraceptives}
              stateName={getDaysHormonalContraceptives.title}
              typeInput="number"
            />
          ) : null}
        </div>
      ) : null}
      <div className="section">
        <h2>Анамнез</h2>
        <Radio
          getState={isCcancerDiagnosis}
          setState={setCcancerDiagnosis}
          stateName={isCcancerDiagnosis.title}
        />
        {isCcancerDiagnosis.value === "Да" ? (
          <div>
            <Input
              getState={getNameCancerDiagnosis}
              setState={setNameCancerDiagnosis}
              stateName={`${getNameCancerDiagnosis.title}(Амнез)`}
              wide={true}
            />
            <Input
              getState={getAgeCancerDiagnosis}
              setState={setAgeCancerDiagnosis}
              stateName={`${getAgeCancerDiagnosis.title}(Амнез)`}
              typeInput="number"
            />
            <Radio
              getState={isСhemotherapy}
              setState={setСhemotherapy}
              stateName={isСhemotherapy.title}
            />
            <Radio
              getState={isHormoneTherapy}
              setState={setHormoneTherapy}
              stateName={isHormoneTherapy.title}
            />
            <Radio
              getState={isRadiationTherapy}
              setState={setRadiationTherapy}
              stateName={isRadiationTherapy.title}
            />
          </div>
        ) : null}
        <Radio
          getState={isConcomitantDiagnosis}
          setState={setConcomitantDiagnosis}
          stateName={isConcomitantDiagnosis.title}
        />
        {isConcomitantDiagnosis.value === "Да" ? (
          <Input
            getState={getConcomitantDiagnosis}
            setState={setConcomitantDiagnosisInput}
            stateName={getConcomitantDiagnosis.title}
            wide={true}
          />
        ) : null}
        <Radio
          getState={isGeneticTesting}
          setState={setGeneticTesting}
          stateName={isGeneticTesting.title}
        />
        {isGeneticTesting.value === "Да" ? (
          <Input
            getState={getGeneticTestingResult}
            setState={setGeneticTestingResult}
            stateName={getGeneticTestingResult.title}
            wide={true}
          />
        ) : null}
        <Radio
          getState={isBiopsy}
          setState={setBiopsy}
          stateName={isBiopsy.title}
        />
        {isBiopsy.value === "Да" ? (
          <div>
            <Radio
              getState={getNumbersBiopsy}
              setState={setNumbersBiopsy}
              stateName={getNumbersBiopsy.title}
            />
            <Input
              getState={getBiopsyOrganAndResult}
              setState={setBiopsyOrganAndResult}
              stateName={getBiopsyOrganAndResult.title}
              wide={true}
            />
            <Radio
              getState={isBiopsyHyperplasia}
              setState={setBiopsyHyperplasia}
              stateName={isBiopsyHyperplasia.title}
            />
          </div>
        ) : null}
        <Radio
          getState={isPreventiveSurgery}
          setState={setPreventiveSurgery}
          stateName={isPreventiveSurgery.title}
        />
        {isPreventiveSurgery.value === "Да" ? (
          <CheckBokses
            getState={getPreventiveSurgery}
            setState={setPreventiveSurgerySelect}
            stateName={getPreventiveSurgery.title}
          />
        ) : null}
        <Radio
          getState={isColonPolyps}
          setState={setColonPolyps}
          stateName={isColonPolyps.title}
        />
        {isColonPolyps.value === "Да" ? (
          <Input
            getState={getColonPolypsResult}
            setState={setColonPolypsResult}
            stateName={getColonPolypsResult.title}
            typeInput="number"
          />
        ) : null}
      </div>
      <div className="section">
        <h2>Семейный анамнез по раку молочной железы</h2>
        <p>
          Отметьте имя каждого человека в вашей семье, у которого был выявлен
          рак молочной железы. Если их было несколько, то чуть ниже можно будет
          добавить другого члена семьи
        </p>
        <Radio
          getState={isRelativesWithBreastCancer}
          setState={setIsRelativesWithBreastCancer}
          stateName={isRelativesWithBreastCancer.title}
        />
        {isRelativesWithBreastCancer.value === "Да" ? (
          <div>
            {getRelativesWithBreastCancer.map((item, index) => {
              return (
                <RelativesWithBreastCancer
                  index={index}
                  key={item.id}
                  getState={item}
                  getCounter={item.id}
                  setState={(value) =>
                    setRelativesWithBreastCancer(
                      getRelativesWithBreastCancer.map((item) =>
                        item.id === value.id ? value : item
                      )
                    )
                  }
                  removeSection={(id) => {
                    setRelativesWithBreastCancer(
                      getRelativesWithBreastCancer.filter((el) => el !== id)
                    );
                  }}
                />
              );
            })}
            <AddButton
              addValue={{
                id: new Date().getTime(),
              }}
              setVauelState={(item) =>
                setRelativesWithBreastCancer([
                  ...getRelativesWithBreastCancer,
                  item,
                ])
              }
              titleButton="Добавить другого члена семьи"
            />
          </div>
        ) : null}
      </div>
      <div className="section">
        <h2>Семейный анамнез по другим онкологическим заболеваниям</h2>
        <p>
          Отметьте имя каждого человека в вашей семье, у которого было выявлено
          любое онкологическое заболевание (за исключением рака молочной
          железы).
        </p>
        <Radio
          getState={isRelativesWithOtherCancer}
          setState={setIsRelativesWithOtherCancer}
          stateName={isRelativesWithOtherCancer.title}
        />
        {isRelativesWithOtherCancer.value === "Да" ? (
          <div>
            {getRelativesWithOtherCancer.map((item, index) => {
              return (
                <RelativesWithOtherCancer
                  index={index}
                  getCounter={index}
                  key={item.id}
                  getState={item}
                  removeSection={(id) => {
                    setRelativesWithOtherCancer(
                      getRelativesWithOtherCancer.filter((el) => el !== id)
                    );
                  }}
                  setState={(value) =>
                    setRelativesWithOtherCancer(
                      getRelativesWithOtherCancer.map((item) =>
                        item.id === value.id ? value : item
                      )
                    )
                  }
                />
              );
            })}
            <AddButton
              addValue={{
                id: new Date().getTime(),
              }}
              setVauelState={(item) =>
                setRelativesWithOtherCancer([
                  ...getRelativesWithOtherCancer,
                  item,
                ])
              }
              titleButton="Добавить другого члена семьи"
            />
          </div>
        ) : null}
      </div>
      <div className="end">
        <span>Спасибо за тест!</span>
      </div>
      {hidePrevButton ? null : (
        <PrevButton
          searchClass="section"
          activeClass="activeSection"
          titleButton="Назад"
          setHidePrevButton={setHidePrevButton}
          setBtnName={setButtonName}
        />
      )}
      <FormButton
        searchClass="section"
        activeClass="activeSection"
        btnName={buttonName}
        setBtnName={setButtonName}
        setHidePrevButton={setHidePrevButton}
        getAllState
      />
    </form>
  );
}

export default App;
