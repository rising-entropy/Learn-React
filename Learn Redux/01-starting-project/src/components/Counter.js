import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/index'

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const toggleCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch()

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
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
