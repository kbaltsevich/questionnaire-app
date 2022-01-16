import "./App.css";
import React, { useState } from "react";
import FormButton from "./components/FormButton/FormButton";
import Input from "./components/Input/Input";
import Radio from "./components/Radio/Radio";
import RelativesWithBreastCancer from "./components/RelativesWithBreastCancer/RelativesWithBreastCancer";
import AddButton from "./components/addButton/AddButton";
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
    placeholder: "Онкогепатология",
    value: "",
  });
  const [getAgeCancerDiagnosis, setAgeCancerDiagnosis] = useState({
    title: "Возраст постановки диагноза, лет",
    description: "",
    placeholder: "15",
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
    description: "(Прочие хронические и онкологические заболевания)",
    buttons: ["Да", "Нет"],
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
    placeholder: "Не помню, но вроде все было хорошо",
    value: "",
  });

  const [isBiopsy, setBiopsy] = useState({
    title: "Выполнялись ли диагностические биопсии?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [getBiopsyOrganAndResult, setBiopsyOrganAndResult] = useState({
    title: "На каком органе проводилась биопсия и какой был результат?",
    description: "",
    placeholder: "Печень. Результат был отрицательный",
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

  const [isColonPolyps, setColonPolyps] = useState({
    title: "Выявлялись ли у вас полипы толстой кишки?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });

  const [getColonPolypsResult, setColonPolypsResult] = useState({
    title: "Сколько их было обнаружено?",
    description: "",
    placeholder: "3",
    value: "",
  });

  const [isRelativesWithOtherCancer, setRelativesWithOtherCancer] = useState({
    title:
      "Были ли у вас родственники у которых были выявлены любые другие онкологические заболевания?",
    description: "",
    buttons: ["Да", "Нет"],
    value: "",
  });
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

  console.log(getRelativesWithBreastCancer);

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
        <h2>Короткая информация о себе</h2>
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
          stateName="nationality"
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
          <Radio
            getState={isHormonalContraceptives}
            setState={setHormonalContraceptives}
            stateName="isHormonalContraceptives"
          />
          {isHormonalContraceptives.value === "Да" ? (
            <Input
              getState={getDaysHormonalContraceptives}
              setState={setDaysHormonalContraceptives}
              stateName="getDaysHormonalContraceptives"
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
          stateName="cancerDiagnosis"
        />
        {isCcancerDiagnosis.value === "Да" ? (
          <div>
            <Input
              getState={getNameCancerDiagnosis}
              setState={setNameCancerDiagnosis}
              stateName="nameCancerDiagnosis"
            />
            <Input
              getState={getAgeCancerDiagnosis}
              setState={setAgeCancerDiagnosis}
              stateName="ageCancerDiagnosis"
              typeInput="number"
            />
            <Radio
              getState={isСhemotherapy}
              setState={setСhemotherapy}
              stateName="isСhemotherapy"
            />
            <Radio
              getState={isHormoneTherapy}
              setState={setHormoneTherapy}
              stateName="isHormoneTherapy"
            />
            <Radio
              getState={isRadiationTherapy}
              setState={setRadiationTherapy}
              stateName="isRadiationTherapy"
            />
          </div>
        ) : null}
        <Radio
          getState={isConcomitantDiagnosis}
          setState={setConcomitantDiagnosis}
          stateName="isConcomitantDiagnosis"
        />
        <Radio
          getState={isGeneticTesting}
          setState={setGeneticTesting}
          stateName="isGeneticTesting"
        />
        {isGeneticTesting.value === "Да" ? (
          <Input
            getState={getGeneticTestingResult}
            setState={setGeneticTestingResult}
            stateName="getGeneticTestingResult"
          />
        ) : null}
        <Radio getState={isBiopsy} setState={setBiopsy} stateName="isBiopsy" />
        {isBiopsy.value === "Да" ? (
          <div>
            <Input
              getState={getBiopsyOrganAndResult}
              setState={setBiopsyOrganAndResult}
              stateName="getBiopsyOrganAndResult"
            />
            <Radio
              getState={isBiopsyHyperplasia}
              setState={setBiopsyHyperplasia}
              stateName="isBiopsyHyperplasia"
            />
          </div>
        ) : null}
        <Radio
          getState={isPreventiveSurgery}
          setState={setPreventiveSurgery}
          stateName="isPreventiveSurgery"
        />
        <Radio
          getState={isColonPolyps}
          setState={setColonPolyps}
          stateName="isColonPolyps"
        />
        {isColonPolyps.value === "Да" ? (
          <Input
            getState={getColonPolypsResult}
            setState={setColonPolypsResult}
            stateName="getColonPolypsResult"
            typeInput="number"
          />
        ) : null}
      </div>
      <div className="section">
        <h2>Семейный анамнез по раку молочной железы</h2>
        <p>
          Отметьте имя каждого человека в вашей семье, у которого был выявлен
          рак молочной железы. Если их было несколько, то в конце опроса можно
          будет добавить другого члена семьи
        </p>
        <Radio
          getState={isRelativesWithBreastCancer}
          setState={setIsRelativesWithBreastCancer}
          stateName="isRelativesWithBreastCancer"
        />
        {isRelativesWithBreastCancer.value === "Да" ? (
          <div>
            {getRelativesWithBreastCancer.map((item) => {
              return (
                <RelativesWithBreastCancer
                  key={item.id}
                  getState={getRelativesWithBreastCancer}
                  setStete={(vaule) =>
                    setRelativesWithBreastCancer(
                      ...getRelativesWithBreastCancer,
                      {
                        id: item.id,
                        [vaule]: vaule.value,
                      }
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
          setState={setRelativesWithOtherCancer}
          stateName="isRelativesWithOtherCancer"
        />
        {isRelativesWithOtherCancer.value === "Да" ? (
          <div>
            <Input
              getState={getNameRelativesWithOtherCancer}
              setState={setNameRelativesWithOtherCancer}
              stateName="getNameRelativesWithOtherCancer"
            />
            <Input
              getState={getDegreeRelativesWithOtherCancer}
              setState={setDegreeRelativesWithOtherCancer}
              stateName="getDegreeRelativesWithOtherCancer"
            />
            <Radio
              getState={isRelativesWithOtherFoM}
              setState={setRelativesWithOtherFoM}
              stateName="isRelativesWithOtherFoM"
            />
            <Input
              getState={getRelativesDiagnosissOrOrgan}
              setState={setRelativesDiagnosissOrOrgan}
              stateName="getRelativesDiagnosissOrOrgan"
            />
            <Input
              getState={getAgeRelativesWithOtherCancer}
              setState={setAgeRelativesWithOtherCancer}
              stateName="getAgeRelativesWithOtherCancer"
              typeInput="number"
            />
          </div>
        ) : null}
      </div>
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
