import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector((state) => state.Cart.items);
  const show = useSelector((state) => state.Cart.Cartshow);

  return (
    <div>
      {show && items.length > 0 && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.Title} // Use a unique key
                item={{
                  title: item.Title,
                  total: item.Price * item.quantity, // Calculate total based on quantity
                  price: item.Price,
                  quantity: item.quantity, // Include quantity in the item
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default Cart;
