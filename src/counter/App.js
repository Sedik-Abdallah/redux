//* App.js

import { useSelector, useDispatch } from 'react-redux';
import { Incrementer, Decrementer, Reset } from './action';
function App() {
  const num = useSelector(data => data.num);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{num}</div>
      <div>
        <button onClick={() => dispatch(Incrementer())}>Incrementer</button>
        <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
        <button onClick={() => num.useDispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
}
export default App;
