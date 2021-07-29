import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const toggleCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch()

  const incrementCounterHandler = () => {
    dispatch({type: 'increment'})
  }

  const decrementCounterHandler = () => {
    dispatch({type: 'decrement'})
  }

  const increaseCounterHandler = () => {
    dispatch({type: 'increase', amount: 5})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{toggleCounter ? counter : null}</div>
      <button className="counterButton" onClick={incrementCounterHandler}>Increment Counter</button>
      <button className="counterButton" onClick={decrementCounterHandler}>Decrement Counter</button><br/>
      <button className="counterButton" onClick={increaseCounterHandler}>Increase Counter</button><br/>
      <button className="counterButton" onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
