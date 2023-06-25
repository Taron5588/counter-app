import { useState } from 'react';
import './App.css';

function Counter() {

  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [minValue, setMinValue] = useState(0);
  const [step, setStep] = useState(1)




  return (
    <div className="App">
      start
    </div>
  );
}

export default Counter;
