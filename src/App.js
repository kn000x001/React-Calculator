import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");


  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === "" || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
        return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const DeleteLast = () => {
    if(calc === "") {
      return
    }

    const value = calc.slice(0, -1)

    setCalc(value)

    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult(eval(value.toString()));  
    }

  }
  
  const DeleteAll = () => {
   setCalc('')
    setResult("")
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className='current-operand d-flex justify-content-end'>
            {result ? <span className="preview">({result})</span>: ""}&nbsp;
            {calc || "0"}
          </div>
      </div>
      <button className="span-two highlighted" onClick={DeleteAll}>AC</button>
      <button className="highlighted" onClick={DeleteLast}>DEL</button>
      <button className="highlighted" onClick={() => updateCalc('/')}>÷</button> 
      <button onClick={() => updateCalc('1')}>1</button>
      <button onClick={() => updateCalc('2')}>2</button>
      <button onClick={() => updateCalc('3')}>3</button>
      <button className="highlighted" onClick={() => updateCalc('*')}>*</button>
      <button onClick={() => updateCalc('4')}>4</button>
      <button onClick={() => updateCalc('5')}>5</button>
      <button onClick={() => updateCalc('6')}>6</button>
      <button className="highlighted" onClick={() => updateCalc('+')}>+</button>
      <button onClick={() => updateCalc('7')}>7</button>
      <button onClick={() => updateCalc('8')}>8</button>
      <button onClick={() => updateCalc('9')}>9</button>
      <button className="highlighted" onClick={() => updateCalc('-')}>-</button>
      <button onClick={() => updateCalc('.')}>.</button>
      <button onClick={() => updateCalc('0')}>0</button>
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  );
}

export default App;
