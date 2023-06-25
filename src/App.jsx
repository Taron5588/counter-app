import { useState } from 'react';
import './App.css';

function Counter() {

  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(19);
  const [minValue, setMinValue] = useState(0);
  const [step, setStep] = useState(1)

  const increase = () => { if (count < maxValue) { setCount(count + step);}};
  const decrease = () => {if (count > minValue) {setCount(count - step);}};
  const reset = () => {setCount(0);};

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease} disabled={count <= minValue}>
          Decrease
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className='input-container'>
       <div>
        <label>
          Max Value:
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Min Value:
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
     </div>
    </div>
  );
}

export default Counter;
