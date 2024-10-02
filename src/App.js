import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // we have state
  //  [state , use state] = useState(initialValue)

  const [advice, setAdvice] = useState("Advice Show hugee");
  const [darkThemeHandler, setDarkThemeHandler] = useState(false);
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    // Api Call Hugee Bhaeee is se
    const data = await fetch("https://api.adviceSlip.com/advice");

    // for api json
    const {
      slip: { advice: adviceFromApi },
    } = await data.json()

    setAdvice(adviceFromApi);
    setCounter(counter + 1);
    // setCounter(counter + 1);
    setDarkThemeHandler(!darkThemeHandler);

  }
  return (
    <div>
      <h1
        style={{
          backgroundColor: darkThemeHandler ? "black" : "white",
          color: darkThemeHandler ? "white" : "black",
        }}>💡{advice}💡</h1>
      <p>Ab tak aap ne {counter} dafa advices parh li hain.  🎉 </p>
      <p>You have read advice {counter} times so far.  🎉 </p>
      <button onClick={getAdvice} >Click to get advice..!</button>
    </div>
  );
}

export default App;
