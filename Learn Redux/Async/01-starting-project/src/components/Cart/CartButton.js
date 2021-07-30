import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store';
const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartClickHandler = (e) => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
