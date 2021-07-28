import classes from './Counter.module.css';
import { connect } from 'react-redux';
import {Component} from 'react'

class Counter extends Component{

  incrementCounterHandler = () => {
    this.props.increment()
  }

  decrementCounterHandler = () => {
    this.props.decrement()
  }

  toggleCounterHandler = () => {};

  render()
  {
    return(
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <button className="counterButton" onClick={this.incrementCounterHandler.bind(this)}>Increment Counter</button>
      <button className="counterButton" onClick={this.decrementCounterHandler.bind(this)}>Decrement Counter</button><br/>
      <button className="counterButton" onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
