import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartItems = useSelector(state=>state.cart.items)
//id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item)=>(
          <CartItem key={item.id} item={{ title: item.name, id: item.id, price: item.price, quantity: item.quantity, total: item.totalPrice}}
        />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
