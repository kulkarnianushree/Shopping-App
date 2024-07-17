import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../Store/cart';

const CartItem = (props) => {
  const { title, total, price } = props.item;
  const dispatch = useDispatch();

  const decrementButtonHandler = () => {
    dispatch(CartActions.decrement());
    // If quantity reaches 0, remove the item
    if (props.item.quantity === 1) {
      dispatch(CartActions.removeItem(title));
    }
  };

  const incrementButtonHandler = () => {
    dispatch(CartActions.increment());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>
            (${price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementButtonHandler}>-</button>
          <button onClick={incrementButtonHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
