import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../Store/cart';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const product = {
    Title: title,
    Price: price,
    Description: description,
  };
  
  const dispatch = useDispatch();
  
  const addToCartHandler = () => {
    dispatch(CartActions.addItem(product)); // Add or update the item
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
