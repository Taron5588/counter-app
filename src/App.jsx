import { useState } from 'react';
import './App.css';

function Counter() {

  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(20);
  const [minValue, setMinValue] = useState(0);
  const [step, setStep] = useState(1)

  const increase = () => { if (count < maxValue) { setCount(count + step);}};

  const decrease = () => {if (count > minValue) {setCount(count - step);}};

  const reset = () => {setCount(0);};




  return (
    <div className="App">
      start
    </div>
  );
}

export default Counter;
