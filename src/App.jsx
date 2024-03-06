import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newInput) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newInput, //Here I am overriding that one key with the new input value i.e. userInput[initialInvestment]:500000
        // without using [] will mean that you are setting a new key inputIdentifier into the object, so we use [inputIdentifier] so that it takes dynamic key vale from the function argument.
        //In JavaScript (and JSON), object keys are unique. If you attempt to set the same key multiple times within an object literal, the last assignment is the one that takes effect; earlier values are overwritten. so it becomes initialInvestment:500000
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleUserInput} userInput={userInput}/>
      {isValidInput ? <Results results={userInput}/> : <p className="center">Please enter a duration greater than zero</p>}
    </>
  );
}

export default App;
