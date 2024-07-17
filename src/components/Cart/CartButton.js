import { CartActions } from '../../Store/cart';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = () => {
  const count = useSelector((state) => state.Cart.count);
  const dispatch = useDispatch();

  const CartButtonHandler = () => {
    dispatch(CartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={CartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
