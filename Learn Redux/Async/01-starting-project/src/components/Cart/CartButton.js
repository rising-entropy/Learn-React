import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store';
const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartClickHandler = (e) => {
    dispatch(uiActions.toggleCart())
  }

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
