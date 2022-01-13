import "./App.css";
import React, { useState } from "react";
import Radio from "./components/Radio/Radio";
import Input from "./components/Input/Input";
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

  return (
    <form className="App">
      <Radio getState={gender} setState={setGender} stateName="gender" />
      <Input getState={fullName} setState={setFullName} stateName="fullName" />
      <Radio getState={isJews} setState={setIsJews} stateName="isJews" />
    </form>
  );
}

export default App;
