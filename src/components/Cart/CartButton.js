import { CartAction } from '../../Store/cart';
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const CartButtonHandler = () =>{
    dispatch(CartAction.toggle())
  }
  return (
    <button className={classes.button} onClick={CartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;