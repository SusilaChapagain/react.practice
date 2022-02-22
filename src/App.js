import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Display } from "./Display";

const App = () => {
  const [number, setNumber] = useState(1135);
  const [str, setStr] = useState(" ");

  // const numb = "17854";
  // const App = () => {
  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100);
  };
  const handleOnClick = () => {
    const num = randomNumberGenerator();
    setNumber(num);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;

    setStr(value);
  };

  return (
    <div className="">
      {/* <Header />
      <Main />
      <Footer /> */}

      <h1>Lotto Generator</h1>
      <hr />
      <div className="numbers">
        <button onClick={handleOnClick}>Generate Number</button>
        <br />
        <button>Generated Number</button>
        <br />
        <Display myNum={number} myStr={str} />
        <input type="text" name="" onChange={handleOnChange} />
        <br />
        Power Ball: ...
      </div>
    </div>
  );
};

export default App;
