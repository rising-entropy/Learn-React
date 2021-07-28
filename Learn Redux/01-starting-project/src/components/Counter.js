import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    dispatch({type: 'increment'})
  }

  const decrementCounterHandler = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button className="counterButton" onClick={incrementCounterHandler}>Increment Counter</button>
      <button className="counterButton" onClick={decrementCounterHandler}>Decrement Counter</button><br/>
      <button className="counterButton" onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
